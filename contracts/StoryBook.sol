pragma solidity 0.5.0;

contract StoryBook {
	// Read/write candidate
	struct Story {
		uint id;
		string name;
		string body;
	}

	mapping(uint => Story) public stories;

	mapping(address => uint) public contributors;

	uint public storiesCount;

	event contributeEvent (
		uint indexed _storyId
	);

	function addStory (string memory _name) private {
		storiesCount++;
		stories[storiesCount] = Story(storiesCount, _name, "");
	}

	constructor() public {
		addStory("Story 1");
		addStory("Story 2");
	}

	function contributeToStory(uint _storyId, string memory _text) public {
		require(_storyId > 0 && _storyId <= storiesCount);

		contributors[msg.sender] ++;

		string memory newString = strConcat(stories[_storyId].body, _text);
		stories[_storyId].body = newString;

		emit contributeEvent(_storyId);
	}

	function strConcat(string memory _a, string memory _b) private returns (string memory){
		bytes memory _ba = bytes(_a);
		bytes memory _bb = bytes(_b);
		string memory abcde = new string(_ba.length + _bb.length);
		bytes memory babcde = bytes(abcde);
		uint k = 0;
		for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
		for (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
		return string(babcde);
	}
}
