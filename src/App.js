import { Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import PrisijungimoPage from './pages/PrisijungimoPage';
import RegistracijosPage from './pages/RegistrcijosPage';


function App() {
  return (
    <Layout >
      
      <Switch>
        <Route path='/' exact>
          <AllMeetUpsPage />
        </Route>

        <Route path='/new-meetup'> {/* Be switch Ekrane rodo visus pro kuriuos praeina linkas, switchas tik viena kad langa rodytu( bet tik artimiausia kuris tinka, o exact komanda padada rasti butent puslapio kurio iesko) */}
          <NewMeetUpPage />
        </Route>

        <Route path='/favorites'>
          <FavoritesPage />
        </Route>

        <Route path='/prisijungti'>
          <PrisijungimoPage />
        </Route>

        <Route path='/registracija'>
          <RegistracijosPage />
        </Route>
      </Switch>
      
    </Layout>
  );
}

export default App;
