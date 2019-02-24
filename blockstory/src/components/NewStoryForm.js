import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const NewStoryForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Input
                placeholder="Once upon a time at HackCU"
                name="newStory"
                value={props.value}
                onChange={props.handleChange}/>
                <Button type="submit" content='Submit!'/>
        </Form>
    )
}

export default NewStoryForm;
