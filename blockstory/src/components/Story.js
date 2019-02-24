import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import ContributionForm from './ContributionForm';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: this.props.location.state.story,
            contribution: '',
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = async () => {
        const { story, contribution } = this.state;
        await this.props.contributeToStory(story.id, contribution);
        const newStory = await this.props.refreshStory(story.id)
        this.setState({ story: newStory }, this.resetForm)
        await this.sendToTwist()
    }

    resetForm = () => {
        this.setState({ contribution: '' })
    }

    async sendToTwist() {
        const { story } = this.state;
        console.log(story.body)
        fetch('http://127.0.0.1:5000/' + encodeURIComponent(722580) + '/' + encodeURIComponent(story.body), {
            method: 'GET',
            mode: 'no-cors',
        })
    }

    render() {
        const { story, contribution } = this.state;
        if (!story) {
            return <Redirect to="/stories"/>
        }

        return (
            <div style={{ width: '60%', margin: '2em auto' }}>
                <Header size="huge">{story.title}</Header>
                <Container style={{ wordWrap: 'break-word', margin: '1em' }}>{story.body}</Container>
                <ContributionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
            </div>
        )
    }
}

export default Story;
