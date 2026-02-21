function wrapInArray<T>(item: T):T[]{
 return [item]
}

wrapInArray("masala")
wrapInArray(42)
wrapInArray({falvor:"Ginger"})


function pair<A,B> (a: A, b: B):[A,B]{
    return[a,b]


}
pair ("masala", 20)
pair("masala",{flavour:"Ginger"})

interface Box<T> {
    content: T
}
const numberBox: Box<number> = {content:10}
const numberBoxCup: Box<string> = {content:"10"}

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{flavor:string}> ={
    status: 200,
    data:{flavor:"masala"}
}

