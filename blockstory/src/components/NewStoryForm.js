import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

const NewStoryForm = (props) => {
    return (
        <React.Fragment>
            <Header style={{ fontSize: '22px' }}>Create a new story</Header>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder="Once upon a time at HackCU"
                        name="newStory"
                        value={props.value}
                        onChange={props.handleChange}/>
                        <Button type="submit" content='Submit!'/>
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}

export default NewStoryForm;
