import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {

        const [cat, setCat] = useState('')

        function addToCart( name, price ) {

            const isAlreadyIn = cart.find((plant) => plant.name === name )
         
            if(isAlreadyIn) {
                const cartFilteredCurrentPlant = cart.filter(
                    (plant) => plant.name !== name
                )

                updateCart([
                    ...cartFilteredCurrentPlant,
                    { name, price, amount: isAlreadyIn.amount + 1}
                ])
            }
            else {
                updateCart([ 
                    ...cart, 
                    { name, price, amount: 1 }
                ])
            }
            
        }

        
        return (
            <div className="lmj-shopping-list">
                    <Categories selectCat={cat} setCat={setCat} />
                    <ul className="lmj-plant-list">
                                {cat === "" ? (plantList.map(({ id, cover, name, water, light, price, }) => (
                                    
                                    <div key={id}>
                                        <PlantItem cover={cover} name={name} water={water} light={light} />
                                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                    </div>
                                        
                                ))) : (
                                    plantList.filter((plant) => plant.category === cat).map(({ id, cover, name, water, light, price }) => (

                                        <div key={id}>
                                            <PlantItem cover={cover} name={name} water={water} light={light} />
                                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                                        </div>
                                    ))
                                )}
                                
                    </ul>
            </div>
        )
}

export default ShoppingList