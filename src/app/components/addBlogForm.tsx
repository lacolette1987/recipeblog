import React, {useState} from 'react';
import {User} from 'firebase/auth';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



interface AddBlogFormProps {
    user: User;
    uploadProcess: number;
    setFile: (file: File) => void;
    submitForm: (form: BlogForm) => void;
}


export interface BlogForm {
    title: string,
    category: string,
    description: string,
};

const initialState = {
    title: "",
    category: "",
    description: "",
};

const categoryoption = [
    "Vorspeise",
    "Hauptgang",
    "Dessert",
    "Apéro"
];

const AddBlogForm: React.FC<AddBlogFormProps>  = ({uploadProcess, setFile, submitForm}) => {

    const [form, setForm] = useState(initialState);
    const {title, category, description} = form;


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setForm({...form, category: event.target.value});
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title && description && category) {
            submitForm(form);
        }
    };


    return (
        <div>
            <Typography component="h1" variant="h3">
                Blog
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="Titel"
                    name="title"
                    autoComplete="title"
                    autoFocus
                    value={title}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="outlined-multiline-flexible"
                    label="Description"
                    multiline
                    maxRows={4}
                    value={description}
                    name="description"
                    onChange={handleChange}
                />
                <select
                    value={category}
                    onChange={onCategoryChange}
                >
                    <option>Bitte wählen Sie eine Kategorie</option>
                    {categoryoption.map((option, index) => (
                        <option value={option || ""} key={index}>
                            {option}
                        </option>
                    ))}
                </select>
                <div>
                    <input type='file' onChange={handleFileChange}/>
                </div>
                <Button type="submit" variant="outlined" disabled={uploadProcess !== null && uploadProcess < 100}>Create</Button>
            </form>
        </div>
    )
}

export default AddBlogForm
