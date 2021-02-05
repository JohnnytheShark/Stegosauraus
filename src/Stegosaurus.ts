/**
 * @class Triceratop, who said they couldn't do math?
 * 
 */
export class Stegosaurus {
    /**
     * Dividend Summation 
     * Adds up all the dividends from a given array into a single dollar amount
     * @param Dividends an array of the dividend payments received from a given stock
     */
    public DividendSum(Dividends: number[] =[0]){
        return Dividends.reduce((a,b)=>a+b,0)
    }
    /**
     * Holding Period Yield
     * Refers to the total return earned from an investment over the holding period, percentage is returned
     * @param BeginningValue is the value you bought the asset at the beginning
     * @param EndingValue is the value that you sold the asset at.
     * @param Dividends is an array of all the dividends that the asset paid you.
     */
    public HPY(BeginningValue: number, EndingValue: number,Dividends: number[]=[0]){
        return ((this.DividendSum(Dividends) + (EndingValue - BeginningValue)) / BeginningValue)*100
    }
    /**
     * Dividend Yield
     * Returns the percentage a company pays out annually in dividends per dollar you invest
     * @param StockPrice is the current stock price
     * @param Dividends is an array of all the dividends that a stock has paid out in a given year
     */

    public DividendYield(StockPrice: number, Dividends: number[]=[0]){
        return (this.DividendSum(Dividends)/StockPrice)*100
    }
    /**
     * Future Value of an investment based on simple interest. (Simple Interest means it only compounds once a year) and only on the initial principal not compounded.
     * @param Principal your Beginning (Initial) Investment
     * @param InterestRate the interest rate you are receiving (please ensure your interest rate is typed in as 0.10 for 10% interest)
     * @param Years the number of years you will invest your money for
     */
    public FVSimple(Principal: number, InterestRate: number, Years: number){
        return Principal*(1+(InterestRate*Years))
    }
    /**
     * Future Value based on Compound Interest. Based on your investment compounding annually (or once a year)
     * @param Principal your Beginning (Initial) Investment
     * @param InterestRate the interest rate you are receiving (please ensure your interest rate is typed in as 0.10 for 10% interest)
     * @param Years the number of years you will invest your money for 
     */
    public FVCompoundAnnual(Principal: number, InterestRate: number, Years: number){
        return Principal*Math.pow(1+InterestRate,Years)
    }
    /**
     * Future Value based on Compound Interest. Based on your investment compounding quarterly (every three months)
     * @param Principal your Beginning (Initial) Investment
     * @param InterestRate the interest rate you are receiving (please ensure your interest rate is typed in as 0.10 for 10% interest)
     * @param Years the number of years you will invest your money for 
     */
    public FVCompoundQuarterly(Principal: number, InterestRate: number, Years: number){
        return Principal*Math.pow(1+InterestRate/4,Years*4)
    }
    /**
     * Future Value based on Compound Interest. Based on your investment compounding every 6 months.
     * @param Principal your Beginning (Initial) Investment
     * @param InterestRate the interest rate you are receiving (please ensure your interest rate is typed in as 0.10 for 10% interest)
     * @param Years the number of years you will invest your money for 
     */
    public FVCompoundSemiAnnually(Principal: number, InterestRate: number, Years: number){
        return Principal*Math.pow(1+InterestRate/2,Years*2)
    }
    /**
     * Future Value based on Compound Interest. Based on your investment compounding every month.
     * @param Principal your Beginning (Initial) Investment
     * @param InterestRate the interest rate you are receiving (please ensure your interest rate is typed in as 0.10 for 10% interest)
     * @param Years the number of years you will invest your money for 
     */
    public FVCompoundMonthly(Principal: number, InterestRate: number, Years: number){
        return Principal*Math.pow(1+InterestRate/12,Years*12)
    }
        /**
     * Future Value based on Compound Interest. Based on your investment compounding daily (365 days).
     * @param Principal your Beginning (Initial) Investment
     * @param InterestRate the interest rate you are receiving (please ensure your interest rate is typed in as 0.10 for 10% interest)
     * @param Years the number of years you will invest your money for 
     */
    public FVCompoundDaily(Principal: number, InterestRate: number, Years: number){
        return Principal*Math.pow(1+InterestRate/365,Years*365)
    }

}


