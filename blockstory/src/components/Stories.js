import React from 'react';
import StoryPreview from './StoryPreview';
import Contributor from './Contributor';

import NewStoryForm from './NewStoryForm';

import { List, Header, Placeholder } from 'semantic-ui-react';

class Stories extends React.Component {
    state = {
        stories: [],
        contributors: [],
        newStory: '',
        loading: true,
    }

    async componentDidMount() {
        const stories = await this.props.getStories();
        const contributors = await this.props.getContributors();
        console.log(contributors)
        console.log(stories)
        this.setState({ stories, contributors, loading: false });
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
        const { stories, contribution, contributors, loading } = this.state;

        if (loading) {
            return (
                <div style={{ width: '60%', margin: '2em auto'}}>
                    <Header size="huge">
                        Stories
                    </Header>
                    <List>
                        <List.Item>
                            <Placeholder>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                        <List.Item>
                            <Placeholder>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                        <List.Item>
                            <Placeholder>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                        <List.Item>
                            <Placeholder>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                    </List>
                    <NewStoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
                    <Header size="medium">
                        Top Contributors
                    </Header> 
                    <List>
                        <List.Item>
                            <Placeholder>
                                <Placeholder.Line size="small"/>    
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                        <List.Item>
                            <Placeholder>
                            <Placeholder.Line size="small"/>
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                        <List.Item>
                            <Placeholder>
                                <Placeholder.Line size="small"/>
                                <Placeholder.Line/>
                            </Placeholder>
                        </List.Item>
                    </List>       
                </div>
            )
        }

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
                <NewStoryForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
                <Header size="medium">
                    Top Contributors
                </Header>
                <List>
                    {
                        contributors.map((contributor) => <Contributor 
                            key={contributor.address} 
                            account={contributor.address} 
                            contributions={contributor.contributions} 
                            num={contributor.num}/>
                        )
                    }
                </List>
            </div>
        )
    }
}

export default Stories;
