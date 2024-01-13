import React, { useState } from 'react';
import { ReadmoreButton } from '../theme/my-theme';
import { Comment } from '../models/Comments';
import { Rating, TextField, Typography } from '@mui/material';


interface AddCommentFormProps {
  submitForm: (form: Comment) => void;
}

const initialState: Comment = {
  nickname: '',
  comment: '',
  authorName: '',
  rating: 0,
};


const AddCommentForm: React.FC<AddCommentFormProps> = ({ submitForm }) => {

  const [form, setForm] = useState(initialState);
  const [ratingError, setRatingError] = useState<string>('');
  const { nickname, comment, rating } = form;


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleRatingChange = async (event: React.SyntheticEvent, newValue: number | null) => {
    if (newValue !== null && newValue !== 0) {
      setForm({...form, rating: newValue});
    }
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!rating) {
      setRatingError('Bitte gib eine Bewertung ab.');
      return;
    }

    if (nickname && comment && rating) {
      submitForm(form);
      setForm(initialState);
      setRatingError(''); // Fehlermeldung zurücksetzen
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Rating
          sx={{margin: '20px 0 0px 0'}}
          size='small'
          name='simple-controlled'
          value={rating}
          max={5}
          onChange={handleRatingChange}
        />
        {ratingError && <Typography variant='body1' sx={{mb: '30px', color: 'red'}}>{ratingError}</Typography>}
        <TextField
          margin='normal'
          required
          fullWidth
          id='nickname'
          label='Dein Name'
          name='nickname'
          autoComplete='nickname'
          value={nickname}
          onChange={handleChange}
          autoFocus
          aria-label='Gib einen Nickname ein.'
        />
        <TextField
          margin='normal'
          required
          fullWidth
          multiline
          id='comment'
          label='Dein Kommentar'
          name='comment'
          autoComplete='comment'
          value={comment}
          onChange={handleChange}
          autoFocus
          aria-label='Gib einen Kommentar ein.'
        />
        <ReadmoreButton type='submit' variant="outlined" disableElevation>Kommentieren</ReadmoreButton>
      </form>
    </div>
  );
};


export default AddCommentForm;
