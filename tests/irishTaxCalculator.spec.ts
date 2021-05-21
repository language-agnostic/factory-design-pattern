import { IrishTaxCalculator } from '../src/irishTaxCalculator';
import { Product } from '../src/product';
import { expect } from 'chai';
import 'mocha';

describe('IrishTaxCalculator', () => {
    const irishTaxCalculator = new IrishTaxCalculator();
    const product = new Product('Iphone', 1000);

    describe('getPriceIncludingTax', () => {
        it('should return 1300', () => {
            expect(irishTaxCalculator.getPriceIncludingTax(product)).to.equal(1300);
        });
    });

    describe('getTaxRate', () => {
        it('should return 0.3', () => {
            expect(irishTaxCalculator.getTaxRate()).to.equal(0.3);
        });
    });
});