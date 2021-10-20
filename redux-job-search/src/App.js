import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import JobsList from './components/JobsList';


function App() {
  return (
    <Router>
    <NavBar/>
    <Route>
    <Home />
    </Route>
    <Route
      path="/joblist/:company"
                component={JobsList}
              />
    </Router>
  );
}

export default App;
