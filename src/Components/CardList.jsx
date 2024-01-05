import React, { useContext } from 'react'
import Cards from './Cards'
import { PostList } from '../Store/Posts-Store'

export default function CardList() {
    const {postList} = useContext(PostList)
    // console.log(postList)
  return (
    <>
    
        {
            postList.map((post)=>(
                <Cards title={post.title} content={post.content}/>
            ))
        }
    
    </>
  )
}
