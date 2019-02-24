import React from 'react';
import { Header, Container, Placeholder } from 'semantic-ui-react';
import ContributionForm from './ContributionForm';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            story: null,
            contribution: '',
            loading: true,
            formDisabled: false,
        }
    }

    async componentDidMount() {
        const story = await this.props.getStory(this.props.match.params.id);
        this.setState({ story, loading: false });
    }


    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
        const { story, contribution } = this.state;
        this.setState({ formDisabled: true }, async () => {
            await this.props.contributeToStory(story.id, contribution);
            let newStory = await this.props.getStory(story.id);
    
            this.setState({ story: newStory }, () => window.location.reload());
        })
    }

    resetForm = () => {
        this.setState({ contribution: '' })
    }

    render() {
        const { story, contribution, loading, formDisabled } = this.state;

        if (loading) {
            return <div style={{ width: '60%', margin: '2em auto' }}>
                <Placeholder>
                    <Placeholder.Line/>
                    <Placeholder.Line/>
                </Placeholder>
            </div>
        }

        return (
            <div style={{ width: '60%', margin: '2em auto' }}>
                <Header size="huge">{story.title}</Header>
                <Container style={{ 
                    wordWrap: 'break-word',
                    margin: '1em',
                    padding: '1em',
                    borderRadius: '2px',
                }}>{story.body}</Container>
                <ContributionForm disabled={loading || formDisabled} handleSubmit={this.handleSubmit} handleChange={this.handleChange} value={contribution}/>
            </div>
        )
    }
}

export default Story;
