import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Viruses from './Viruses';
import Virus from './Virus';
import Hospitals from './Hospitals';
import NavBar from './Navbar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Viruses}/>
        <Route exact path='/viruses/:id' component={Virus}/>
        <Route exact path='/hospitals' component={Hospitals}/>
      </Switch>
    </div>
  );
}

export default App;
