import logo from '../../img/logo.svg';
import './Logo.css'

function Logo() {
    return(
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo
