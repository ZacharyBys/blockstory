import React from 'react';
import { Form, Button } from 'semantic-ui-react';

const ContributionForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Input
                placeholder="2+2 is 4"
                name="contribution"
                value={props.value}
                onChange={props.handleChange}/>
                <Button type="submit" content='Submit!'/>
        </Form>
    )
}

export default ContributionForm;
