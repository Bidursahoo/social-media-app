import React, { useContext, useState } from "react";
import { PostList } from "../Store/Posts-Store";

export default function Form() {
  const [inputValues, setInputValues] = useState({
    title: "",
    content: "",
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const {addPost} = useContext(PostList);
  return (
    <div className="container w-50">
      <div className="mb-3">
        <label for="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="emailHelp"
          name="title"
          onChange={handleOnChange}
          value={inputValues.title}
        />
      </div>
      <div className="mb-3">
        <label for="content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="content"
          rows={3}
          cols={3}
          style={{ resize: "none" }}
          name="content"
          onChange={handleOnChange}
          value={inputValues.content}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={()=> addPost(inputValues)}>Submit</button>
    </div>
  );
}
