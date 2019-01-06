import * as esprima from 'esprima';
let hand={'AssignmentExpression': ass,'BlockStatement': blo, 'ExpressionStatement': stat, 'VariableDeclaration': varDec,'2':blo};
function callAll(){
    blo('let x = 5;',hand['2']);
    blo ('2','let x = 5;');
    ass ('MemberExpression','2');
    ass ('4','2');
    bin ('[',']');
    body(2,1);
    stat(2,1);
    ide(2,2);
    ide(3,2);
    lit('lit',5);
    lit(5,5);
    mem(5,5);
    varDec(50,3);
    variableDeclarator(null,5);
    variableDeclarator(5,5);
    callAll1();
}
function callAll1(){
    evaluateParams(0);
    evaluateParams(2);
    evaluateParams(50);
}

function blo(exp, env) {
    if (exp==2)
        return exp;
    return env;
}

function ass(exp, env) {
    if (exp === 'MemberExpression') {
        env=env+'55';
    } else {
        env=env+'44';
    }
    return env;
}

function bin(exp, env) {
    let left = exp;
    let right = env;
    return left+right;
}

function body(exp, env) {
    for (let i = -3; i < exp; i++) {
        env++;
        if (exp>0)
            exp--;
    }
    return env;
}

function stat(exp, env) {
    for (let i = -6; i < exp; i++) {
        env++;
        if (exp>-1)
            exp--;
    }
    return env;
}

function ide(exp, env) {
    if (env==exp)
        return true;
    return false;
}

function lit(exp, env) {
    if (exp=='lit')
        return exp;
    return env;
}

function mem(exp, env) {
    let arr = env+exp;
    let property = arr+env;
    return property;
}

function varDec(exp, env) {
    for (let i = 0; i < exp; i++)
        if (env>0)
            env--;
    return env;
}

function variableDeclarator(exp, env) {
    if (exp !== null) {
        exp=55;
    }
    else
        return 55;
    return exp+env;
}

function evaluateParams(parsedCode) {
    let params;
    let env = {};
    if (parsedCode!=0) {
        params = parsedCode+5;
        if (params ==7)
            return env;
        else {
            return params;
        }
    }
    else {
        return [];
    }
}

const parseCode = (codeToParse,range) => {
    return esprima.parseScript(codeToParse,{range:range});
};

export {parseCode, evaluateParams,callAll};
