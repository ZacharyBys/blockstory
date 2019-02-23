pragma solidity 0.5.0;

contract StoryBook {
	// Read/write candidate
	struct Story {
		uint id;
		string name;
		string body;
	}

	mapping(uint => Story) public stories;

	uint public storiesCount;

	function addStory (string memory _name) private {
		storiesCount++;
		stories[storiesCount] = Story(storiesCount, _name, "");
	}

	constructor() public {
		addStory("Story 1");
		addStory("Story 2");
	}

}
