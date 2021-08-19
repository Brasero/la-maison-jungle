import { plantList } from "../datas/plantList";



function Categories({selectCat, setCat}) {

    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    function toto() {
        console.log(selectCat)
    }

    return (

        <div>
            <select onChange={(val) => setCat(val)}>
                
                {categories.map(
                    (cat) => cat === selectCat ? <option key={cat} value={cat} >{cat}</option> : <option key={cat} value={cat}  default>{cat}</option>
                )}

                {selectCat !== '' ? <option key="no-choice" value="" >--------</option> : <option key="no-choice" value="" default >--------</option>}

            </select>
            <button onClick={() => toto()}>
                affiche la donnée
            </button>
        </div>

    )

}

export default Categories