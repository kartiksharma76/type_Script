enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE

enum Status{
    PENDING = 100,
    SERVED,//101
    CANCLLED//102
}
 // enters in webpage that can be use
enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"

}

function makeChai(type:ChaiType){
    console.log(`making: ${type}`);
    
}
makeChai(ChaiType.GINGER)
// makeChai("masala")

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Suagars{
    LOW = 1,
    MEDIUM = 2,
    HIGH= 3
}

// const s = Suagars.HIGH
let t :[string, number] = ["chai",10]
t.push("extra")