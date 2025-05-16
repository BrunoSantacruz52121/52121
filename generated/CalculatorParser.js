// Generated from calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import calculatorListener from './calculatorListener.js';
import calculatorVisitor from './calculatorVisitor.js';

const serializedATN = [4,1,10,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,2,3,2,26,8,2,1,
3,1,3,1,3,5,3,31,8,3,10,3,12,3,34,9,3,1,4,1,4,1,4,5,4,39,8,4,10,4,12,4,42,
9,4,1,5,1,5,1,5,3,5,47,8,5,1,6,1,6,1,6,1,6,1,6,3,6,54,8,6,1,7,1,7,3,7,58,
8,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,1,1,0,1,2,58,0,18,1,0,0,0,
2,20,1,0,0,0,4,22,1,0,0,0,6,27,1,0,0,0,8,35,1,0,0,0,10,46,1,0,0,0,12,53,
1,0,0,0,14,55,1,0,0,0,16,59,1,0,0,0,18,19,3,2,1,0,19,1,1,0,0,0,20,21,3,4,
2,0,21,3,1,0,0,0,22,25,3,6,3,0,23,24,5,3,0,0,24,26,3,4,2,0,25,23,1,0,0,0,
25,26,1,0,0,0,26,5,1,0,0,0,27,32,3,8,4,0,28,29,5,5,0,0,29,31,3,8,4,0,30,
28,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,7,1,0,0,0,34,32,
1,0,0,0,35,40,3,10,5,0,36,37,5,4,0,0,37,39,3,10,5,0,38,36,1,0,0,0,39,42,
1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,9,1,0,0,0,42,40,1,0,0,0,43,44,5,6,
0,0,44,47,3,10,5,0,45,47,3,12,6,0,46,43,1,0,0,0,46,45,1,0,0,0,47,11,1,0,
0,0,48,54,3,14,7,0,49,50,5,7,0,0,50,51,3,2,1,0,51,52,5,8,0,0,52,54,1,0,0,
0,53,48,1,0,0,0,53,49,1,0,0,0,54,13,1,0,0,0,55,57,5,1,0,0,56,58,3,16,8,0,
57,56,1,0,0,0,57,58,1,0,0,0,58,15,1,0,0,0,59,60,7,0,0,0,60,17,1,0,0,0,6,
25,32,40,46,53,57];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class calculatorParser extends antlr4.Parser {

    static grammarFileName = "calculator.g4";
    static literalNames = [ null, null, null, "'\\u2192'", "'\\u2227'", 
                            "'\\u2228'", "'\\u00AC'", "'('", "')'" ];
    static symbolicNames = [ null, "LETTER", "DIGIT", "IMPL", "AND", "OR", 
                             "NO", "LPAREN", "RPAREN", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "formula", "implication", "disjunction", 
                         "conjunction", "negation", "primary", "variable", 
                         "variable_char" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = calculatorParser.ruleNames;
        this.literalNames = calculatorParser.literalNames;
        this.symbolicNames = calculatorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, calculatorParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.formula();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, calculatorParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20;
	        this.implication();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implication() {
	    let localctx = new ImplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, calculatorParser.RULE_implication);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        this.disjunction();
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 23;
	            this.match(calculatorParser.IMPL);
	            this.state = 24;
	            this.implication();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, calculatorParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27;
	        this.conjunction();
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 28;
	            this.match(calculatorParser.OR);
	            this.state = 29;
	            this.conjunction();
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, calculatorParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.negation();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4) {
	            this.state = 36;
	            this.match(calculatorParser.AND);
	            this.state = 37;
	            this.negation();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, calculatorParser.RULE_negation);
	    try {
	        this.state = 46;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.match(calculatorParser.NO);
	            this.state = 44;
	            this.negation();
	            break;
	        case 1:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, calculatorParser.RULE_primary);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.variable();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(calculatorParser.LPAREN);
	            this.state = 50;
	            this.formula();
	            this.state = 51;
	            this.match(calculatorParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, calculatorParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(calculatorParser.LETTER);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===2) {
	            this.state = 56;
	            this.variable_char();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_char() {
	    let localctx = new Variable_charContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, calculatorParser.RULE_variable_char);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

calculatorParser.EOF = antlr4.Token.EOF;
calculatorParser.LETTER = 1;
calculatorParser.DIGIT = 2;
calculatorParser.IMPL = 3;
calculatorParser.AND = 4;
calculatorParser.OR = 5;
calculatorParser.NO = 6;
calculatorParser.LPAREN = 7;
calculatorParser.RPAREN = 8;
calculatorParser.NEWLINE = 9;
calculatorParser.WS = 10;

calculatorParser.RULE_prog = 0;
calculatorParser.RULE_formula = 1;
calculatorParser.RULE_implication = 2;
calculatorParser.RULE_disjunction = 3;
calculatorParser.RULE_conjunction = 4;
calculatorParser.RULE_negation = 5;
calculatorParser.RULE_primary = 6;
calculatorParser.RULE_variable = 7;
calculatorParser.RULE_variable_char = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_prog;
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_formula;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_implication;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	IMPL() {
	    return this.getToken(calculatorParser.IMPL, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterImplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitImplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitImplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.OR);
	    } else {
	        return this.getToken(calculatorParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitDisjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitDisjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(calculatorParser.AND);
	    } else {
	        return this.getToken(calculatorParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitConjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitConjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_negation;
    }

	NO() {
	    return this.getToken(calculatorParser.NO, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitNegation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitNegation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_primary;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(calculatorParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(calculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_variable;
    }

	LETTER() {
	    return this.getToken(calculatorParser.LETTER, 0);
	};

	variable_char() {
	    return this.getTypedRuleContext(Variable_charContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Variable_charContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = calculatorParser.RULE_variable_char;
    }

	LETTER() {
	    return this.getToken(calculatorParser.LETTER, 0);
	};

	DIGIT() {
	    return this.getToken(calculatorParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.enterVariable_char(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof calculatorListener ) {
	        listener.exitVariable_char(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof calculatorVisitor ) {
	        return visitor.visitVariable_char(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




calculatorParser.ProgContext = ProgContext; 
calculatorParser.FormulaContext = FormulaContext; 
calculatorParser.ImplicationContext = ImplicationContext; 
calculatorParser.DisjunctionContext = DisjunctionContext; 
calculatorParser.ConjunctionContext = ConjunctionContext; 
calculatorParser.NegationContext = NegationContext; 
calculatorParser.PrimaryContext = PrimaryContext; 
calculatorParser.VariableContext = VariableContext; 
calculatorParser.Variable_charContext = Variable_charContext; 
