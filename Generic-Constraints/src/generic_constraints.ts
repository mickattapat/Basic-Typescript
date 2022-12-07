/* Normal funtion */
// function getElementNumber(arr:number[],count:number) {
//     return arr.slice(arr.length - count)
// }

// function getElementString(arr:string[],count:number) {
//     return arr.slice(arr.length - count)
// }

// function getElementBoolean(arr:boolean[], count:number) {
//     return arr.slice(arr.length - count)
// }

// const myBool:boolean[] = [true,false,true,true]
// console.log(getElementBoolean(myBool,2));

// // console.log(getElementNumber([10,20,30,40,50],2));
// // console.log(getElementString(['10','20','30','40','50'],2));


/* Generic function */
// // function getElement<T>(arr:T[],count:number) {
// //     return arr.slice(arr.length - count)
// // }

// // console.log(getElement<number>([10,20,30,40,50],2));
// // console.log(getElement<string>(['10','20','30','40','50'],2));

// function merge<T,U>(param1:T,param2:U) {
//     return {
//         ...param1,
//         ...param2
//     }
// }
// const product = {name:'shirt',price:500}
// const desc = {color:['red','yellow','green']}

// console.log(merge<object,object>(product,desc));
// console.log(merge(product,true)); // not assign type case


/* Generic Constraints function */
// function getElement<T>(arr:T[],count:number) {
//     return arr.slice(arr.length - count)
// }

// console.log(getElement<number>([10,20,30,40,50],2));
// console.log(getElement<string>(['10','20','30','40','50'],2));

// function merge<T extends object,U extends object>(param1:T,param2:U) {
// function merge2<T,U>(param1:T,param2:U) {
//     return {
//         ...param1,
//         ...param2
//     }
// }
// const product = {name:'shirt',price:500}
// const desc = {color:['red','yellow','green']}

// console.log(merge(product,desc));
// // console.log(merge2(product,true)); // not assign type case


/* Class Stack */
class Stack<T=string> {
    private item:T[] = []
    pushElement(element:T) {
        this.item.push(element)
    }
}

const stack = new Stack<number>()
const stack2 = new Stack()
stack.pushElement(50)
stack2.pushElement('mick')
console.log(stack);
console.log(stack2);
