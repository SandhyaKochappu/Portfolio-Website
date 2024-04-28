import React from 'react';
import { format } from "date-fns";
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
         <h2>{props.name}</h2> 
         <p className='text-black'></p>
         {props.private ? (
            <p className=" bg-rose-400 py-1 px-2 text-xs text-white shadow
            rounded-lg inline-block">
                Private
            </p>
         ) : (
            <p className="bg-emerald-400 py-1 px-2 text-xs text-white shadow
            rounded-lg inline-block">
                Public
            </p>
         )}
         </div>  
         <div>
         <p className='text-black text-xs'>Created{": "}
         {format(new Date(props.created_at), "dd MMMM yyyy")}
         </p>
         </div>
         <div>
         <a className="bg-blue-400 py-2 px-3 text-s text-white shadow
            rounded-lg inline-block" href={props.html_url} target='_blank'
         rel="noreferrer">
            View Repo
         </a>
         <ul>
         <li>{props.stargazers_count} stars</li>
         <li>{props.watchers_count} watchers</li>
         </ul>
         </div>
        </article>
    </>
  )  
}

