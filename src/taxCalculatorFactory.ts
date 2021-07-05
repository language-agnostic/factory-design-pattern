import { FrenchTaxCalculator } from "./frenchTaxCalculator";
import { IrishTaxCalculator } from "./irishTaxCalculator";
import { TaxCalculatorInterface } from "./taxCalculatorInterface";

export class TaxCalculatorFactory {
    public static create(countryCode: string): TaxCalculatorInterface {
        if (countryCode === 'IE') {
            return new IrishTaxCalculator();
        } else if (countryCode === 'FR') {
            return new FrenchTaxCalculator();
        } else {
            throw new Error('The country code is not valid.');
        }
    }
}