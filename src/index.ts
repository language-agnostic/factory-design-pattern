import express from 'express';
import { Product } from './product';
import { TaxCalculatorFactory } from './taxCalculatorFactory';

const app = express();

app.get('/api/product/price/:countryCode', (req, res) => {
    const countryCode = req.params.countryCode;
    const product = new Product('iPhone', 1000);
    try {
        const taxCalculator = TaxCalculatorFactory.create(countryCode);
        res.send({
            'name': product.getName(),
            'price': taxCalculator.getPriceIncludingTax(product),
            'taxRate': taxCalculator.getTaxRate()
        });
    } catch (error) {
        res.status(500).send({
            'error': 'The country code provided is not valid'
        });
    }
});

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});