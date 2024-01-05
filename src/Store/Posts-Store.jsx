import { createContext, useReducer } from "react";



const PostList = createContext({
    postList : [],
    addPost : ()=>{},
    removePost : ()=>{},
  });



const postListReducer = (currectPostList , action)=>{
    if(action.type==="ADD_POST"){
        return [...currectPostList, action.payload.val]
    }else if(action.type === "REMOVE_POST"){
        // const index = currectPostList.indexOf(action.payload);
        return currectPostList.filter((post)=>{
            return post.title!==action.payload.val;
        })
    }
    return currectPostList;
}

const PostListProvider = ({ children }) => {
;
  
  const [postList, dispatchPostList] = useReducer(postListReducer,[])
  const addPost = (val) => {
    dispatchPostList({ type: 'ADD_POST', payload: {val} });
  };
  const removePost = (val) => {
    dispatchPostList({ type: 'REMOVE_POST', payload: {val} });
  };
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        removePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
export {PostList};
