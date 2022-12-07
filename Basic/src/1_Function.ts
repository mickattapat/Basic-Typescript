/* function */
// function HelloTs():void {
//     console.log('Hello world!!');
// }
// HelloTs()

function HelloTs(name:string):void {
    console.log(`Hello ${name}!!`);
}
HelloTs('attapat kayasa')

function checkNumber(number:number):string {
    if (number%2 === 0) {
        return 'เลขคู่'
    } else {
        return 'เลขคี่'
    }
}

function total(a:number,b:number):number {
    return a+b
}
console.log(checkNumber(10));
console.log(total(10,20));

// const total = (a:number,b:number):number => {
//     return a+b
// }
console.log(total(10,10));