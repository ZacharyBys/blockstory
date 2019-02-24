import React from 'react';
import StoryPreview from './StoryPreview';
import Contributor from './Contributor';

import NewStoryForm from './NewStoryForm';

import { List, Header } from 'semantic-ui-react';

class Stories extends React.Component {
    state = {
        stories: [],
        contributors: [],
        newStory: '',
    }

    async componentDidMount() {
        const stories = await this.props.getStories();
        const contributors = await this.props.getContributors();
        console.log(contributors)
        console.log(stories)
        this.setState({ stories, contributors });
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = async () => {
        const { newStory } = this.state;
        console.log(newStory)
        await this.props.addNewStory(newStory);
        this.resetForm()
        window.location.reload();
    }

    resetForm = () => {
        this.setState({ newStory: '' })
    }

    render() {
        const { stories, contribution, contributors } = this.state;
        return (
            <div style={{ width: '60%', margin: '2em auto'}}>
                <Header size="huge">
                    Stories
                </Header>
                <List divided relaxed>
                    {
                        stories.map((story) => <StoryPreview key={story.id} story={story} characters={story.body.length}/>)
                    }
                </List>
                <Header size="medium">
                    Top Contributors
                </Header>
                <List>
                    {
                        contributors.map((contributor) => <Contributor account={contributor.address} contributions={contributor.contributions} num={contributor.num}/>)
                    }
                </List>
                <NewStoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
            </div>
        )
    }
}

export default Stories;
