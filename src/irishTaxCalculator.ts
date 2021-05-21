import { Product } from "./product";
import { TaxCalculatorInterface } from "./taxCalculatorInterface";

export class IrishTaxCalculator implements TaxCalculatorInterface {
    
    public getPriceIncludingTax(product: Product): number {
        return product.getPrice() * (1 + this.getTaxRate());
    }

    public getTaxRate(): number {
        return 0.3;
    }
}