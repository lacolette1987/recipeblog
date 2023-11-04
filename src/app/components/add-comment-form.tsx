import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'




interface AddCommentFormProps {
    submitForm: (form: CommentForm) => void;
}

export interface CommentForm {
    commentaryname: string,
    comment: string,
};

const initialState = {
    commentaryname: "",
    comment: "",
};



const AddCommentForm: React.FC<AddCommentFormProps>  = ({submitForm}) => {

    const [form, setForm] = useState(initialState);
    const {commentaryname, comment} = form;


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (commentaryname && comment) {
            submitForm(form);
        }
    };



    return (
        <div>
            <Typography variant="h2">Comments</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="commentaryname"
                    label="Your name"
                    name="commentaryname"
                    autoComplete="commentaryname"
                    value={commentaryname}
                    onChange={handleChange}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    multiline
                    id="comment"
                    label="Your comment"
                    name="comment"
                    autoComplete="comment"
                    value={comment}
                    onChange={handleChange}
                    autoFocus
                />
                <Button type="submit" variant="outlined">Comment</Button>
           </form>
        </div>
    )
}


export default AddCommentForm;