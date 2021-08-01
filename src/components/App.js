import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursePage from "./course/CoursePage";
import ManagedCoursePage from "./course/ManagedCoursePage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/course/:slug" component={ManagedCoursePage} />
        <Route path="/course" component={ManagedCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
export default App;
