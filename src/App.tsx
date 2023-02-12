import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Form from "./Form";
import SecondPage from "./pages/SecondPage";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="/login" component={Form} />
        <Route path="/second-page" component={SecondPage} />
      </Router>
    </>
  );
};

export default App;
