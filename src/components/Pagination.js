import React from 'react'
import './Pagination.css';

function Pagination({totalPosts,postsPerPage, setCurrentPage}) {
    let pages = [];
    
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }
  return (
    <div>
        { pages.map((page,index) => {
            return <button className="button-23" role="button" key={index} onClick={() => setCurrentPage(page)}>{page}</button>
        })}
    </div>
  )
}

export default Pagination