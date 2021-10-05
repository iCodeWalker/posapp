import { Route } from "react-router";
import { Router, Switch } from "react-router-dom";
import history from "./history";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/cart" exact component={CartList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
