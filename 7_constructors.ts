class Business {
    name: string;
    qp1: number;
    qp2: number;
    qp3: number;
    qp4: number;
    annualProfit: number;

    constructor(qp1: number, qp2?: number, qp3?: number, qp4?: number) {
        this.qp1 = qp1;
        this.qp2 = qp2;
        this.qp3 = qp3;
        this.qp4 = qp4;
        this.annualProfit = this.qp1 + this.qp2 + this.qp3 + this.qp4;
    }

    printAvgProfit() {console.log((this.annualProfit) / 4); }
}

let business1 = new Business(10, 20, 40, 10);
business1.name = 'Murugan';

business1.printAvgProfit();

let business2  = new Business(200);
business2.qp2 = 500;
console.log("Only two quater summation avaialble" + business2.printAvgProfit());



