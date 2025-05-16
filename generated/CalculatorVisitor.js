// Generated from calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by calculatorParser.

export default class calculatorVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by calculatorParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#formula.
	visitFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#implication.
	visitImplication(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#disjunction.
	visitDisjunction(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#conjunction.
	visitConjunction(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#negation.
	visitNegation(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#primary.
	visitPrimary(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#variable.
	visitVariable(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by calculatorParser#variable_char.
	visitVariable_char(ctx) {
	  return this.visitChildren(ctx);
	}



}