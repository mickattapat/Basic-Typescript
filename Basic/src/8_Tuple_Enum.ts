/* Tuple */
const point:[number,number] = [10,20]

type HttpStatusCode = [number,string]
const succStatus:HttpStatusCode = [200,"Ok"]
const badRequest:[code:number,status:string] = [400,"Bad request"]
const serverErr:[code:number,status:string] = [500,"Internal server error"]

console.log(succStatus);


/* Enum */
enum GameMode {
    Easy = 1,
    Medium,
    Hard
}

const select : GameMode = GameMode.Hard
console.log(select);