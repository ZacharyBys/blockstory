import React from 'react';
import { List, Image } from 'semantic-ui-react';

const Contributor = (props) => {
    return (
        <List.Item>
            <Image avatar src='https://react.semantic-ui.com/images/avatar/small/matthew.png' />
            <List.Content>
                <List.Header>{props.account}</List.Header>
                <List.Description> Contributions: {props.contributions}</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default Contributor;
