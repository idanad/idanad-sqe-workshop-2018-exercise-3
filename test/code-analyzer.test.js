import assert from 'assert';
import {parseCode,callAll} from '../src/js/code-analyzer';

describe('test1', () => {
    it('test1', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foo(x){\n' +
            '    return a = x + 1;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test2', () => {
    it('test2', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foo1(x,y,z){\n' +
            '    return sra = x23 + 1;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test3', () => {
    it('test3', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function fo21312o(xfsx){\n' +
            '    return a = dsax + 21;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test4', () => {
    it('test4', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function fofasfo(asffx){\n' +
            '    return a = dsdsx + 1;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test5', () => {
    it('test5', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foo(xggg){\n' +
            '    return a = xgg + 1;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test6', () => {
    it('test6', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foodsads(dasdsadx){\n' +
            '    return asdsa = xdsada + 1;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test7', () => {
    it('test7', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function sadfoo(dsadx){\n' +
            '    return a = x + 124;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test8', () => {
    it('test8', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foodddddd(x){\n' +
            '    return aaaaa = x + x + 1;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test9', () => {
    it('test9', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foo(x){\n' +
            '    return ab = x - 13323;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});

describe('test10', () => {
    it('test10', () => {
        callAll();
        let actualSubstitutedCode = parseCode(
            'function foo(x,z,e,y){\n' +
            '    return a = x + y + t - e;\n' +
            '    }',true);
        assert(actualSubstitutedCode,'');
    });

});
