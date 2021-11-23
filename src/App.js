import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import Widgets from "./Widgets";
import "./App.css";
import { useStateValue } from "./StateProvider";
//Everthing below this is dealing with routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import About from "./About";
import SidebarRow from "./Sidebar";
import About from "./Sidebar";
//import Posts from "./Posts";

function App() {
  const [{ user }, distpatch] = useStateValue();
  return (
    //BEM naming convention
    <Router>
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />

            <div className="app_body">
              <Sidebar>
                <SidebarRow>
                  <Route path="/About" component={<Sidebar />} />
                </SidebarRow>
              </Sidebar>

              <Feed />
              <Widgets />
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;

/*<div className="app_posts">
<Posts user={user} />
</div>*/

//
