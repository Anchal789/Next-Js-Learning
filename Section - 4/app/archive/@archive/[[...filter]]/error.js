"use client";

const FilterError = ({error}) => {
    return (
        <div id='error'>
            <p>An error occurred</p>
            <code>{error.message}</code>
        </div>
    );
}