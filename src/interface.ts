type ChaiOrder = {
    type: string; 
    sugar:number;
    strong:boolean
};

function makeChai(order: ChaiOrder){
        console.log(order);
}
function serverChai(order:ChaiOrder){
        console.log(order);
}


interface TeaRecipe {
    water: number;
    milk : number

}
// class MasalaChai implements TeaRecipe{
//     water = 100;
//     milk = 50
// }


interface CupSize {
size:"small"| "large"
}

class Chai implements CupSize{
    size: "small" | "large"="large";
}

// type Response ={ok: true}| {ok: false}
// class myRes implements Response{
//     ok: boolean = true;
// }

type TeaType ="masala"| "ginger"| "lemon"
function orderChai(t: TeaType){
    console.log(t);
    
}

type BaseChai = {teaLeaves: number}
type Extras ={masala: number}
type MasalaChai =BaseChai & Extras


const cup: MasalaChai ={
    teaLeaves :2,
    masala : 1 
}

type User= {
    username : string;
    bio?: string;
}

const u1 : User ={username : "kartikey"}
const u2 : User ={username : "kartikey",bio: "kartikey.ai"}

type config ={
    readonly appName :string
    version :number
}

const cfg: config = {
    appName: "Masterji",
    version:1

}
//  cfg.appName = "Chai Code"