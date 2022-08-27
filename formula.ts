
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

export class MathArgument {
    term: string;
    value: number;
}

export class ComputeElement {
    mathFunction: MathFunction;
    arguments: MathArgument[];
    returnValue?: MathArgument;
}

export class Formula {
    public terms = new Map<string, string>();
    public flow: ComputeElement[] = [];

    public addComputeElement() {}

    public symbolicComputation(): string {
        return '';
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