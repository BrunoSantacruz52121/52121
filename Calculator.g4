grammar calculator;
// Gramatica
prog: formula
;
formula: implication
;
implication: disjunction (IMPL implication)?
;
disjunction: conjunction (OR conjunction)*
;
conjunction: negation (AND negation)*
;
negation: NO negation
        | primary
;
primary: variable
       | LPAREN formula RPAREN
;
variable: LETTER (variable_char)?
;
variable_char: LETTER | DIGIT
;
// Lexemas (tokens)
LETTER:[a-z]+;
DIGIT:[0-9];
IMPL:'\u2192';   // → IMPLICATION
AND:'\u2227';   // ∧ AND
OR:'\u2228';   // ∨ OR
NO:'\u00AC';   // ¬ NEGATION
LPAREN:'(';
RPAREN:')';
NEWLINE: '\r'? '\n' -> skip;
WS:[ \t]+ -> skip;