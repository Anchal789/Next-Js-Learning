"use client";

import { createPost } from "@/actions/post";
import { useFormState, useFormStatus } from "react-dom";

function FormSubmit() {
    const status = useFormStatus();

    if (status.pending) {
        return <p>Creating post...</p>;
    }

    return (
        <>
            <button type='reset'>Reset</button>
            <button type='submit'>Create Post</button>
        </>
    );
}

export default function NewPostPage() {
    const [state, formAction] = useFormState(createPost, {});

    return (
        <>
            <h1>Create a new post</h1>
            <form action={formAction}>
                <p className='form-control'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' id='title' name='title' />
                    {state.title && <span className='error'>{state.title}</span>}
                </p>
                <p className='form-control'>
                    <label htmlFor='image'>Image</label>
                    <input
                        type='file'
                        accept='image/png, image/jpeg'
                        id='image'
                        name='image'
                    />
                    {state.image && <span className='error'>{state.image}</span>}
                </p>
                <p className='form-control'>
                    <label htmlFor='content'>Content</label>
                    <textarea id='content' name='content' rows='5' />
                    {state.content && <span className='error'>{state.content}</span>}
                </p>
                <div className='form-actions'>
                    <FormSubmit />
                </div>
            </form>
        </>
    );
}