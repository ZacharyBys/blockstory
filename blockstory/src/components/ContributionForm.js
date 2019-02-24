import React from 'react';
import { Form, Button, Header } from 'semantic-ui-react';

const ContributionForm = (props) => {
    return (
        <React.Fragment>
            <Header>Add your contribution</Header>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group>
                    <Form.Input
                        placeholder="2+2 is 4"
                        name="contribution"
                        value={props.value}
                        onChange={props.handleChange}/>
                    <Button type="submit" content='Submit!' disabled={props.disabled} loading={props.disabled}/>
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}

export default ContributionForm;
