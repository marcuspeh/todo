import { Box, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import { createNewTodo } from '../../apiController/todoController';
import UserInput from '../atoms/userInput';


const NewTodo: React.FC = (): JSX.Element => {
    const [inputBody, setInputBody] = useState("")
    const [inputTitle, setInputTitle] = useState("")
    const [bodyError, setBodyError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [bannerMessage, setBannerMessage] = useState("")

    function onTitleInputChange(e: any): void {
        if (e.target.value) {
            setTitleError("")
            setInputTitle(e.target.value)
        } else {
            setTitleError("Title is required")
        }
    }

    function onBodyInputChange(e: any): void {
        if (e.target.value) {
            setBodyError("")
            setInputBody(e.target.value)
        } else {
            setBodyError("Body is required")
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        var isValid: boolean = true

        if (inputTitle.length === 0) {
            setTitleError("Title is required")
            isValid = false
        } 
        if (inputBody.length === 0) {
            setBodyError("Body is required")
            isValid = false
        }

        if (isValid) {
            const result = await createNewTodo(inputTitle, inputBody)
            if (result.isSuccess) {
                setBannerMessage("Todo added.")
                setInputTitle("")
                setInputBody("")
            } else {
                setBannerMessage(result.errorCode)
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate  sx={{ mt: 3, mb: 2, px: 3, py: 3, borderRadius: '10px' }} bgcolor="#d4e3fb">
            {!!(bannerMessage.length !== 0) && <Alert severity="warning">{bannerMessage}</Alert>}
            <UserInput label={'Title'} type={'text'} error={titleError} onChange={onTitleInputChange} />
            <UserInput label={'Body'} type={'text'} error={bodyError}  isMultiline={true} onChange={onBodyInputChange} />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
                Create new
            </Button>
        </Box>
    )
}

export default NewTodo;