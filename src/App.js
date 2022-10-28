import React  from 'react';
import './App.css'; 
import Navbar from './Navbar'; 
import BlogDetails from './BlogDetails';
// import Home from './Home';
import Home from './home';
import Create from './Create';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  
  return (
    <Router> 
       <div className="App">
      <Navbar />
       <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route  path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
          
        </div> 
     
    </div>
    </Router>
   
  ); 
}
 
export default App;
