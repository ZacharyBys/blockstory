import React from 'react';
import StoryPreview from './StoryPreview';

import NewStoryForm from './NewStoryForm';

import { List, Header } from 'semantic-ui-react';

class Stories extends React.Component {
    state = {
        stories: [],
        newStory: '',
    }

    async componentDidMount() {
        const stories = await this.props.getStories();
        console.log(stories)
        this.setState({ stories });
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
        const { stories, contribution } = this.state;
        return (
            <div style={{ width: '60%', margin: '2em auto'}}>
                <Header size="huge">
                    Stories
                </Header>
                <List divided relaxed>
                    {
                        stories.map((story) => <StoryPreview key={story.id} story={story}/>)
                    }
                </List>
                <NewStoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
            </div>
        )
    }
}

export default Stories;
