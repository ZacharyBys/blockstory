import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react';

const Story = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.story.title}</Table.Cell>
        </Table.Row>
    )
}

export default Story;
