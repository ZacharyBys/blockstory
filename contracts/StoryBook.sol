pragma solidity 0.5.0;
import "solidity-stringutils/src/strings.sol";

contract StoryBook {
    // Read/write candidate
    struct Story {
        uint id;
        string name;
        string body;
    }

    mapping(uint => Story) public stories;

    mapping(address => uint) public contributors;

    mapping (uint => address) public contributorsMap;
    uint public contributorsCount;

    uint public storiesCount;

    event contributeEvent (
        uint indexed _storyId
    );

    function addStory (string memory _name) private {
        storiesCount++;
        stories[storiesCount] = Story(storiesCount, _name, "");
    }

    function addContributor (address _contributor) private {
        contributorsCount++;
        contributorsMap[contributorsCount] = _contributor;
    }

    constructor() public {
        addStory("Story 1");
        addStory("Story 2");
    }

    function contributeToStory(uint _storyId, string memory _text) public {
        require(
            _storyId > 0 && _storyId <= storiesCount,
            "Invalid Story"
        );

        bool containsProfanity = validateProfanity(_text);
        require(
            containsProfanity == false,
            "New Text Contains Profanity"
        );

        contributors[msg.sender] ++;
        addContributor(msg.sender);

        string memory newString = strConcat(stories[_storyId].body, _text);
        stories[_storyId].body = strConcat(newString, " ");

        emit contributeEvent(_storyId);
    }

    function addNewStory(string memory _name) public {
        bool containsProfanity = validateProfanity(_name);
        require(
            containsProfanity == false,
            "Story Name Contains Profanity"
        );

        require(
            bytes(_name).length > 0,
            "Did Not Provide Story Name"
        );

        addStory(_name);

        emit contributeEvent(storiesCount);
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

    //Profanity Check
    using strings for *;

    function validateProfanity(string memory text) private returns (bool) {
        string[4] memory profanity = ["fuck","shit", "bitch", "badword"];

        bool containsProfanity = false;
        for (uint i = 0; i < profanity.length; i++) {
            strings.slice memory isFound = text.toSlice().copy().rfind(profanity[i].toSlice());
            if (isFound._len > 0) {
                containsProfanity = true;
            }
        }
        return containsProfanity;
    }
}
