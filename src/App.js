import "./App.css";
import Sidebar from "./sidebar.js";
import Topbar from "./topbar.js";
import Dashboard from "./Dashboard.js";
import Footer from "./Footer.js";
import User from "./User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Switch>
                <Route path="/" exact="true">
                  <Dashboard />
                </Route>
                <Route path="/user">
                  <User />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
      <Footer></Footer>
    </Router>
  );
}

export default App;
