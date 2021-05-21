export class Product {
    private name: string;
    private price: number;

    constructor(name: string, price:number) {
        this.name = name;
        this.price = price;
    }

    public getName() {
        return this.name;
    }

    public getPrice() {
        return this.price;
    }
}