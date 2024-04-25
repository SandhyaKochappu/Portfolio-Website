import "./PortfolioGithubStyles.css";
import React, { useEffect, useState } from 'react';
/*Get Github projects Data using useEffect,useState Hooks with Fetch API*/

const PortfolioGithub = () => {

  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
      const response = await fetch('https://api.github.com/users/SandhyaKochappu/repos');
      setProjects(await response.json());
      
    }

  useEffect(() => {
      getProjects();
  }, []);

  return (
    <div>
      <h5>List of Projects</h5>
        <div className="container-fluid mt-5">
          <div className="row text-center">
            {
              projects.map((curElem) => {
                return (
                  <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                  <div className="card p-2">
                  <div className="d-flex align-items-center">
                  <div className="img"><img src="" className="rounded" width="155" /> </div>
                  <div className="ml-3 w-100">
                    <h6 className="mb-0 mt-0 textleft">{curElem.name}</h6>
                   </div>
                   </div>
                   </div>
                  </div>
                )
              })
            }           
            
            </div>

          </div>

        </div>   
  )
}

export default PortfolioGithub;