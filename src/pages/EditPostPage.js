/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Button from "../components/Button";


function EditPostPage() {

    const [editTitle, setEditTitle] = useState('')
    const [editContent, setEditContent] = useState('')
    let params = useParams()
    let history = useHistory()
    console.log(params)

    useEffect(() => {
        async function getEditPostById() {
            let response = await fetch('http://localhost:8000/posts/' + params.postId)
            let data = await response.json()
            console.log(data.data)
            setEditTitle(data.data.title)
            setEditContent(data.data.content)
        }
        getEditPostById()
    }, [])

    function handleTitleChange(event) {
        setEditTitle(event.target.value)
        console.log(editTitle)
    }

    function handleContentChange(event) {
        setEditContent(event.target.value)
        console.log(editContent)
        console.log({ title: editTitle, content: editContent })
    }

    async function editPost() {
        let submitResponse = await fetch('http://localhost:8000/posts/' + params.postId, {
            method: 'PUT',
            body: JSON.stringify({ title: editTitle, content: editContent }),
            headers: { "content-type": "application/json" }
        });
        let data2 = submitResponse.json()
        console.log(submitResponse)
        console.log(data2)
        if (submitResponse.ok) {
            history.push("/")
        }

    }

    function handleFormSubmit(event) {
        event.preventDefault()
        console.log({ title: editTitle, content: editContent })
        editPost()
    }


    return (

        < div >

            <div className="postapp-header">
                <h1
                    css={css`
          color: white;
          font-size: 50px;
        `}>Edit post page</h1>
            </div>

            <form onSubmit={handleFormSubmit}>
                <h1>Title</h1>
                <input value={editTitle} onChange={handleTitleChange}></input>
                <h3>Description</h3>
                <input value={editContent} onChange={handleContentChange}></input>
                <div css={css`margin-top:20px`}><Button type='submit'>submit</Button></div>
            </form>


        </div >

    )
}




export default EditPostPage