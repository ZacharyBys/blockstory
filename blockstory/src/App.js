import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { getWeb3, getStoryBook, getStories, getStory, contributeToStory } from "./utils/Web3Util";

import 'semantic-ui-css/semantic.min.css'

import Stories from './components/Stories'
import Story from './components/Story';

const s = [
  {
    text: 'Hello',
  },
  {
    text: 'World',
  }
]

class App extends Component {
  state = { storageValue: 0, web3: null, account: null, storyBook: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // // Use web3 to get the user's accounts.
      const account = await web3.eth.getCoinbase();

      // // Get the contract instance.
      const storyBook = await getStoryBook(web3);

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ 
        web3, 
        account, 
        storyBook,
      })
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    const { storyBook, account } = this.state;

    if (storyBook) {
      return (
        <BrowserRouter>
          <Switch>
            <Route exact path="/stories" render={(props) => <Stories getStories={() => getStories(storyBook)} />}/>

            <Route path="/stories/:id" render={(props) => <Story {...props} 
              refreshStory={(storyId) => getStory(storyBook, storyId)}
              contributeToStory={(storyId, contribution) => contributeToStory(storyBook, storyId, contribution, account)}/> }/>}/>
          </Switch>
        </BrowserRouter>
      )
    }

    return <div></div>

  }
}

export default App;
