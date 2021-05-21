import { Product } from "./product";

export interface TaxCalculatorInterface {
    getPriceIncludingTax(product: Product): number;
    getTaxRate(): number;
}