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

export const addNewStory = async (storyBook, title, account) => {
  console.log(account)
  return await storyBook.addNewStory(title, { from: account })
}

export const getStoryBook = async (web3) => {
  // web3.eth.defaultAccount = web3.accounts[0];
  return await web3.contract(StoryBook.abi).at('0xDDfC357fDD1797fDac072508Ae6ec8239AC25657');
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

export const getContributors = async (storyBook) => {
  let numContributors = await storyBook.contributorsCount();
  numContributors = numContributors[0].words[0]
  let contributors = []
  for (let index = 1; index <= numContributors; index++) {
    const contributorAddress = await storyBook.contributorsMap(index);
    const contributions = await storyBook.contributors(contributorAddress[0]);

    contributors = [...contributors, { address: contributorAddress[0], contributions: contributions[0].words[0]}]
  }

  var ids = []
  var uniqueContributors = []
  let num = 0
  contributors.forEach(function(contributor){
    if (!ids.includes(contributor.address)) {
      ids.push(contributor.address);
      contributor.num = num;
      uniqueContributors.push(contributor);
      num++;
    }
  });

  return await uniqueContributors.sort((c1, c2) => c2.contributions - c1.contributions);
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

