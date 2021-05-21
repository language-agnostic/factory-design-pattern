import { FrenchTaxCalculator } from '../src/frenchTaxCalculator';
import { Product } from '../src/product';
import { expect } from 'chai';
import 'mocha';

describe('FrenchTaxCalculator', () => {
    const frenchTaxCalculator = new FrenchTaxCalculator();
    const product = new Product('Iphone', 1000);

    describe('getPriceIncludingTax', () => {
        it('should return 1450', () => {
            expect(frenchTaxCalculator.getPriceIncludingTax(product)).to.equal(1450);
        });
    });

    describe('getTaxRate', () => {
        it('should return 0.45', () => {
            expect(frenchTaxCalculator.getTaxRate()).to.equal(0.45);
        });
    });
});