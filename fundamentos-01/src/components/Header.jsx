import style from './Header.module.css';

import logoPokemon from '../assets/pokemon-23.svg'

export function Header() {
    return(
        <header className={style.header}>
            <img src={logoPokemon} alt="Logo Pokemon" />

            <h1>Pokédex</h1>
        </header>
    )
}