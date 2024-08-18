import React from 'react'

function Navbars(params) {
    return(
         <nav className='navbar'>
        <h1>The Dojo Blog</h1>
        <div className='link'>
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
        </div>
    </nav> 
    )
    
}
export default Navbars