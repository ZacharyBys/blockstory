import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

const StoryPreview = (props) => {
    return (
        <List.Item as={Link} to={{
            pathname: `/stories/${props.story.id}`,
            state: { story: props.story },
        }}>
            <List.Content>
                <List.Header>{props.story.title}</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default StoryPreview;
