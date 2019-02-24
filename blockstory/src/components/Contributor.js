import React from 'react';
import { List, Image } from 'semantic-ui-react';

const Contributor = (props) => {
    const icons = ['https://react.semantic-ui.com/images/avatar/small/matthew.png', 'https://react.semantic-ui.com/images/avatar/small/lindsay.png', 'https://react.semantic-ui.com/images/avatar/small/christian.jpg']
    return (
        <List.Item>
            <Image avatar src={icons[props.num]} />
            <List.Content>
                <List.Header>{props.account}</List.Header>
                <List.Description> Contributions: {props.contributions}</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default Contributor;
