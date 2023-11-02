import React from 'react'
import { TextField, Typography } from '@mui/material'



export const AddCommentForm = () => {
    return (
        <div>
        <Typography variant="h2">Comments</Typography>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Your name"
            name="name"
            autoComplete="name"
            // value={email}
            // onChange={handleChange}
            autoFocus
        />
        <TextField
            margin="normal"
            required
            fullWidth
            multiline
            id="comment"
            label="Your comment"
            name="name"
            autoComplete="comment"
            // value={email}
            // onChange={handleChange}
            autoFocus
        />
        </div>
    )
}
