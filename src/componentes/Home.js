import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss'
import Button from './Button/Button';
const Home = () => {
  return(
      <div className="Home">
        <header></header>
        <div className="button">
          <Link to="/cadastro">
            <Button>Comprar</Button>
          </Link>
        </div>
      </div>

  );
}
export default Home;