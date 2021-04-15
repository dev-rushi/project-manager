import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Addmembers from "./Addmembers" ;
import Addtask from "./Addtask";
import Project from "./Project";
import Member from "./Member";
import ManageMembers from "./ManageMembers";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function ProjectHome() {
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="row"
    >
    <LeftPanel></LeftPanel>

      <Switch>
        <Route exact path="/">
          <RightPanel></RightPanel>
        </Route>

        <Route path="/addmember">
        <Member></Member>
      </Route>

      <Route path="/manage-members">
      <ManageMembers></ManageMembers>
    </Route>
     </Switch>
    </div>
  );
}

export default ProjectHome;
