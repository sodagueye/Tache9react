import React, { useState ,useEffect} from "react";
import BlogList from "./BlogList";

function Header() {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'My new website1', body: 'lorem ipsum1...', author: 'mario1', id: 2 },
        { title: 'My new website2', body: 'lorem ipsum2...', author: 'mario2', id: 3 }
    ]);
    console.log("All blogs:", blogs);
    const mariosBlogs = blogs.filter((blog) => blog.author === 'mario');
    console.log("Mario's blogs:", mariosBlogs);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog  => blog.id !== id)
        setBlogs(newBlogs);

    }
    useEffect(()=>{
        console.log('use effect ran');
        console.log(blogs);

    });
    return (
        <div className="home">
             :*<h2>All Blogs!</h2>
            <BlogList blogs={blogs}   handleDelete={handleDelete}/>

            <h2>Mario's blog</h2>
            <BlogList blogs={mariosBlogs}  handleDelete={handleDelete}/>
           {/* <BlogList blogs={blogs} title="All Blogs!" />
            
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blog"  handleDelete={handleDelete}/> 
          */}
           
            {/* <BlogList handleDelete={handleDelete}/>  */}
     

           
        </div>
    );
}

export default Header;
