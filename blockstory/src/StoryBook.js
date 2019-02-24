export default {
  "contractName": "StoryBook",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "contributors",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x1f6d4942"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "storiesCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x407f0565"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "stories",
      "outputs": [
        {
          "name": "id",
          "type": "uint256"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "body",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x8a3b6ab8"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_storyId",
          "type": "uint256"
        }
      ],
      "name": "contributeEvent",
      "type": "event",
      "signature": "0x5952340dc47c9d2d8df2a12c2018e2e85b55a1c8530b154c2ab2afe3d7ef48e0"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_storyId",
          "type": "uint256"
        },
        {
          "name": "_text",
          "type": "string"
        }
      ],
      "name": "contributeToStory",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x045ab43c"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5061005e6040805190810160405280600781526020017f53746f72792031000000000000000000000000000000000000000000000000008152506100b0640100000000026401000000009004565b6100ab6040805190810160405280600781526020017f53746f72792032000000000000000000000000000000000000000000000000008152506100b0640100000000026401000000009004565b6101f3565b60026000815480929190600101919050555060606040519081016040528060025481526020018281526020016020604051908101604052806000815250815250600080600254815260200190815260200160002060008201518160000155602082015181600101908051906020019061012a92919061014e565b50604082015181600201908051906020019061014792919061014e565b5090505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018f57805160ff19168380011785556101bd565b828001600101855582156101bd579182015b828111156101bc5782518255916020019190600101906101a1565b5b5090506101ca91906101ce565b5090565b6101f091905b808211156101ec5760008160009055506001016101d4565b5090565b90565b61088f806102026000396000f3fe608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063045ab43c146100675780631f6d494214610139578063407f05651461019e5780638a3b6ab8146101c9575b600080fd5b34801561007357600080fd5b506101376004803603604081101561008a57600080fd5b8101908080359060200190929190803590602001906401000000008111156100b157600080fd5b8201836020820111156100c357600080fd5b803590602001918460018302840111640100000000831117156100e557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102f0565b005b34801561014557600080fd5b506101886004803603602081101561015c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610473565b6040518082815260200191505060405180910390f35b3480156101aa57600080fd5b506101b361048b565b6040518082815260200191505060405180910390f35b3480156101d557600080fd5b50610202600480360360208110156101ec57600080fd5b8101908080359060200190929190505050610491565b604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561024c578082015181840152602081019050610231565b50505050905090810190601f1680156102795780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102b2578082015181840152602081019050610297565b50505050905090810190601f1680156102df5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60008211801561030257506002548211155b151561030d57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060606104156000808581526020019081526020016000206002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561040a5780601f106103df5761010080835404028352916020019161040a565b820191906000526020600020905b8154815290600101906020018083116103ed57829003601f168201915b5050505050836105eb565b90508060008085815260200190815260200160002060020190805190602001906104409291906107be565b50827f5952340dc47c9d2d8df2a12c2018e2e85b55a1c8530b154c2ab2afe3d7ef48e060405160405180910390a2505050565b60016020528060005260406000206000915090505481565b60025481565b6000602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105435780601f1061051857610100808354040283529160200191610543565b820191906000526020600020905b81548152906001019060200180831161052657829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905083565b6060808390506060839050606081518351016040519080825280601f01601f19166020018201604052801561062f5781602001600182028038833980820191505090505b5090506060819050600080905060008090505b85518110156106f557858181518110151561065957fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156106b857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610642565b5060008090505b84518110156107af57848181518110151561071357fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561077257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506106fc565b50819550505050505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107ff57805160ff191683800117855561082d565b8280016001018555821561082d579182015b8281111561082c578251825591602001919060010190610811565b5b50905061083a919061083e565b5090565b61086091905b8082111561085c576000816000905550600101610844565b5090565b9056fea165627a7a7230582055d1d96f0e73ea08cc0d7017f70b41beaf5ae0189ec6b467633526f41694f2c00029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063045ab43c146100675780631f6d494214610139578063407f05651461019e5780638a3b6ab8146101c9575b600080fd5b34801561007357600080fd5b506101376004803603604081101561008a57600080fd5b8101908080359060200190929190803590602001906401000000008111156100b157600080fd5b8201836020820111156100c357600080fd5b803590602001918460018302840111640100000000831117156100e557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506102f0565b005b34801561014557600080fd5b506101886004803603602081101561015c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610473565b6040518082815260200191505060405180910390f35b3480156101aa57600080fd5b506101b361048b565b6040518082815260200191505060405180910390f35b3480156101d557600080fd5b50610202600480360360208110156101ec57600080fd5b8101908080359060200190929190505050610491565b604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561024c578082015181840152602081019050610231565b50505050905090810190601f1680156102795780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156102b2578082015181840152602081019050610297565b50505050905090810190601f1680156102df5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60008211801561030257506002548211155b151561030d57600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060606104156000808581526020019081526020016000206002018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561040a5780601f106103df5761010080835404028352916020019161040a565b820191906000526020600020905b8154815290600101906020018083116103ed57829003601f168201915b5050505050836105eb565b90508060008085815260200190815260200160002060020190805190602001906104409291906107be565b50827f5952340dc47c9d2d8df2a12c2018e2e85b55a1c8530b154c2ab2afe3d7ef48e060405160405180910390a2505050565b60016020528060005260406000206000915090505481565b60025481565b6000602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105435780601f1061051857610100808354040283529160200191610543565b820191906000526020600020905b81548152906001019060200180831161052657829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105e15780601f106105b6576101008083540402835291602001916105e1565b820191906000526020600020905b8154815290600101906020018083116105c457829003601f168201915b5050505050905083565b6060808390506060839050606081518351016040519080825280601f01601f19166020018201604052801561062f5781602001600182028038833980820191505090505b5090506060819050600080905060008090505b85518110156106f557858181518110151561065957fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f01000000000000000000000000000000000000000000000000000000000000000283838060010194508151811015156106b857fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610642565b5060008090505b84518110156107af57848181518110151561071357fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f010000000000000000000000000000000000000000000000000000000000000002838380600101945081518110151561077257fe5b9060200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535080806001019150506106fc565b50819550505050505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106107ff57805160ff191683800117855561082d565b8280016001018555821561082d579182015b8281111561082c578251825591602001919060010190610811565b5b50905061083a919061083e565b5090565b61086091905b8082111561085c576000816000905550600101610844565b5090565b9056fea165627a7a7230582055d1d96f0e73ea08cc0d7017f70b41beaf5ae0189ec6b467633526f41694f2c00029",
  "sourceMap": "24:1208:1:-;;;434:71;8:9:-1;5:2;;;30:1;27;20:12;5:2;434:71:1;459:19;;;;;;;;;;;;;;;;;;;:8;;;:19;;;:::i;:::-;482;;;;;;;;;;;;;;;;;;;:8;;;:19;;;:::i;:::-;24:1208;;303:128;355:12;;:14;;;;;;;;;;;;;397:30;;;;;;;;;403:12;;397:30;;;;417:5;397:30;;;;;;;;;;;;;;;;;;;;373:7;:21;381:12;;373:21;;;;;;;;;;;:54;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;303:128;:::o;24:1208::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "24:1208:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;508:303;;8:9:-1;5:2;;;30:1;27;20:12;5:2;508:303:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;508:303:1;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;508:303:1;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;508:303:1;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;508:303:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;508:303:1;;;;;;;;;;;;;;;;;;173:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;173:44:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;173:44:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;221:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;221:24:1;;;;;;;;;;;;;;;;;;;;;;;132:37;;8:9:-1;5:2;;;30:1;27;20:12;5:2;132:37:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;132:37:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;132:37:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;132:37:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;508:303;601:1;590:8;:12;:40;;;;;618:12;;606:8;:24;;590:40;582:49;;;;;;;;636:12;:24;649:10;636:24;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;668:23;694:40;704:7;:17;712:8;704:17;;;;;;;;;;;:22;;694:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;728:5;694:9;:40::i;:::-;668:66;;763:9;738:7;:17;746:8;738:17;;;;;;;;;;;:22;;:34;;;;;;;;;;;;:::i;:::-;;798:8;782:25;;;;;;;;;;508:303;;;:::o;173:44::-;;;;;;;;;;;;;;;;;:::o;221:24::-;;;;:::o;132:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;814:416::-;886:13;904:16;929:2;904:28;;936:16;961:2;936:28;;968:19;1014:3;:10;1001:3;:10;:23;990:35;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;990:35:1;;;;968:57;;1029:19;1057:5;1029:34;;1067:6;1076:1;1067:10;;1086:6;1095:1;1086:10;;1081:58;1102:3;:10;1098:1;:14;1081:58;;;1133:3;1137:1;1133:6;;;;;;;;;;;;;;;;;;;;1119;1126:3;;;;;;1119:11;;;;;;;;;;;;;;:20;;;;;;;;;;;1114:3;;;;;;;1081:58;;;;1148:6;1157:1;1148:10;;1143:58;1164:3;:10;1160:1;:14;1143:58;;;1195:3;1199:1;1195:6;;;;;;;;;;;;;;;;;;;;1181;1188:3;;;;;;1181:11;;;;;;;;;;;;;;:20;;;;;;;;;;;1176:3;;;;;;;1143:58;;;;1219:6;1205:21;;;;;;;814:416;;;;:::o;24:1208::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.5.0;\n\ncontract StoryBook {\n\t// Read/write candidate\n\tstruct Story {\n\t\tuint id;\n\t\tstring name;\n\t\tstring body;\n\t}\n\n\tmapping(uint => Story) public stories;\n\n\tmapping(address => uint) public contributors;\n\n\tuint public storiesCount;\n\n\tevent contributeEvent (\n\t\tuint indexed _storyId\n\t);\n\n\tfunction addStory (string memory _name) private {\n\t\tstoriesCount++;\n\t\tstories[storiesCount] = Story(storiesCount, _name, \"\");\n\t}\n\n\tconstructor() public {\n\t\taddStory(\"Story 1\");\n\t\taddStory(\"Story 2\");\n\t}\n\n\tfunction contributeToStory(uint _storyId, string memory _text) public {\n\t\trequire(_storyId > 0 && _storyId <= storiesCount);\n\n\t\tcontributors[msg.sender] ++;\n\n\t\tstring memory newString = strConcat(stories[_storyId].body, _text);\n\t\tstories[_storyId].body = newString;\n\n\t\temit contributeEvent(_storyId);\n\t}\n\n\tfunction strConcat(string memory _a, string memory _b) private returns (string memory){\n\t\tbytes memory _ba = bytes(_a);\n\t\tbytes memory _bb = bytes(_b);\n\t\tstring memory abcde = new string(_ba.length + _bb.length);\n\t\tbytes memory babcde = bytes(abcde);\n\t\tuint k = 0;\n\t\tfor (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];\n\t\tfor (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];\n\t\treturn string(babcde);\n\t}\n}\n",
  "sourcePath": "C:/Users/tehblasian/Documents/coding/hackathon/hackcuv/contracts/StoryBook.sol",
  "ast": {
    "absolutePath": "/C/Users/tehblasian/Documents/coding/hackathon/hackcuv/contracts/StoryBook.sol",
    "exportedSymbols": {
      "StoryBook": [
        245
      ]
    },
    "id": 246,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 245,
        "linearizedBaseContracts": [
          245
        ],
        "name": "StoryBook",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "StoryBook.Story",
            "id": 65,
            "members": [
              {
                "constant": false,
                "id": 60,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 65,
                "src": "88:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 59,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "88:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 65,
                "src": "99:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 61,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "99:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64,
                "name": "body",
                "nodeType": "VariableDeclaration",
                "scope": 65,
                "src": "114:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 63,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "114:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Story",
            "nodeType": "StructDefinition",
            "scope": 245,
            "src": "71:58:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 69,
            "name": "stories",
            "nodeType": "VariableDeclaration",
            "scope": 245,
            "src": "132:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
              "typeString": "mapping(uint256 => struct StoryBook.Story)"
            },
            "typeName": {
              "id": 68,
              "keyType": {
                "id": 66,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "140:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "132:22:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                "typeString": "mapping(uint256 => struct StoryBook.Story)"
              },
              "valueType": {
                "contractScope": null,
                "id": 67,
                "name": "Story",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 65,
                "src": "148:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Story_$65_storage_ptr",
                  "typeString": "struct StoryBook.Story"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 73,
            "name": "contributors",
            "nodeType": "VariableDeclaration",
            "scope": 245,
            "src": "173:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 72,
              "keyType": {
                "id": 70,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "181:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "173:24:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 71,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "192:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 75,
            "name": "storiesCount",
            "nodeType": "VariableDeclaration",
            "scope": 245,
            "src": "221:24:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 74,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "221:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 79,
            "name": "contributeEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "indexed": true,
                  "name": "_storyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "275:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "271:28:1"
            },
            "src": "249:51:1"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "351:80:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "355:14:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "storiesCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "355:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 86,
                  "nodeType": "ExpressionStatement",
                  "src": "355:14:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "stories",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "373:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                          "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                        }
                      },
                      "id": 89,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "storiesCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "381:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "373:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Story_$65_storage",
                        "typeString": "struct StoryBook.Story storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "storiesCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 75,
                          "src": "403:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 92,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 81,
                          "src": "417:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "424:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "id": 90,
                        "name": "Story",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65,
                        "src": "397:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Story_$65_storage_ptr_$",
                          "typeString": "type(struct StoryBook.Story storage pointer)"
                        }
                      },
                      "id": 94,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "397:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Story_$65_memory",
                        "typeString": "struct StoryBook.Story memory"
                      }
                    },
                    "src": "373:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Story_$65_storage",
                      "typeString": "struct StoryBook.Story storage ref"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "373:54:1"
                }
              ]
            },
            "documentation": null,
            "id": 98,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addStory",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 82,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 81,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "322:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "322:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "321:21:1"
            },
            "returnParameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:1"
            },
            "scope": 245,
            "src": "303:128:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 109,
              "nodeType": "Block",
              "src": "455:50:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "53746f72792031",
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "468:9:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a32647959d190604006871fac3f09e201069a61294ee4b502aab70fac7ab53c2",
                          "typeString": "literal_string \"Story 1\""
                        },
                        "value": "Story 1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a32647959d190604006871fac3f09e201069a61294ee4b502aab70fac7ab53c2",
                          "typeString": "literal_string \"Story 1\""
                        }
                      ],
                      "id": 101,
                      "name": "addStory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "459:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "459:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 104,
                  "nodeType": "ExpressionStatement",
                  "src": "459:19:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "53746f72792032",
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "491:9:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_011080c75beb121943cd71280f7d3dc6791609e4165a564e2bd5b3d00d2fbb8f",
                          "typeString": "literal_string \"Story 2\""
                        },
                        "value": "Story 2"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_011080c75beb121943cd71280f7d3dc6791609e4165a564e2bd5b3d00d2fbb8f",
                          "typeString": "literal_string \"Story 2\""
                        }
                      ],
                      "id": 105,
                      "name": "addStory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "482:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "482:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 108,
                  "nodeType": "ExpressionStatement",
                  "src": "482:19:1"
                }
              ]
            },
            "documentation": null,
            "id": 110,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "445:2:1"
            },
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "455:0:1"
            },
            "scope": 245,
            "src": "434:71:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 154,
              "nodeType": "Block",
              "src": "578:233:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 118,
                            "name": "_storyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 112,
                            "src": "590:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "601:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "590:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 121,
                            "name": "_storyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 112,
                            "src": "606:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 122,
                            "name": "storiesCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "618:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "606:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "590:40:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 117,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        263,
                        264
                      ],
                      "referencedDeclaration": 263,
                      "src": "582:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "582:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 126,
                  "nodeType": "ExpressionStatement",
                  "src": "582:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "636:27:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "contributors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 73,
                        "src": "636:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 130,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 128,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "649:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "649:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "636:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 132,
                  "nodeType": "ExpressionStatement",
                  "src": "636:27:1"
                },
                {
                  "assignments": [
                    134
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 134,
                      "name": "newString",
                      "nodeType": "VariableDeclaration",
                      "scope": 154,
                      "src": "668:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 133,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "668:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 142,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 136,
                            "name": "stories",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "704:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                              "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                            }
                          },
                          "id": 138,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 137,
                            "name": "_storyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 112,
                            "src": "712:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "704:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Story_$65_storage",
                            "typeString": "struct StoryBook.Story storage ref"
                          }
                        },
                        "id": 139,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "body",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64,
                        "src": "704:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "_text",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 114,
                        "src": "728:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 135,
                      "name": "strConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 244,
                      "src": "694:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) returns (string memory)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "694:40:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "668:66:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "stories",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "738:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                            "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                          }
                        },
                        "id": 145,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "_storyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 112,
                          "src": "746:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "738:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Story_$65_storage",
                          "typeString": "struct StoryBook.Story storage ref"
                        }
                      },
                      "id": 146,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "body",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64,
                      "src": "738:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 147,
                      "name": "newString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 134,
                      "src": "763:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "738:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 149,
                  "nodeType": "ExpressionStatement",
                  "src": "738:34:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "_storyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "798:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 150,
                      "name": "contributeEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "782:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "782:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 153,
                  "nodeType": "EmitStatement",
                  "src": "777:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 155,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contributeToStory",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 112,
                  "name": "_storyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 155,
                  "src": "535:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 111,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "535:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 114,
                  "name": "_text",
                  "nodeType": "VariableDeclaration",
                  "scope": 155,
                  "src": "550:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 113,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "550:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:36:1"
            },
            "returnParameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "578:0:1"
            },
            "scope": 245,
            "src": "508:303:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 243,
              "nodeType": "Block",
              "src": "900:330:1",
              "statements": [
                {
                  "assignments": [
                    165
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 165,
                      "name": "_ba",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "904:16:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 164,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "904:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 169,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 167,
                        "name": "_a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 157,
                        "src": "929:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "923:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "923:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "904:28:1"
                },
                {
                  "assignments": [
                    171
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 171,
                      "name": "_bb",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "936:16:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 170,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "936:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 175,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 173,
                        "name": "_b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 159,
                        "src": "961:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "955:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "955:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "936:28:1"
                },
                {
                  "assignments": [
                    177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 177,
                      "name": "abcde",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "968:19:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 176,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "968:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 186,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 180,
                            "name": "_ba",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 165,
                            "src": "1001:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1001:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 182,
                            "name": "_bb",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1014:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 183,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1014:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1001:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "990:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_string_memory_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      },
                      "typeName": {
                        "id": 178,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "994:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      }
                    },
                    "id": 185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "990:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "968:57:1"
                },
                {
                  "assignments": [
                    188
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 188,
                      "name": "babcde",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "1029:19:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 187,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1029:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 192,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "abcde",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 177,
                        "src": "1057:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1051:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1051:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1029:34:1"
                },
                {
                  "assignments": [
                    194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 194,
                      "name": "k",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "1067:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 193,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1067:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 196,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1076:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1067:10:1"
                },
                {
                  "body": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 208,
                          "name": "babcde",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 188,
                          "src": "1119:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 211,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1126:3:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 209,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "1126:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1119:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 212,
                          "name": "_ba",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 165,
                          "src": "1133:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 214,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 213,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 198,
                          "src": "1137:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1133:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "src": "1119:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "id": 216,
                    "nodeType": "ExpressionStatement",
                    "src": "1119:20:1"
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 201,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "1098:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 202,
                        "name": "_ba",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "1102:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1102:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1098:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 217,
                  "initializationExpression": {
                    "assignments": [
                      198
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 198,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 217,
                        "src": "1086:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 197,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1086:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 200,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1095:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1086:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1114:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 205,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 198,
                        "src": "1114:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 207,
                    "nodeType": "ExpressionStatement",
                    "src": "1114:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1081:58:1"
                },
                {
                  "body": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 229,
                          "name": "babcde",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 188,
                          "src": "1181:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 232,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1188:3:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "1188:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1181:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 233,
                          "name": "_bb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 171,
                          "src": "1195:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 235,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 219,
                          "src": "1199:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1195:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "src": "1181:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "id": 237,
                    "nodeType": "ExpressionStatement",
                    "src": "1181:20:1"
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 219,
                      "src": "1160:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "_bb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "1164:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1164:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1160:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 238,
                  "initializationExpression": {
                    "assignments": [
                      219
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 219,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 238,
                        "src": "1148:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 218,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1148:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 221,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1157:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1148:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1176:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "1176:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 228,
                    "nodeType": "ExpressionStatement",
                    "src": "1176:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1143:58:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 240,
                        "name": "babcde",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "1219:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1212:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": "string"
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1212:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 163,
                  "id": 242,
                  "nodeType": "Return",
                  "src": "1205:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 244,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "strConcat",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 157,
                  "name": "_a",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "833:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "833:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 159,
                  "name": "_b",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "851:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 158,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "832:36:1"
            },
            "returnParameters": {
              "id": 163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 162,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "886:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 161,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "886:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "885:15:1"
            },
            "scope": 245,
            "src": "814:416:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 246,
        "src": "24:1208:1"
      }
    ],
    "src": "0:1233:1"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/tehblasian/Documents/coding/hackathon/hackcuv/contracts/StoryBook.sol",
    "exportedSymbols": {
      "StoryBook": [
        245
      ]
    },
    "id": 246,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 58,
        "literals": [
          "solidity",
          "0.5",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:22:1"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 245,
        "linearizedBaseContracts": [
          245
        ],
        "name": "StoryBook",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "StoryBook.Story",
            "id": 65,
            "members": [
              {
                "constant": false,
                "id": 60,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "scope": 65,
                "src": "88:7:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 59,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "88:4:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 62,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "scope": 65,
                "src": "99:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 61,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "99:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 64,
                "name": "body",
                "nodeType": "VariableDeclaration",
                "scope": 65,
                "src": "114:11:1",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 63,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "114:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Story",
            "nodeType": "StructDefinition",
            "scope": 245,
            "src": "71:58:1",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 69,
            "name": "stories",
            "nodeType": "VariableDeclaration",
            "scope": 245,
            "src": "132:37:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
              "typeString": "mapping(uint256 => struct StoryBook.Story)"
            },
            "typeName": {
              "id": 68,
              "keyType": {
                "id": 66,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "140:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "132:22:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                "typeString": "mapping(uint256 => struct StoryBook.Story)"
              },
              "valueType": {
                "contractScope": null,
                "id": 67,
                "name": "Story",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 65,
                "src": "148:5:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Story_$65_storage_ptr",
                  "typeString": "struct StoryBook.Story"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 73,
            "name": "contributors",
            "nodeType": "VariableDeclaration",
            "scope": 245,
            "src": "173:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 72,
              "keyType": {
                "id": 70,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "181:7:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "173:24:1",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 71,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "192:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 75,
            "name": "storiesCount",
            "nodeType": "VariableDeclaration",
            "scope": 245,
            "src": "221:24:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 74,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "221:4:1",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 79,
            "name": "contributeEvent",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 78,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 77,
                  "indexed": true,
                  "name": "_storyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 79,
                  "src": "275:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 76,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "275:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "271:28:1"
            },
            "src": "249:51:1"
          },
          {
            "body": {
              "id": 97,
              "nodeType": "Block",
              "src": "351:80:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "355:14:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "storiesCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 75,
                      "src": "355:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 86,
                  "nodeType": "ExpressionStatement",
                  "src": "355:14:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 87,
                        "name": "stories",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 69,
                        "src": "373:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                          "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                        }
                      },
                      "id": 89,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "storiesCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 75,
                        "src": "381:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "373:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Story_$65_storage",
                        "typeString": "struct StoryBook.Story storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 91,
                          "name": "storiesCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 75,
                          "src": "403:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 92,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 81,
                          "src": "417:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 93,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "424:2:1",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "id": 90,
                        "name": "Story",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 65,
                        "src": "397:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Story_$65_storage_ptr_$",
                          "typeString": "type(struct StoryBook.Story storage pointer)"
                        }
                      },
                      "id": 94,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "397:30:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Story_$65_memory",
                        "typeString": "struct StoryBook.Story memory"
                      }
                    },
                    "src": "373:54:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Story_$65_storage",
                      "typeString": "struct StoryBook.Story storage ref"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "373:54:1"
                }
              ]
            },
            "documentation": null,
            "id": 98,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addStory",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 82,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 81,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 98,
                  "src": "322:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 80,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "322:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "321:21:1"
            },
            "returnParameters": {
              "id": 83,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "351:0:1"
            },
            "scope": 245,
            "src": "303:128:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 109,
              "nodeType": "Block",
              "src": "455:50:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "53746f72792031",
                        "id": 102,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "468:9:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a32647959d190604006871fac3f09e201069a61294ee4b502aab70fac7ab53c2",
                          "typeString": "literal_string \"Story 1\""
                        },
                        "value": "Story 1"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_a32647959d190604006871fac3f09e201069a61294ee4b502aab70fac7ab53c2",
                          "typeString": "literal_string \"Story 1\""
                        }
                      ],
                      "id": 101,
                      "name": "addStory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "459:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "459:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 104,
                  "nodeType": "ExpressionStatement",
                  "src": "459:19:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "53746f72792032",
                        "id": 106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "491:9:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_011080c75beb121943cd71280f7d3dc6791609e4165a564e2bd5b3d00d2fbb8f",
                          "typeString": "literal_string \"Story 2\""
                        },
                        "value": "Story 2"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_011080c75beb121943cd71280f7d3dc6791609e4165a564e2bd5b3d00d2fbb8f",
                          "typeString": "literal_string \"Story 2\""
                        }
                      ],
                      "id": 105,
                      "name": "addStory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 98,
                      "src": "482:8:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (string memory)"
                      }
                    },
                    "id": 107,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "482:19:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 108,
                  "nodeType": "ExpressionStatement",
                  "src": "482:19:1"
                }
              ]
            },
            "documentation": null,
            "id": 110,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 99,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "445:2:1"
            },
            "returnParameters": {
              "id": 100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "455:0:1"
            },
            "scope": 245,
            "src": "434:71:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 154,
              "nodeType": "Block",
              "src": "578:233:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 118,
                            "name": "_storyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 112,
                            "src": "590:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 119,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "601:1:1",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "590:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 121,
                            "name": "_storyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 112,
                            "src": "606:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 122,
                            "name": "storiesCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 75,
                            "src": "618:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "606:24:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "590:40:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 117,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        263,
                        264
                      ],
                      "referencedDeclaration": 263,
                      "src": "582:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 125,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "582:49:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 126,
                  "nodeType": "ExpressionStatement",
                  "src": "582:49:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "636:27:1",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 127,
                        "name": "contributors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 73,
                        "src": "636:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 130,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 128,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 260,
                          "src": "649:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 129,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "649:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "636:24:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 132,
                  "nodeType": "ExpressionStatement",
                  "src": "636:27:1"
                },
                {
                  "assignments": [
                    134
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 134,
                      "name": "newString",
                      "nodeType": "VariableDeclaration",
                      "scope": 154,
                      "src": "668:23:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 133,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "668:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 142,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 136,
                            "name": "stories",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 69,
                            "src": "704:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                              "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                            }
                          },
                          "id": 138,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 137,
                            "name": "_storyId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 112,
                            "src": "712:8:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "704:17:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Story_$65_storage",
                            "typeString": "struct StoryBook.Story storage ref"
                          }
                        },
                        "id": 139,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "body",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 64,
                        "src": "704:22:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 140,
                        "name": "_text",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 114,
                        "src": "728:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 135,
                      "name": "strConcat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 244,
                      "src": "694:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (string memory,string memory) returns (string memory)"
                      }
                    },
                    "id": 141,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "694:40:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "668:66:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 143,
                          "name": "stories",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "738:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                            "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                          }
                        },
                        "id": 145,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 144,
                          "name": "_storyId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 112,
                          "src": "746:8:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "738:17:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Story_$65_storage",
                          "typeString": "struct StoryBook.Story storage ref"
                        }
                      },
                      "id": 146,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "body",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 64,
                      "src": "738:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 147,
                      "name": "newString",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 134,
                      "src": "763:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "738:34:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 149,
                  "nodeType": "ExpressionStatement",
                  "src": "738:34:1"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 151,
                        "name": "_storyId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "798:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 150,
                      "name": "contributeEvent",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "782:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "782:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 153,
                  "nodeType": "EmitStatement",
                  "src": "777:30:1"
                }
              ]
            },
            "documentation": null,
            "id": 155,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "contributeToStory",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 112,
                  "name": "_storyId",
                  "nodeType": "VariableDeclaration",
                  "scope": 155,
                  "src": "535:13:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 111,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "535:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 114,
                  "name": "_text",
                  "nodeType": "VariableDeclaration",
                  "scope": 155,
                  "src": "550:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 113,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "550:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:36:1"
            },
            "returnParameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "578:0:1"
            },
            "scope": 245,
            "src": "508:303:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 243,
              "nodeType": "Block",
              "src": "900:330:1",
              "statements": [
                {
                  "assignments": [
                    165
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 165,
                      "name": "_ba",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "904:16:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 164,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "904:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 169,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 167,
                        "name": "_a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 157,
                        "src": "929:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "923:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "923:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "904:28:1"
                },
                {
                  "assignments": [
                    171
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 171,
                      "name": "_bb",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "936:16:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 170,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "936:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 175,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 173,
                        "name": "_b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 159,
                        "src": "961:2:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 172,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "955:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "955:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "936:28:1"
                },
                {
                  "assignments": [
                    177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 177,
                      "name": "abcde",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "968:19:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 176,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "968:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 186,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 184,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 180,
                            "name": "_ba",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 165,
                            "src": "1001:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1001:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 182,
                            "name": "_bb",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 171,
                            "src": "1014:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          },
                          "id": 183,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1014:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1001:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "990:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_string_memory_$",
                        "typeString": "function (uint256) pure returns (string memory)"
                      },
                      "typeName": {
                        "id": 178,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "994:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      }
                    },
                    "id": 185,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "990:35:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory",
                      "typeString": "string memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "968:57:1"
                },
                {
                  "assignments": [
                    188
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 188,
                      "name": "babcde",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "1029:19:1",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 187,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "1029:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 192,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 190,
                        "name": "abcde",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 177,
                        "src": "1057:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1051:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                        "typeString": "type(bytes storage pointer)"
                      },
                      "typeName": "bytes"
                    },
                    "id": 191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1051:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1029:34:1"
                },
                {
                  "assignments": [
                    194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 194,
                      "name": "k",
                      "nodeType": "VariableDeclaration",
                      "scope": 243,
                      "src": "1067:6:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 193,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1067:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 196,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 195,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1076:1:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1067:10:1"
                },
                {
                  "body": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 215,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 208,
                          "name": "babcde",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 188,
                          "src": "1119:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 211,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1126:3:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 209,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "1126:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1119:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 212,
                          "name": "_ba",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 165,
                          "src": "1133:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 214,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 213,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 198,
                          "src": "1137:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1133:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "src": "1119:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "id": 216,
                    "nodeType": "ExpressionStatement",
                    "src": "1119:20:1"
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 204,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 201,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 198,
                      "src": "1098:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 202,
                        "name": "_ba",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 165,
                        "src": "1102:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 203,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1102:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1098:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 217,
                  "initializationExpression": {
                    "assignments": [
                      198
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 198,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 217,
                        "src": "1086:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 197,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1086:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 200,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1095:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1086:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1114:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 205,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 198,
                        "src": "1114:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 207,
                    "nodeType": "ExpressionStatement",
                    "src": "1114:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1081:58:1"
                },
                {
                  "body": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 229,
                          "name": "babcde",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 188,
                          "src": "1181:6:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 232,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 231,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "++",
                          "prefix": false,
                          "src": "1188:3:1",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 230,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 194,
                            "src": "1188:1:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1181:11:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 233,
                          "name": "_bb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 171,
                          "src": "1195:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes_memory_ptr",
                            "typeString": "bytes memory"
                          }
                        },
                        "id": 235,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "i",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 219,
                          "src": "1199:1:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1195:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes1",
                          "typeString": "bytes1"
                        }
                      },
                      "src": "1181:20:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes1",
                        "typeString": "bytes1"
                      }
                    },
                    "id": 237,
                    "nodeType": "ExpressionStatement",
                    "src": "1181:20:1"
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 219,
                      "src": "1160:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "_bb",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 171,
                        "src": "1164:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      },
                      "id": 224,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1164:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1160:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 238,
                  "initializationExpression": {
                    "assignments": [
                      219
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 219,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 238,
                        "src": "1148:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 218,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1148:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 221,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 220,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1157:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1148:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 227,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1176:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 226,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 219,
                        "src": "1176:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 228,
                    "nodeType": "ExpressionStatement",
                    "src": "1176:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1143:58:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 240,
                        "name": "babcde",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "1219:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 239,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1212:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                        "typeString": "type(string storage pointer)"
                      },
                      "typeName": "string"
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1212:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 163,
                  "id": 242,
                  "nodeType": "Return",
                  "src": "1205:21:1"
                }
              ]
            },
            "documentation": null,
            "id": 244,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "strConcat",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 160,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 157,
                  "name": "_a",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "833:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 156,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "833:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 159,
                  "name": "_b",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "851:16:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 158,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "832:36:1"
            },
            "returnParameters": {
              "id": 163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 162,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 244,
                  "src": "886:13:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 161,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "886:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "885:15:1"
            },
            "scope": 245,
            "src": "814:416:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 246,
        "src": "24:1208:1"
      }
    ],
    "src": "0:1233:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x5D9cC46689d7E67DD3Ec72d1B186A08Dfb023f5d",
      "transactionHash": "0xbc8fc27e609200dd448ce7c7a2d00a021efc10f86b2574d95f9f975e69318b6d"
    }
  },
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-02-24T00:36:38.605Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}