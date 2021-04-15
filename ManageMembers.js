import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'
function ManageMembers(){



    const [userCount,setUserCount] = useState(0);


    return(
        <div className="col-5 p-5">
        <Link to='/addmember'><Button variant="danger">Add user</Button></Link> 
        {userCount==0 && <h1>Currently no users found</h1>}
        </div>
    );
}

export default ManageMembers