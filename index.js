import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
  let input;

  // Intentar leer input.txt
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    // Si no se puede, pedir input por consola
    input = await leerCadena();
    console.log("Entrada ingresada:\n" + input);
  }

  // Crear el stream de caracteres, lexer y obtener tokens (punto 2)
  let inputStream = CharStreams.fromString(input);
  let lexer = new CalculatorLexer(inputStream);

  const tokens = lexer.getAllTokens();
  if (tokens.length === 0) {
    console.error("No se generaron tokens. Verifica la entrada y la gramática.");
    return;
  }

  // Mostrar tabla de tokens y lexemas
  console.log("\nTabla de Tokens y Lexemas:");
  console.log("--------------------------------------------------");
  console.log("| Lexema        | Token                        |");
  console.log("--------------------------------------------------");

  for (const token of tokens) {
    const lexema = token.text;
    const tokenName = CalculatorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    console.log(`| ${lexema.padEnd(14)} | ${tokenName.padEnd(30)} |`);
  }
  console.log("--------------------------------------------------");

  // Volver a crear el lexer y parser para no perder los tokens (porque getAllTokens los consume)
  inputStream = CharStreams.fromString(input);
  lexer = new CalculatorLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new CalculatorParser(tokenStream);

  const tree = parser.prog();

  if (parser.syntaxErrorsCount > 0) {
    console.error("\nSe encontraron errores de sintaxis en la entrada.");
  } else {
    console.log("\nEntrada válida.");
    console.log(`Árbol de derivación: ${tree.toStringTree(parser.ruleNames)}`);

    // Visitar el árbol con tu visitor personalizado
    const visitor = new CustomCalculatorVisitor();
    visitor.visit(tree);
  }
}

function leerCadena() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question("Ingrese una cadena: ", (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

main();