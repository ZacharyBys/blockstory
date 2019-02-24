import StoryBook from '../StoryBook';

export const getWeb3 = () => new window.Web3(new window.Web3.providers.HttpProvider("http://localhost:7545"));

export const getStoryBook = async (web3) => {
  web3.eth.defaultAccount = web3.eth.accounts[0];
  return await web3.eth.contract(StoryBook.abi).at('0x5D9cC46689d7E67DD3Ec72d1B186A08Dfb023f5d');
}

export const getStories = async (storyBook) => {
  const numStories = storyBook.storiesCount();
  let stories = []
  for (let index = 1; index <= numStories; index++) {
    const story = storyBook.stories(index);
    stories = [...stories, { id: story[0].c[0], title: story[1], body: story[2] }];
  }
  
  return stories;
}

export const getStory = async (storyBook, storyId) => {
  const story = storyBook.stories(storyId);
  console.log(story[0].c[0])
  return { id: story[0].c[0], title: story[1], body: story[2] }
}

export const contributeToStory = async (storyBook, storyId, contribution, account) => {
  return await storyBook.contributeToStory(storyId, contribution, { from: account })
}

