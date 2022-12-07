/* Union types */
// let age_union:number | string[]
// // age = 50;
// age_union = ['mick','smile','nee']
// type Point = {
//     x:number,
//     y:number
// }
// type Position = {
//     lat:number,
//     long:number
// }
// let cordinate: Point | Position
// // cordinate = { x:5,y:10}
// cordinate = { lat:5,long:10}

// function sayHi_Union(person:string|string[]) {
//     if (typeof person === 'string') {
//         console.log(`hello : ${person}`);
        
//     } else {
//         person.forEach((element) => {
//             console.log(`hello : ${element}`);
//         })
//     }
// }

// sayHi_Union('mick')
// sayHi_Union(['mick','smile'])


/* Literal Types */
// type Role = 'Admin' | 'User'
// let user:Role = 'Admin'

// function confirmDialog(answer:'yes'|'no') {
//     console.log(`result = ${answer}`);
// }

// confirmDialog('no')


/* Template Literal Types */
type vertical = 'top' | 'middle' | 'bottom'
type horizontal = 'left' | 'center' | 'right'

type alignment = `${vertical}-${horizontal}`

const test = (set:alignment) => {
    console.log(set);
}

test('middle-left')
