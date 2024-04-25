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
        <div class="container-fluid mt-5">
          <div class="row text-center">
            {
              projects.map((curElem) => {
                return (
                  
                  <div class="col-10 col-md-4 mt-5" key={curElem.id}>
                  <div class="card p-2">
                  <div class="d-flex align-items-center">
                  <div class="img"><img src="" class="rounded" width="155" /> </div>
                  <div class="ml-3 w-100">
                    <h6 class="mb-0 mt-0 textleft">{curElem.name}</h6>
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