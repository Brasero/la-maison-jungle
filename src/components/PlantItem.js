import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem ({id, name, cover, light, water, isSpecialOffer}) {

    return (
        <li key={id} className="lmj-plant-item">
            <img className="lmj-plant-item-cover" src={ cover } alt={`${name} cover `} />
            {name}
            <div>

                    <CareScale careType='water' scaleValue={water} />
                    <CareScale careType='light' scaleValue={light} />

            </div>
            {isSpecialOffer && <div className="lmj-sales">Offre spéciale</div>}
        </li>
    )

}

export default PlantItem