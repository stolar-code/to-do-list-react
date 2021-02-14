import React, { useState, useRef } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null)

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent) {
            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
            inputRef.current.focus()
        };
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="What should I do today?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>
                Add task
            </Button>
        </StyledForm>
    )
};

export default Form;