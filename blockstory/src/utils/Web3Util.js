import StoryBook from '../StoryBook';
import Eth from 'ethjs';

export const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new window.Web3(window.ethereum);

        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          resolve(new Eth(web3.currentProvider));
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new window.Web3.providers.HttpProvider(
          "http://127.0.0.1:7545"
        );
        const web3 = new window.Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export const getStoryBook = async (web3) => {
  // web3.eth.defaultAccount = web3.accounts[0];
  return await web3.contract(StoryBook.abi).at('0x5D9cC46689d7E67DD3Ec72d1B186A08Dfb023f5d');
}

export const getStories = async (storyBook) => {
  let numStories = await storyBook.storiesCount();
  numStories = numStories[0].words[0]
  let stories = []
  for (let index = 1; index <= numStories; index++) {
    const story = await storyBook.stories(index);
    stories = [...stories, { id: story.id.words[0], title: story[1], body: story[2] }];
  }
  
  return await stories;
}

export const getStory = async (storyBook, storyId) => {
  const story = await storyBook.stories(storyId);
  return await { id: story.id.words[0], title: story[1], body: story[2] } 
}

export const contributeToStory = async (storyBook, storyId, contribution, account) => {
  return await storyBook.contributeToStory(storyId, contribution, { from: account })
}

export const getAccount = async (web3) => {
  console.log(await web3.coinbase())
  return await web3.coinbase();
}

