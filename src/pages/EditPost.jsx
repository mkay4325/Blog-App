import React from 'react'
import { PostForm , Container } from '../Components'
import { useEffect ,useState } from 'react'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post , setPosts] = useState(null)
   const navigate =  useNavigate()
   const {slug} = useParams()
   useEffect(() => {

    service.getPost(slug).then((post)=>{
        if(post){
            setPosts(post)
        }
        else{
            navigate('/')
        }
    })
     
   }, [slug ,navigate])
   




   return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost