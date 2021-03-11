import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Bugs from './Bugs';
import Bug from './Bug';
import Hospitals from './Hospitals';
import NavBar from './Navbar';
import UpdateBugForm from './UpdateBugForm';
import NewBugForm from './NewBugForm';
import UpdateVaccineForm from './UpdateVaccineForm';
import NewVaccineForm from './NewVaccineForm';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Bugs}/>
        <Route exact path='/hospitals' component={Hospitals}/>
        <Route exact path='/bugs/new' component={NewBugForm} />
        <Route exact path='/bugs/:id' component={Bug}/>
        <Route exact path='/bugs/:id/update' component={UpdateBugForm} />
        <Route exact path='/bugs/:bug_id/vaccines' component={NewVaccineForm} />
        <Route exact path='/bugs/:bug_id/vaccines/:id/edit' component={UpdateVaccineForm} />
      </Switch>
    </div>
  );
}

export default App;
