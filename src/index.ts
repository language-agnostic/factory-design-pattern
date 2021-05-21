import express from 'express';
import { FrenchTaxCalculator } from './frenchTaxCalculator';
import { IrishTaxCalculator } from './irishTaxCalculator';
import { TaxCalculatorInterface } from './taxCalculatorInterface';
import { Product } from './product';
import { TaxCalculatorFactory } from './taxCalculatorFactory';

const app = express();


//Code with Factory Design Pattern
app.get('/api/v2/product/price/:countryId', (req, res) => {
    const product = new Product('iPhone', 1000);
    try {
        const taxCalculator = TaxCalculatorFactory.create(req.params.countryId);
        res.send({
            "price": taxCalculator.getPriceIncludingTax(product)
        });
    } catch (error) {
        res.status(500).send({
            "error": "There was a problem calculating your tax.."
        });
    }

});

//Code without Factory Design Pattern
app.get('/api/v1/product/price/:countryId', (req, res) => {
    const product = new Product('iPhone', 1000);
    const countryCode = req.params.countryId;
    let taxCalculator = null;

    if (countryCode === 'IE') {
        taxCalculator = new IrishTaxCalculator();
    } else if (countryCode === 'FR') {
        taxCalculator = new FrenchTaxCalculator();
    }
    if (taxCalculator === null) {
        res.status(500).send({
            "error": "There was a problem calculating your tax.."
        });
    } else {
        res.send({
            "price": taxCalculator.getPriceIncludingTax(product)
        });
    }
});

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});