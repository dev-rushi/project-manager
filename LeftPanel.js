import {Link} from 'react-router-dom' ;
import {Button} from 'react-bootstrap'


function LeftPanel(){


    return(


        <div class="col-2 bg-primary h-100">
        <h6 className="text-white p-2">Project Manager</h6>

        <Link to="/manage-members"> <Button variant="danger" >Manage members</Button> </Link>

        </div>
    );
}

export default LeftPanel ;