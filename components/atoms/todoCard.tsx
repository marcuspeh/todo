import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React, { useState } from 'react';
import UserInput from './userInput';

interface Props {
    title: string
    body: string
    date: string
    isDone: boolean
    todoId: string
}

const TodoCard: React.FC<Props> = (props): JSX.Element => {
    const { title, body, date, isDone, todoId, ...rest } = props

    const [currTitle, setTitle] = useState(title)
    const [currBody, setBody] = useState(body)
    const [titleError, setTitleError] = useState("")
    const [bodyError, setBodyError] = useState("")
    const [isEditing, setEditing] = useState(false)
    const [currIsDone, setIsDone] = useState(isDone)

    function onTitleChange(e: any): void {
        if (e.target.value.length > 0) {
            setTitle(e.target.value)
            setTitleError("")
        } else {
            setTitleError("Title must not be blank")
        }
    }

    function onBodyChange(e: any): void {
        if (e.target.value.length > 0) {
            setBody(e.target.value)
            setBodyError("")
        } else {
            setBodyError("Body must not be blank")
        }
    }

    function editButtonClick(e: any): void {
        setEditing(true)
    }

    function saveButtonClick(e: any): void {
        setEditing(false)
    }

    function deleteButtonClick(e: any): void {

    }

    function markDoneButtonClick(e: any): void {
        setIsDone(false)
    }

    function markPendingButtonClick(e: any): void {
        setIsDone(true)
    }

    return (
        <Card variant="outlined" sx={{my:2}}>
            <CardContent>
            { isEditing ? (
                <>
                <UserInput label={'Title'} type={'text'} error={titleError} 
                    onChange={onTitleChange} defaultValue={currTitle} />
                <Typography variant="body2" sx={{color: 'grey', mb: 1}}>{date}</Typography>
                <UserInput label={'Title'} type={'text'} error={bodyError} 
                    onChange={onBodyChange} defaultValue={currBody} isMultiline={true}/>
                </>
            ) : (
                <>
                <Typography variant='h5'>{currTitle}</Typography>
                <Typography variant="body2" sx={{color: 'grey', mb: 1 }}>{date}</Typography>
                <Typography variant='body1'>{currBody}</Typography>
                </>
            )}
            </CardContent>
            <CardActions>
            { isEditing ? (
                <>
                <Button size="small" onClick={saveButtonClick}>Save</Button>
                <Button size="small" onClick={deleteButtonClick}>Delete</Button>
                </>
            ) : (
                <>
                <Button size="small" onClick={editButtonClick}>Edit</Button>
                { currIsDone ? (
                    <Button size="small" onClick={markDoneButtonClick}>Mark as done</Button>
                ) : (
                    <Button size="small" onClick={markPendingButtonClick}>Mark as pending</Button>
                )}
                </>
            )}
            </CardActions>
        </Card>
    )
}

export default TodoCard