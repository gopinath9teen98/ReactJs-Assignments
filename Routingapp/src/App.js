// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      
      <div className='nav1'>
        <Link to='/home'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </div>
       <div>
         <Route path="/home" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
       </div>     
    </div>
    </Router>
  );
}

export default App;
