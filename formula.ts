
export enum MathFunction {
    ADD = 'ADD',
    SUBTRACT = 'SUBTRACT',
    MULTIPLY = 'MULTIPLY',
    DIVIDE = 'DIVIDE',
    POWER = 'POWER',
    SQRT = 'SQRT',
    LOG = 'LOG',
    LN = 'LN',
    EXP = 'EXP',
    ABS = 'ABS',
    SIN = 'SIN',
    COS = 'COS',
    TAN = 'TAN',
    ASIN = 'ASIN',
    ACOS = 'ACOS',
    ATAN = 'ATAN',
    CEIL = 'CEIL',
    FLOOR = 'FLOOR',
    ROUND = 'ROUND',
    MAX = 'MAX',
    MIN = 'MIN',
    STANDARD_DEVIATION = 'STANDARD_DEVIATION',
    VARIANCE = 'VARIANCE',
    MEDIAN = 'MEDIAN',
    PERCENTILE = 'PERCENTILE',
    QUARTILE = 'QUARTILE',
}

export enum MathFunctionActionPreposition {
    ADD = 'to',
    SUBTRACT = 'from',
    MULTIPLY = 'by',
    DIVIDE = 'by',
    POWER = 'to the power of',
    SQRT = 'to the square root of',
    LOG = 'to the base of',
    LN = 'to the base of',
    EXP = 'to the power of',
    ABS = 'of',
    SIN = 'of',
    COS = 'of',
    TAN = 'of',
    ASIN = 'of',
    ACOS = 'of',
    ATAN = 'of',
    CEIL = 'of',
    FLOOR = 'of',
    ROUND = 'of',
    MAX = 'of',
    MIN = 'of',
    STANDARD_DEVIATION = 'of',
    VARIANCE = 'of',
    MEDIAN = 'of',
    PERCENTILE = 'of',
    QUARTILE = 'of',
}

export interface MathArgument {
    term: string;
    value: number;
}

export interface ComputeElement {
    mathFunction: MathFunction;
    arguments: MathArgument[];
    returnValue?: MathArgument;
}

export class Formula {
    public flow: ComputeElement[] = [];

    public addComputeElement(computeElement: ComputeElement) {
        this.flow.push(computeElement);
    }

    public getSymbolicComputation(): string {
        let output = '';
        let lastResult;

        for (const element of this.flow) {
            output +=  `${element.returnValue?.term || 'result' } = ` + element.mathFunction + '(';

            for (const argument of element.arguments) {
                output += argument.term + ',';
            }

            output = output.slice(0, -1);
            output += ')';

            if (lastResult) {
                output += ` ${MathFunctionActionPreposition[element.mathFunction]} ${lastResult}`;
            }

            lastResult = element.returnValue?.term || 'last result';

            // output += ` = ${lastResult}`;

            output += '\n';
        }

        return output;
    }

    public getFormula(formula: string): string {
        return formula;
    }

    public add() {}
    public subtract() {}
    public multiply() {}
    public divide() {}
    public power() {}
    public root() {}
    public factorial() {}
    public modulo() {}
    public sin() {}
    public cos() {}
    public tan() {}
    public cot() {}
    public sec() {}
    public csc() {}
    public arcsin() {}
    public arccos() {}
    public arctan() {}
    public arccot() {}
    public arcsec() {}
    public arccsc() {}
    public sinh() {}
    public cosh() {}
    public tanh() {}
    public coth() {}
    public sech() {}
    public csch() {}
    public arcsinh() {}
    public arccosh() {}
    public arctanh() {}
    public arccoth() {}
    public arcsech() {}
    public arccsch() {}
    public log() {}
    public ln() {}
    public log10() {}
    public abs() {}
    public floor() {}
    public ceil() {}
    public round() {}
    public max() {}
    public min() {}
    public pi() {}
    public e() {}
    public euler() {}
    public eulerMascheroni() {}
    public phi() {}
    public goldenRatio() {}
    public fibonacci() {}
    public mean() {}
    public median() {}
    public mode() {}
    public variance() {}
    public standardDeviation() {}
    public covariance() {}
    public correlation() {}
    public skewness() {}
    public kurtosis() {}
    public zScore() {}
    public percentile() {}
    public percentileRank() {}
    public harmonicMean() {}
    public geometricMean() {}
    public harmonicMeanArithmetic() {}
    public geometricMeanArithmetic() {}
    public harmonicMeanGeometric() {}
    public geometricMeanGeometric() {}
    public harmonicMeanHarmonic() {}
    public geometricMeanHarmonic() {}
    public harmonicMeanArithmeticHarmonic() {}
    public geometricMeanArithmeticHarmonic() {}
    public harmonicMeanGeometricHarmonic() {}
    public geometricMeanGeometricHarmonic() {}
    public harmonicMeanHarmonicHarmonic() {}
    public geometricMeanHarmonicHarmonic() {}
    public harmonicMeanArithmeticGeometric() {}
    public geometricMeanArithmeticGeometric() {}
    public harmonicMeanGeometricGeometric() {}
    public geometricMeanGeometricGeometric() {}
    public harmonicMeanHarmonicGeometric() {}
    public geometricMeanHarmonicGeometric() {}
    public harmonicMeanArithmeticHarmonicGeometric() {}
    public geometricMeanArithmeticHarmonicGeometric() {}
    public harmonicMeanGeometricHarmonicGeometric() {}
    public geometricMeanGeometricHarmonicGeometric() {}
    public harmonicMeanHarmonicHarmonicGeometric() {}
    public geometricMeanHarmonicHarmonicGeometric() {}

}

const formula = new Formula();

formula.addComputeElement({ mathFunction: MathFunction.ADD, arguments: [ { term: 'x', value: 1 }, { term: 'y', value: 2 } ] });
formula.addComputeElement({ mathFunction: MathFunction.SUBTRACT, arguments: [ { term: 'badx', value: 1 } ] });

console.log(formula.getSymbolicComputation())