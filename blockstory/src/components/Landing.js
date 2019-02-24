import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Header, Container, Button } from 'semantic-ui-react';

class Landing extends React.Component {
    state = { redirect: false }


    handleClick = () => {
        this.setState({ redirect: true });
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/stories"/>
        }

        return (
            <Grid textAlign="center" verticalAlign="middle" style={{ height: '100%' }}>
                <Grid.Column verticalAlign="middle">
                    <Header size="huge">Welcome to BlockStory</Header>
                    <Container>
                        <Header className="tag">Collaborative storytelling on the Ethereum blockchain</Header>
                    </Container>
                    <Button style={{ width: '150px', marginTop: '2em' }} content='Enter' onClick={this.handleClick}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Landing;
