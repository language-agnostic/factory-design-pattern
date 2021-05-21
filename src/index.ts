import express from 'express';
import { Product } from './product';
import { TaxCalculatorFactory } from './taxCalculatorFactory';

const app = express();

app.get('/api/product/price/:countryId', (req, res) => {
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

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});