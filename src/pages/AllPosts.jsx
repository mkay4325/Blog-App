import React from 'react'
import service from '../appwrite/config'
import { PostCard , Container } from '../Components'
import { useEffect , useState } from 'react'

function AllPosts() {
const [Posts ,setPosts] = useState([])

useEffect(()=>{
 service.getPosts([]).then((posts)=>{
    setPosts(posts.documents);
 })


});



  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {Posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts