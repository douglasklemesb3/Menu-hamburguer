import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.scss"

const NavBar = () => {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const AbrirMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    const FecharMenu = () =>{
        setMenuAtivo(false)
    }
   

    return (
        <div className="NavBar">
            <nav>
                <div className="ancora">
                <Link onClick={FecharMenu} to='/'> Home</Link>
                <Link onClick={FecharMenu} to="/"> Pagamento</Link>
                <Link onClick={FecharMenu} to="/">Carrinho</Link>
                <Link onClick={FecharMenu} to="/">Produto</Link>
                </div>
                <div onClick={AbrirMenu} id="menu-hamburguer">
                    <span className={`${menuAtivo ? "virarX1" : ""}`}></span>
                    <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
                    <span className={`${menuAtivo ? "virarX2" : ""}`}></span>
                </div>
            </nav>
            <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
                <Link onClick={FecharMenu} to='/'> Home</Link>
                <Link onClick={FecharMenu} to="/pagamento"> Pagamento</Link>
                <Link onClick={FecharMenu} to="/carrinho">Carrinho</Link>
                <Link onClick={FecharMenu} to="/produto">Produto</Link>
            </section>
        </div>
    );
}
export default NavBar;
