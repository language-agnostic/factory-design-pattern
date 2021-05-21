import { TaxCalculatorFactory } from '../src/taxCalculatorFactory';
import { IrishTaxCalculator } from '../src/irishTaxCalculator';
import { FrenchTaxCalculator } from '../src/frenchTaxCalculator';
import { expect } from 'chai';
import 'mocha';

describe('TaxCalculatorFactory', () => {
    describe('create', () => {
        it('should return IrishTaxCalculator', () => {
            expect(TaxCalculatorFactory.create('IE')).to.be.an.instanceof(IrishTaxCalculator);
        });
        it('should return FrenchTaxCalculator', () => {
            expect(TaxCalculatorFactory.create('FR')).to.be.an.instanceof(FrenchTaxCalculator);
        });
        it('should throw Error', () => {
            expect(()=>TaxCalculatorFactory.create('XXX')).to.throw('Country code not implemented');
        });
    });
});