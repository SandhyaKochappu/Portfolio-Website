import React from 'react';
/*props:receives the ...repos argument passed from Searchbar.js in Profile div 
Tailwind’s utility class is used  to style this content.*/

export default function Profile(props) {
    
  return (
    <>
        <article className="p-5 bg-white rounded-lg shadow
        shadow-emerald-300 mt-10">
         <img src={props.owner.avatar_url} alt={props.owner.login}
         className='w-20 h-20 rounded-full shadow' />
         <div>
         <h2>{props.owner.login}</h2> 
         <p></p>
         </div>  
        </article>
    </>
  )  
}

