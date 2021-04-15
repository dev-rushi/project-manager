import { useState } from "react";



function ProjectCard(props){

    const [ProjectName, setProjectName] = useState("Java project");
    const [Manager, setManager] = useState("Rushikesh");
    const [Members , setMembers] = useState([1,2,3]);


    return(

        <div className="col-5 p-5 shadow m-2">
            {ProjectName}
        </div>
    )




    
}


export default ProjectCard