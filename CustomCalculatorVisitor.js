import CalculatorVisitor from "./generated/CalculatorVisitor.js";
import CalculatorParser from "./generated/CalculatorParser.js";

// Definís tu visitor personalizado extendiendo del generado
export class CustomCalculatorVisitor extends CalculatorVisitor {

  constructor() {
    super();
    this.memory = new Map(); // Memoria para variables
  }

  visitInt(ctx) {
    return parseInt(ctx.INT().getText());
  }

  visitPrintExpr(ctx) {
    const value = this.visit(ctx.expr());
    console.log(`\nResultado: ${value}`);
    return value;
  }

  visitMulDiv(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    if (ctx.op.type === CalculatorParser.MUL) {
      return left * right;
    } else {
      return left / right;
    }
  }

  visitAddSub(ctx) {
    const left = this.visit(ctx.expr(0));
    const right = this.visit(ctx.expr(1));
    if (ctx.op.type === CalculatorParser.ADD) {
      return left + right;
    } else {
      return left - right;
    }
  }

  visitParens(ctx) {
    return this.visit(ctx.expr());
  }

  visitId(ctx) {
    const id = ctx.ID().getText();
    return this.memory.get(id) ?? 0;
  }

  visitAssign(ctx) {
    const id = ctx.ID().getText();
    const value = this.visit(ctx.expr());
    this.memory.set(id, value);
    return value;
  }
}