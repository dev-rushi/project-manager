import ProjectCard from "./ProjectCard";
import React, { useState , useEffect } from "react";
import axios from "axios"
function RightPanel() {
  const [projectCount, setprojectCount] = useState(0);
  const [data,setData] = useState("no data");
  const getMembers = () =>{

    axios.get("https://jsonplaceholder.typicode.com/todos/")
          .then(response =>{
            setprojectCount(1)
            setData(response.data[0].userId) 
          })
          .catch(err =>{

          })
   }
  

  useEffect(() => {
    
    getMembers();
  }, []);


  return (
    <div className="col-md-10 ">
      
       <a href="/form"> <button className="btn btn-sm btn-danger mt-5">Add Project</button></a>
        {
          projectCount==0 && <h1>Loading</h1>
        }
        <h1>{data}</h1>
 </div>
  );
}

export default RightPanel;
