import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Top from './Components/Top';
import Nav from './Components/Nav';
import Time from './Components/Time';
import Timer from './Components/Timer';
import London from './Components/London';
import LosAngeles from './Components/LosAngeles';
import Tokyo from './Components/Tokyo';
import Dubai from './Components/Dubai';


function App() {
  return (
    <Router>
      <div className="App">
        <Top />
        <div className="navbar">
          <Nav/>
        </div>
        <Switch>

          <Route exact path = "/">
            <div className="CURRENT_TIME">
              <Time/>
            </div>
          </Route>

          <Route  path = "/India">
            <div className="CURRENT_TIME">
              <Time/>
            </div>
          </Route>

          <Route path = "/London">
            <div className="CURRENT_TIME">
              <London/>
            </div>
          </Route>

          <Route path = "/Los-Angeles">
            <div className="CURRENT_TIME">
              <LosAngeles/>
            </div>
          </Route>

          <Route path = "/Tokyo">
            <div className="CURRENT_TIME">
              <Tokyo/>
            </div>
          </Route>

          <Route path = "/Dubai">
            <div className="CURRENT_TIME">
              <Dubai/>
            </div>
          </Route>

          <Route path = "/Timer">
            <div className="Timer">
              <Timer/>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
