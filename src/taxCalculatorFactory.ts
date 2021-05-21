import { FrenchTaxCalculator } from "./frenchTaxCalculator";
import { IrishTaxCalculator } from "./irishTaxCalculator";
import { TaxCalculatorInterface } from "./taxCalculatorInterface";

export class TaxCalculatorFactory {
    public static create(countryCode: string): TaxCalculatorInterface {
        if (countryCode === 'IE') {
            return new IrishTaxCalculator();
        }
        if (countryCode === 'FR') {
            return new FrenchTaxCalculator();
        }
        throw new Error('Country code not implemented');
    }
}