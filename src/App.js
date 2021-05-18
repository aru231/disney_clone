import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from "./components/Home";
import Detail from "./components/Detail";
function App() {
  return (
    <>
      <div className="App">
         <BrowserRouter>
         <Header/>
          <Switch>
            <Route exact path="/">
            <Login/>
            </Route>
            <Route exact path="/home">
            <Home/>
            </Route>
            <Route exact path="/detail/:id">
            <Detail/>
            </Route>
          </Switch>
        </BrowserRouter> 
      </div>
    </>
  );
}

export default App;
