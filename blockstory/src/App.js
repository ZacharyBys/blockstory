import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import getWeb3 from "./utils/getWeb3";
import StoryBook from './StoryBook';

import 'semantic-ui-css/semantic.min.css'

import Stories from './components/Stories'
import Submissions from './components/Submissions';


const s = [
  {
    text: 'Hello',
  },
  {
    text: 'World',
  }
]

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // // Use web3 to get the user's accounts.
      // const accounts = await web3.eth.getAccounts();

      // // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = StoryBook.networks[networkId];
      const instance = new web3.eth.Contract(
        StoryBook.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      // this.setState({ 
      //   web3, 
      //   accounts, 
      //   contract: instance 
      // });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Route path="/stories" component={Stories}/>
      </BrowserRouter>
    )
  }
}

export default App;
