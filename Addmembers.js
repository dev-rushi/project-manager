import React from 'react'
 
const Addmembers = () => {
    return (
        <div className="container p-3">
        <h3>Form</h3>
        <form className="shadow-lg border border-primary rounded outline w-50 mx-auto mt-5 bg-white p-3" method="post" action="/">

        <div className="form-group">
            <label className="form-label" for="project-name">project name</label>
            <input className="form-control" type="text" name="name"></input>
        </div>

        <div className="form-group">
            <label className="form-label" for="project-name">Start date</label>
            <input className="form-control" type="date" name="start-date"></input>
        </div>

        <div className="form-group">
            <label className="label" for="project-name">end date</label>
            <input className="form-control" type="date" name="end-date"></input>
        </div>


        <div className="form-group">
            <label className="form-label" for="project-name">project name</label>
            <input className="form-control" type="text" name=""></input>
        </div>


        <div className="form-group">
            <label className="form-label" for="project-name">project name</label>
            <input className="form-control" type="text" name="name"></input>
        </div>
        

      
        </form>
        <button class="mt-2 btn btn-danger">Add</button>
       <a href="/"> <button class="mt-2 ml-2 btn btn-secondary">Close</button></a>
        </div >
    );
}

export default Addmembers
