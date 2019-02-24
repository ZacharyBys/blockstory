import React from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
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
    }

    resetForm = () => {
        this.setState({ contribution: '' })
    }

    render() {
        const { story, contribution } = this.state;
        if (!story) {
            return <Redirect to="/stories"/>
        }
    
        return (
            <div style={{ width: '60%', margin: '2em auto' }}>
                <Header size="huge">{story.title}</Header>
                <Header>{story.body}</Header>
                <ContributionForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
            </div>
        )
    }
}

export default Story;
