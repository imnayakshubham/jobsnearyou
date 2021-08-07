import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { AuthProvider } from "./contexts/AuthContext";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/post" component={Posts} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
