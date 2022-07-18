import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'


const NotePage = () => {

    let navigate = useNavigate()
    let params = useParams()
    let noteId = params.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        if (noteId === 'new') return
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        if (note) {
            fetch(`/api/notes/${noteId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            })
        }
        return navigate('/')
    }

    let createNote = async () => {
        if (note != null) {
            fetch(`/api/notes/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            })
        }
        return navigate('/')
    }

    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return navigate('/')
    }


    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft  onClick={updateNote}/>
                </h3>
                {noteId !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>
                ): (
                <button onClick={createNote}>Done</button>
                )}
            </div>
            <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
        </div>
    )
}

export default NotePage