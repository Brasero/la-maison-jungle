import { plantList } from "../datas/plantList";



function Categories({selectCat, setCat}) {

    const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    function initilizeCat() {
        setCat('')
    }

    return (

        <div>
            <select onChange={(val) => setCat(val.target.value)}>
                
                {selectCat !== '' ? <option key="no-choice" value="" >--------</option> : <option key="no-choice" value="" default >--------</option>}

                {categories.map(
                    (cat) => cat === selectCat ? <option key={cat} value={cat} >{cat}</option> : <option key={cat} value={cat}  default>{cat}</option>
                )}


            </select>
            <button onClick={() => initilizeCat()}>
                Réinitialiser
            </button>
        </div>

    )

}

export default Categories