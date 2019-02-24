import React from 'react';
import Story from './Story';

import { Table } from 'semantic-ui-react';

class Stories extends React.Component {
    state = {
        stories: [],
    }

    componentDidMount() {
        this.setState({ 
            stories: [
                {
                    id: 1,
                    title: 'The Big Hike',
                }
            ],
        });
    }

    render() {
        const { stories } = this.state;
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Story</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>    
                <Table.Body>
                    {
                        stories.map((story) => <Story key={story.id} story={story}/>)
                    }
                </Table.Body>
            </Table>
        )
    }
}

export default Stories;
