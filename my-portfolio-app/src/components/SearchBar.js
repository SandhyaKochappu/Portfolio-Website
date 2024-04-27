import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from "./Results";


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState(" ");
    const [repos, setRepos ] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    };

    const handleClick = async () => {
        console.log(searchInput);
        try{
            const result = await axios('https://api.github.com/users/SandhyaKochappu/repos');
            console.log(result);
            setRepos(result);
        }catch (err) {
            console.log(err);
        }
        
    };

    useEffect(() => {
      handleClick();
  }, []);

return (
    <>
    <div style={{padding: "20px"}}>
        <input type="text" placeholder='search'
            value={searchInput} onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
    </div>
    <Results repos={repos}/>
    
    </>
  );
};

export default SearchBar;