import logo from './logo.svg';
import './App.css';
import Header from './components/header'

// const Home = React.lazy(() => import('./containers/Home'));
import Home from './containers/Home'
import PokemonDetails from './containers/PokemonDetails'
import MyTeam from './containers/MyTeam'
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon-details/:id" exact component={PokemonDetails} />
        <Route path="/my-team" exact component={MyTeam} />

        <Redirect to='/' />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
