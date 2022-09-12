import '../css/Contador.css';
import LogoCanal from '../imagenes/logo.png';
function Contador(){
    return(
        <div className='contador'>
            <div className='logo-contenedor'>
                <img
                    className='img-logo'
                    src={LogoCanal}
                    alt='Logo Canal'
                />
            </div>
            <div className='contenedor-contador'>

            </div>
        </div>
    );
}

export default Contador;