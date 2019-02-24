import React from 'react';
import { Table } from 'semantic-ui-react';

class Submissions extends React.Component {
    render() {
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Submission</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>    
                <Table.Body>
                    {
                        this.props.submissions.map((submission) => {
                            return (
                                <Table.Row key={submission.text}>
                                    <Table.Cell>{submission.text}</Table.Cell>
                                </Table.Row>
                            )
                        })
                    }
                </Table.Body>
            </Table>
        )
    }
}

export default Submissions;
