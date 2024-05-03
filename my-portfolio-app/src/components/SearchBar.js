import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Profile from './Profile';
//import "./SearchBarStyles.css";


/*Using react hooks: useState, useEffect, and asynchronous programming
 to fetch data from GITHUB API;
 If there are no repos, display the loading component
 ...repos: spread operator to get the rest of the properties in the repos list */ 

const SearchBar = () => {
   
    const [repos, setRepos ] = useState([]);
    const [users] = useState("SandhyaKochappu");
    const apiToken = process.env.REACT_APP_API_TOKEN;    
    
    

    useEffect(() => {
       const fetchRepos = async () => {
            const res = await fetch(`https://api.github.com/search/repositories?q=user:${users}`,
                        {
                            headers: {
                                Authorization: `Bearer ${apiToken}`
                            },
                        });        
            const data = await res.json()  
            console.log(data);                   
            setRepos(data.items);
       }
       fetchRepos()            
  }, []);

 
    

    

return (
    <> 
    
        

        {!repos ? <Loading /> :
            (
                <>
                <section className='pt-20 pb-20'>                      
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
                      {repos.map((repos) => (
                            <Profile key={repos.id} {...repos}/>
                        ))}                         
                    </div> 
                </section>
                </>
            ) 
        };
        
       </>       
);

}
export default SearchBar;