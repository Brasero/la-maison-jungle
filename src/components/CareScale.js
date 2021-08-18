import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function seeMore (type, quantite) {

    const besoin = type === 'light' ? 'de lumière' : 'd\'arrosage'

    var frequence = ''

    switch(quantite){
        case 1:
            frequence = 'peu'
            break;
        case 2:
            frequence = 'modérément'
            break;
        case 3:
            frequence = 'beaucoup'
            break;
        default:
            break;
    }

    

    return alert(`Cet plante a besoin de ${frequence} ${besoin}`)

}

function CareScale({scaleValue, careType}) {
    const range = [1,2,3]

    const scaleType = careType === 'light' ? <img src={sun} alt="sun-ico" /> : <img src={water} alt="water-ico" />

    return (

        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => seeMore(careType, scaleValue)}>{ scaleType }</span>

                : null
            )}

        </div>
    )
}



export default CareScale