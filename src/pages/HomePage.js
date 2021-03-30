/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import styled from "@emotion/styled"
import { useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Button'

// const StyledButton = styled.button`
//   border-radius: 5px;
//   background-color: khaki;
//   height: 30px;
//   width: 100px;
//   color: ${(props) => props.primary ? 'crimson' : 'cornflowerblue'};
// `

function HomePage() {
    const [posts, setPosts] = useState([])
    const [isError, setIsError] = useState(null)

    let history = useHistory()

    useEffect(function () {
        async function getPosts() {
            try {
                let response = await fetch('http://localhost:8000/posts')
                let data = await response.json()
                setPosts(data.data)
            } catch (error) {
                setIsError(true)
                console.log('error!')
            }
        }
        getPosts();
        console.log('effect running')
    }, [])

    function handleAddPostClick() {
        history.push('/addpost')
        console.log('test click');
    }

    async function handleDeletedPost(postId) {
        console.log(postId)
        let response = await fetch("http://localhost:8000/posts/" + postId, {
            method: "DELETE",
        });
        console.log(response)
        if (response.ok) {
            let newPosts = posts.filter((post) => {
                return post.id !== postId
            })
            setPosts(newPosts);
        }
    }
    function handleEditPost(postId) {
        console.log('test edit')
        console.log(postId)
        history.push('/editpost/' + postId)
    }
    console.log(posts)
    return (
        <div>
            <div className="postapp-header">
                <h1
                    css={css`
          color: cornflowerblue;
          font-size: 50px;
        `}>Post App
        </h1>
                <Button primary onClick={handleAddPostClick}>Add Post</Button>
                {/* <StyledButton primary={true} onClick={handleAddPostClick}>Add Post</StyledButton> */}
                {/* <button className="add-post-button">Add Post</button> */}
            </div>
            <div className="post-list-container">
                <div className="post-list">
                    {isError && <h1>Something went wrong Please try again tomorrow</h1>}
                    {posts.map((post) => {
                        return (
                            <div key={post.id} className="post">
                                <h3 onClick={() => {
                                    history.push('/post/' + post.id)
                                }}>Title: {post.title}</h3>
                                <p>{post.content}</p>
                                <div className="post-footer">
                                    <span>Author:Anonymous</span>
                                    <Button onClick={function () {
                                        handleEditPost(post.id)
                                    }}>Edit</Button>
                                    <Button onClick={function () {
                                        handleDeletedPost(post.id);
                                    }}>Delete</Button>
                                    {/* <StyledButton primary onClick={function () {
                                        handleDeletedPost(post.id);
                                    }}>Delete</StyledButton> */}
                                    {/* <button>Edit</button>
              <button>Delete</button> */}
                                </div>
                            </div>

                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default HomePage;