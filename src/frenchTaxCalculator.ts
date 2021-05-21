import { Product } from "./product";
import { TaxCalculatorInterface } from "./taxCalculatorInterface";

export class FrenchTaxCalculator implements TaxCalculatorInterface {
    
    public getPriceIncludingTax(product: Product): number {
        return product.getPrice() * (1 + this.getTaxRate());
    }

    public getTaxRate(): number {
        return 0.45;
    }
}