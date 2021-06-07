import React from 'react';
import './components/navbar/Navbar.css'
import './App.css';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Action from './pages/Action';
import Comedy from './pages/Comedy';
import Horror from './pages/Horror';
import Romance from './pages/Romance';
import Documentaries from './pages/Documentaries';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Detail from './components/Detail';
import DetailTrending from './components/DetailTrending';
import DetailTopRated from "./components/DetailTopRated";





function App() {
  return (
    
     <div className="App">
    <Router>
    
    <Navbar/>
    
      

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/action' component={Action} />
        <Route path='/comedy' component={Comedy} />
        <Route path='/horror' component={Horror} />
        <Route exact path="/detail/:id">
          <Detail />
        </Route>
        <Route exact path="/DetailTrending/:id">
          <DetailTrending />
        </Route>
        <Route exact path="/DetailTopRated/:id">
          <DetailTopRated />
        </Route>

      </Switch>


    </Router>
    </div>

     
     

    
  );
}



export default App;
