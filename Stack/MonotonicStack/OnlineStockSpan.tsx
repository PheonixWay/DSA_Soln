// // Brute Force Method
// class StockSpanner {
//     stockValue: number[] = [];

//     next(price: number): number {
//         this.stockValue.push(price);
//         let span = 0;

//         for (let i = this.stockValue.length - 1; i >= 0; i--) {
//             if (this.stockValue[i] <= price) {
//                 span++;
//             } else {
//                 break;
//             }
//         }
//         return span;
//     }
// }

class StockSpanner {
    stack: [number,number][] = [];

    next(price: number): number {
        let currentSpan=1;
        while(this.stack.length > 0 && this.stack[this.stack.length-1][0]<=price){

            currentSpan+= this.stack.pop()![1];
        }
        this.stack.push([price,currentSpan]);

    return currentSpan;

    }
}


const stockSpanner = new StockSpanner();

const span1=stockSpanner.next(100);
console.log(span1);
const span2=stockSpanner.next(80);
console.log(span2);
const span3=stockSpanner.next(60);
console.log(span3);
const span4=stockSpanner.next(70);
console.log(span4);
const span5=stockSpanner.next(60);
console.log(span5);
const span6=stockSpanner.next(75);
console.log(span6);
const span7=stockSpanner.next(85);
console.log(span7);