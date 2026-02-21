interface Todo {
    userId: number;
    id: number;
    title:string;
    complete: boolean
}

const fetchData = async() =>{
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  
if(response.ok){
    throw new Error(`HTRTP error ${response.status}`)
}
const data: Todo = await response.json()
    }catch(error:any){

    }
};

