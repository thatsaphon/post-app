/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '../components/Button'



function AddPostPage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    let history = useHistory()

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }
    function handleDescriptionChange(event) {
        setDescription(event.target.value)
    }

    async function createPosts() {
        let response = await fetch("http://localhost:8000/posts/", {
            method: "POST",
            body: JSON.stringify({ title: title, content: description }),
            headers: {
                "content-type": "application/json"
            }
        });
        if (response.ok) {
            history.push("/");
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log('submit')
        createPosts()
    }
    // console.log('title: ', title)
    // console.log('description: ', description)

    return (
        <div css={css`display: flex; justify-content: center;`}>
            <form onSubmit={handleFormSubmit}>
                <div css={css`width: 450px; height: 500px; border: black 1px solid; border-radius=50px; margin-top: 50px; border-radius:20px; box-sizing: content-box; padding: 5px;`}>
                    <h1>PostApp</h1>
                    <div><h3><label htmlFor="title">Title</label></h3></div>
                    <input value={title} onChange={handleTitleChange} id="title" type="text" css={css`width: 90%; margin-left: 10px; border-radius:5px;`}></input>
                    <div><h3><label htmlFor="description">Description</label></h3></div>
                    <input value={description} onChange={handleDescriptionChange} id="description" css={css`width:90%; height: 50%; margin-left: 10px; border-radius:20px;`}></input>
                    <div css={css`display:flex; justify-content:center;`}>
                        {/* <StyledButton type="submit">Add</StyledButton> */}
                        <Button primary type="submit">Add</Button>
                    </div>
                </div>
            </form>
        </div>
    )
}




export default AddPostPage