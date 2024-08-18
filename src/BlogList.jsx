import React from "react";
// function BlogList(props) {
//     const blogs = props.blogs;
const BlogList= ({blogs, title, handleDelete}) => {
   return (


    <div className="">
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <div className="blog-preview" key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                            <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                        </div>
                    ))
                ) : (
                    <div className="blog-preview">No blogs to display</div>
                )}
            </div>
       
     
            
    )

}
export default BlogList