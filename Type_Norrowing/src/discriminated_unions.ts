/* Discriminated Unions */
interface Reatangle {
    width:number,
    heigth:number,
    type:'Reatangle'
}

interface Triangle {
    base:number,
    heigth:number
    type:'Triangle'
}

type Shape = Reatangle | Triangle
function calculateArea(s:Shape) {
    switch (s.type) {
        case 'Reatangle':
            // rec ก x ย
            return s.width * s.heigth
        case 'Triangle':
            // tri 0.5 x ฐ x ส
            return 0.5 * s.base * s.heigth
        default:
            return new Error('invalid !!')
    }
}

console.log(calculateArea({width:20,heigth:20,type:'Reatangle'}));
