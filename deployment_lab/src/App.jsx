import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VanillaCakeImage from './assets/vanilla_cake.jpeg';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
        <img src={VanillaCakeImage} alt="Vanilla Cake" style={{ width: '300px', height: 'auto' }} />
        </a>
      </div>
      <h1>Vanilla Cake Recipe</h1>
      <div className="card">
       
        <p>
        <h2>Description</h2>
    This recipe makes the most delicious, moist, and fluffy vanilla cake flavors!
    <h2>Ingredients</h2>
    <ul> 
       <li>3 cups all purpose flour</li>
       <li>2 cups sugar</li>
       <li>2 tsp baking powder</li>
       <li>1 tsp salt</li>
       <li>2 sticks butter</li>
       <li>5 large eggs</li>
       <li>1 cup buttermilk</li>
       <li>1 tb vanilla extract</li>
       <li>1 tb vegetable oil</li>
    </ul>
    <h2>Directions</h2>
    <ol>1. Sift dry ingredients in a large stand mixer bowl.</ol> 
    <ol>2. Combine on medium speed and add in butter quarter pieces at a time, until a sandy consistency is reached.</ol> 
    <ol>3. Add in eggs one at a time until fully combuned.</ol> 
    <ol>4. While on medium speed, puour in buttermilk, half cup at time until combned. </ol>
    <ol>5. Add in vanilla extract and oil ubtil fully combined. Do not overmix.</ol> 
    <ol>6. Grease 4- 7 inch cake pans.</ol> 
    <ol>7. Evenly divide mixture into pans and bake at 350 degrees F for 30 minutes until fully baked.</ol> 

    Source: <a href="https://chelsweets.com/best-vanilla-layer-cake-recipe/">Chelsweets Vanilla Cake Recipe</a>


        </p>
      </div>
      <p className="read-the-docs">
       
      </p>
    </>
  )
}

export default App
