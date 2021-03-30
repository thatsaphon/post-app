/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'


function SinglePostPage() {
    const [post, setPost] = useState({})
    let params = useParams();

    useEffect(() => {
        async function getPostById() {
            let response = await fetch('http://localhost:8000/posts/' + params.postId
            );
            let data = await response.json()
            console.log(data)
            setPost(data.data)
        }
        getPostById()
    }, [])
    console.log(params)
    return (
        <div>
            <div className="postapp-header">
                <h1
                    css={css`
          color: cornflowerblue;
          font-size: 50px;
        `}>Single post page</h1>
            </div>
            <div css={css`display: flex; justify-content:center;`}>
                <div css={css`width:400px; height:400px; border: 1px solid black; border-radius:30px; margin-top:20px;`}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
    )
}



export default SinglePostPage