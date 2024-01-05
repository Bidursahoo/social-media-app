import React, { useContext } from "react";
import { PostList } from "../Store/Posts-Store";

export default function Cards({title , content}) {
    const {removePost} = useContext(PostList)
  return (
    <>
      <div className="w-75 container">
      <div class="row row-cols-2">
      <div className="card m-2" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {content}
          </p>
          <p className="btn btn-danger" onClick={()=>removePost(title)}>Delete</p>
        </div>
      </div>
      </div>
      
      
      </div>
    </>
  );
}
