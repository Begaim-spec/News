import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePage from "./views/HomePage/HomePage";
import News from './views/News/News'
import NewsDetails from "./views/NewsDetails/NewsDetails";
import Application from "./views/Application/Application";
import NotFound from "./views/NotFound/NotFound";
import Spinner from './components/Spinner/Spinner'
function App() {
  return (

          <Router>
              <Switch>
                  <Route exact path='/'><HomePage/></Route>
                  <Route exact path='/news'><News /></Route>
                  <Route path='/news/:id'><NewsDetails/></Route>
                  <Route path='/login'><Application/></Route>
                  <Route path='/application'><Application/></Route>
                  <Route path='*'><NotFound/></Route>
                  <Spinner/>
              </Switch>
          </Router>
  );
}

export default App;
