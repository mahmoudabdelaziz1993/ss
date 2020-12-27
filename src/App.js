import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './app.scss'
import Home from './pages/Home'
import News from './pages/News'

const { default: Footer } = require("./components/Footer");
const { default: Topmenu } = require("./components/Topmenu");
function App() {
  return (
    <Router>
      <div className="App">
        <Topmenu />
        <div className="main"></div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/news" component={News} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
