import React from "react";
import { BrowserRouter, HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";
import Navi from "./components/Navi";

function App(){
  return(
    <HashRouter>
      <Navi />
      <Route path="/" exact={true} component={Home} />
      <Route path="/movie/:id" exact={true} component={MovieDetail} />
    </HashRouter>
  )
}

export default App;