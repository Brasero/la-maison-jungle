import { useState } from 'react'
import '../styles/Footer.css'



function Footer() {

    const [inputValue, setInputValue] = useState('')

    return (
        <footer className="lmj-footer">
            <div className='lmj-footer-elem'>
                Pour les passionné.e.s de plantes
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <div className="lmj-footer-elem">
                <input type="email" 
                    value={inputValue}
                    onBlur={(e) => checkMail(e.target.value)}
                    onChange={(e)=> setInputValue(e.target.value)} />
                    
            </div>
        </footer>
    )
}

function checkMail(mail) {
    if(!mail.includes('@')) {
        alert('Votre adresse mail ne contient pas le caractère "@", veuillez saisir une adresse mail valide.')
    }
 }

export default Footer