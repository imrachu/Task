import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard'
import Contactus from './components/contactus'
import Aboutus from './components/aboutus'
import Deatils from './components/details';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Route path="/" exact component={DashBoard} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/details" component={Deatils} />
        </div>
      </Router>
    </div >
  );
}

export default App;
