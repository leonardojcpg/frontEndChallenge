import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Pages/Home";
import Results from "../Pages/Results";
import Anouncements from "../Pages/Announcements";
import Presentation from "../Pages/Presentation"

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Results" component={Results} />
        <Route path="/Anouncements" component={Anouncements} />
        <Route path="/Presentation" component={Presentation} />
      </Switch>
    </Router>
  );
}

