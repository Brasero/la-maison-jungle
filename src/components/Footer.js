import { useState } from 'react'
import '../styles/Footer.css'



function Footer() {

    const [inputValue, setInputValue] = useState('')

    function checkMail() {
        if(!inputValue.includes('@')) {
            alert('Votre adresse mail ne contient pas le caractère "@", veuillez saisir une adresse mail valide.')
            setInputValue('')
        }

    }

    function handleInput(e) {
        setInputValue(e.target.value)
    }
    
    return (
        <footer className="lmj-footer">
            <div className='lmj-footer-elem'>
                Pour les passionné.e.s de plantes
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <div className="lmj-footer-elem">
                <input type="email" 
                    value={inputValue}
                    onBlur={checkMail}
                    onChange={handleInput} />
                    
            </div>
        </footer>
    )
}



export default Footer