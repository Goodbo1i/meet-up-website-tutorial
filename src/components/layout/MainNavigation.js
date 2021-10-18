import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Skelbimu puslapis</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Visi Skelbimai</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Prideti Skelbima</Link>
          </li>
          <li>
            <Link to='/favorites'>Mano Favoritai 
            <span className={classes.badge}>
              {favoritesCtx.totalFavorites}
            </span> </Link>
          </li>
          <li/>
          <li/>
          <li/>
          <li>
            <Link to='/prisijungti'>Prisijunti</Link>
          </li>
          <li>
            <Link to='/registracija'>Registruotis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;