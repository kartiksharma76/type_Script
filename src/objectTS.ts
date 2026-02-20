// simple JS object -> normal object without strict type reuse
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
}

// inline type object -> used when structure needed only once
// gives strict checking for this variable
let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}

// type alias -> used when same structure may be reused many times
// cleaner and reusable instead of writing inline again
type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

const adrakChai: Tea = {
    name: "AdrakChai",
    price: 25,
    ingredients: ["ginger", "tea leaves"]
}

// small reusable type -> used for cup structure
type Cup = { size: string };

let smallCup: Cup = { size: "200ml" }

// object with extra property
let bigCup = { size: "500ml", material: "steel" }

// TypeScript structural typing
// if required property exists, extra allowed
// used for flexibility in object assignment
smallCup = bigCup

// Brew type -> used to define required brewing property
type Brew = { brewTime: number }

const coffee = { brewTime: 5, beans: "Arabica" }

// allowed because brewTime exists
// extra properties ignored
const chaiBrew: Brew = coffee

// User type -> used for login/auth data structure
type User = {
    username: string;
    password: string
}

const u: User = {
    username: "chaiCode",
    password: "123"
}

// nested types -> used in real apps like ecommerce/order system
type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address
}

// PARTIAL utility type
// makes all properties optional
// used in update API where all fields not required
type ChaiPartial = {
    name: string;
    price: number;
    isHot: boolean
}

const updatedChai = (updates: Partial<ChaiPartial>) => {
    console.log("updating chai with", updates);
}

// updating only required fields
updatedChai({ price: 25 })
updatedChai({ isHot: false })
updatedChai({})

// REQUIRED utility type
// converts optional -> compulsory
// used when final data must contain all fields
type ChaiOrder = {
    name?: string;
    quantity?: number
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
}

// now both fields mandatory
placeOrder({
    name: "masalaChai",
    quantity: 2
})

// PICK utility type
// selects only some properties from big type
// used when sending limited data (API/public data)
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}

console.log(chaiInfo)

// OMIT utility type
// removes sensitive property
// used when hiding private info from public
type Chainew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

// removing secretIngredients
type PublicChai = Omit<Chainew, "secretIngredients">

const publicTea: PublicChai = {
    name: "Green Tea",
    price: 40,
    isHot: true
}

console.log(publicTea)