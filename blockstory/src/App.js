import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SnowStorm from 'react-snowstorm';
import { getWeb3, getStoryBook, getStories, getStory, getAccount, addNewStory, contributeToStory, getContributors } from "./utils/Web3Util";

import 'semantic-ui-css/semantic.min.css'
import './App.css'

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
      const account = await web3.coinbase();
      console.log(account)
      // // Get the contract instance.
      const storyBook = await getStoryBook(web3);

      storyBook.contributeEvent({}, {
        fromBlock: 0,
        toBlock: 'latest'
      }).watch(function(error, event) {

      });

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ 
        web3, 
        storyBook,
        account
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
    const { web3, storyBook, account } = this.state;

    if (storyBook) {
      return (
        <div>
            <SnowStorm flakesMaxActive={88} flakeWidth={12} flakeHeight={12} followMouse={false} />
          <BrowserRouter>
            <Switch>
              <Route exact path="/stories" render={(props) => <Stories 
                getStories={() => getStories(storyBook)} 
                addNewStory={(title) => addNewStory(storyBook, title, account)}
                getContributors={() => getContributors(storyBook)}/>}/>
              <Route path="/stories/:id" render={(props) => <Story {...props} 
                getStory={(storyId) => getStory(storyBook, storyId)}
                contributeToStory={(storyId, contribution) => contributeToStory(storyBook, storyId, contribution, account)}/> }/>}/>
            </Switch>
          </BrowserRouter>
        </div>
      )
    }

    return <div></div>

  }
}

export default App;
