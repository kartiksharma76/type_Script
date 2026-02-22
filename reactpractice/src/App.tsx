import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChaiCard } from './components/ChaiCard.tsx';
import { Counter } from './components/Counter.tsx';

import type { Chai } from './typs.ts';
import ChaiList from './components/ChaiList.tsx';
import { OrderForm } from './components/OrderForm.tsx';
import { Card } from './components/card.tsx';
const menu: Chai[] = [
  {id: 1,name:"Masala", price:25},
  {id: 2,name:"Ginger", price:50},
  {id: 3,name:"Lemon", price:60},
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ChaiCard
      name = "Headphones"
      price = {5000}
      />
      <ChaiCard
      name = "Iphone"
      price = {50000}
      />
      
<div>
<Counter/>

</div>
<div>
  <ChaiList items={menu}/>
</div>

<div>
 <OrderForm 
 onSubmit={(order)=>{
  console.log("Placed:",order.name, order.cups);
  
 }}
 />
</div>
<div>
  <Card
  title="Chai aur Typescripts"
   footer= {<button>Order Now</button>}/>
 
</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
