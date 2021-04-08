import "./App.css";
import Sidebar from "./sidebar.js";
import Topbar from "./topbar.js";
import Dashboard from "./Dashboard.js";
import Footer from "./Footer.js";
import User from "./User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import Profile from "./Profile";
import {UserProvider} from "./userContext";


function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <UserProvider>
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
                <Route path="/CreateUser">
                  <CreateUser />
                </Route>
                <Route path="/EditUser/:id" component={EditUser}/>
                <Route path="/Profile/:id" component={Profile}/>
              </Switch>
            </div>
          </div>
        </div>
        </UserProvider>
      </div>
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
      </a>
      <Footer></Footer>
    </Router>
  );
}

export default App;
