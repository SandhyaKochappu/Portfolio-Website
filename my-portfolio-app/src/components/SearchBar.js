import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Profile from './Profile';
//import "./SearchBarStyles.css";


/*Using react hooks: useState, useEffect, and asynchronous programming
 to fetch data from GITHUB API;
 If there are no repos, display the loading component
 ...repos: spread operator to get the rest of the properties in the repos list */ 

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);    
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

  const handleChange = (e) => {
        setSearchInput(e.target.value)
    };       
    
    const handleClick = () => {
        // Update state to indicate button click
        setButtonClicked(true);
                
    };

    useEffect(() => {
    if (buttonClicked) {
      const repository = repos.find((repo) => repo.name === searchInput);  
        <Profile key={repository.id} {...repository}/>
        if (!repository) {
            return <div>Repository not found.</div>;
        }
    } 
  }, [buttonClicked]); // Dependency array includes buttonClicked state


return (
    <> 
    <div style={{padding: "20px"}}>
        <input type="text" placeholder='search'
            value={searchInput} onChange={handleChange}
        />
        <button  style={{ color:'white', size:'sm',
         backgroundColor: '#228B22'}}
         onClick={handleClick}>Search</button>
        </div>

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