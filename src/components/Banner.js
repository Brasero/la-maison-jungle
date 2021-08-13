import '../styles/Banner.css';
import logo from '../assets/Logo.png';

const month = new Date().getMonth()
const isSpring = month >=2 && month <=5

function Banner() {
    return <div className="lmj-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
        </div>
}

export default Banner