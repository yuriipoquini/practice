import { Card } from './Card';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'

import squirtleLogo from './assets/squirtle_icon.svg';
import bulbasaurLogo from './assets/bulbasaur_icon.svg';
import charmanderLogo from './assets/charmander_icon.svg';
import pikachuLogo from './assets/pikachu_icon.svg';
import snorlaxLogo from './assets/snorlax_icon.svg';
import eeveeLogo from './assets/eevee_icon.svg';
import psyduckLogo from './assets/psyduck_icon.svg';
import mewLogo from './assets/mew_icon.svg';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header/>

      {/* <div className={styles.mainContent}> */}
        {/* <Sidebar/> */}

        <div className={styles.wrapper}>
          <main>
            <Card name="Squirtle" type="Water" imgUrl={squirtleLogo}/>

            <Card name="Charmander" type="Fire" imgUrl={charmanderLogo}/>

            <Card name="Bulbasaur" type="Grass" imgUrl={bulbasaurLogo}/>

            <Card name="Pikachu" type="Electric" imgUrl={pikachuLogo}/>

            <Card name="Snorlax" type="Normal" imgUrl={snorlaxLogo}/>

            <Card name="Eevee" type="Normal" imgUrl={eeveeLogo}/>

            <Card name="Psyduck" type="Psychic" imgUrl={psyduckLogo}/>

            <Card name="Mew" type="Psychic" imgUrl={mewLogo}/>
          </main>
        </div>
      </div>
      
    // </div>
  )
}

export default App
