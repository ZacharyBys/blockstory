export default {
    "contractName": "StoryBook",
    "abi": [
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
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b5061005e6040805190810160405280600781526020017f53746f72792031000000000000000000000000000000000000000000000000008152506100b0640100000000026401000000009004565b6100ab6040805190810160405280600781526020017f53746f72792032000000000000000000000000000000000000000000000000008152506100b0640100000000026401000000009004565b6101f3565b60016000815480929190600101919050555060606040519081016040528060015481526020018281526020016020604051908101604052806000815250815250600080600154815260200190815260200160002060008201518160000155602082015181600101908051906020019061012a92919061014e565b50604082015181600201908051906020019061014792919061014e565b5090505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061018f57805160ff19168380011785556101bd565b828001600101855582156101bd579182015b828111156101bc5782518255916020019190600101906101a1565b5b5090506101ca91906101ce565b5090565b6101f091905b808211156101ec5760008160009055506001016101d4565b5090565b90565b61032f806102026000396000f3fe60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063407f0565146100515780638a3b6ab81461007c575b600080fd5b34801561005d57600080fd5b506100666101a3565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b506100b56004803603602081101561009f57600080fd5b81019080803590602001909291905050506101a9565b604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156100ff5780820151818401526020810190506100e4565b50505050905090810190601f16801561012c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561016557808201518184015260208101905061014a565b50505050905090810190601f1680156101925780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60015481565b6000602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561025b5780601f106102305761010080835404028352916020019161025b565b820191906000526020600020905b81548152906001019060200180831161023e57829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102f95780601f106102ce576101008083540402835291602001916102f9565b820191906000526020600020905b8154815290600101906020018083116102dc57829003601f168201915b505050505090508356fea165627a7a723058202c121e0b1da7d6e6a3d8d912ff0b6c925c2929f898d24046ecb5fc86a5fd86110029",
    "deployedBytecode": "0x60806040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063407f0565146100515780638a3b6ab81461007c575b600080fd5b34801561005d57600080fd5b506100666101a3565b6040518082815260200191505060405180910390f35b34801561008857600080fd5b506100b56004803603602081101561009f57600080fd5b81019080803590602001909291905050506101a9565b604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156100ff5780820151818401526020810190506100e4565b50505050905090810190601f16801561012c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561016557808201518184015260208101905061014a565b50505050905090810190601f1680156101925780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b60015481565b6000602052806000526040600020600091509050806000015490806001018054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561025b5780601f106102305761010080835404028352916020019161025b565b820191906000526020600020905b81548152906001019060200180831161023e57829003601f168201915b505050505090806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102f95780601f106102ce576101008083540402835291602001916102f9565b820191906000526020600020905b8154815290600101906020018083116102dc57829003601f168201915b505050505090508356fea165627a7a723058202c121e0b1da7d6e6a3d8d912ff0b6c925c2929f898d24046ecb5fc86a5fd86110029",
    "sourceMap": "24:382:1:-;;;332:71;8:9:-1;5:2;;;30:1;27;20:12;5:2;332:71:1;357:19;;;;;;;;;;;;;;;;;;;:8;;;:19;;;:::i;:::-;380;;;;;;;;;;;;;;;;;;;:8;;;:19;;;:::i;:::-;24:382;;201:128;253:12;;:14;;;;;;;;;;;;;295:30;;;;;;;;;301:12;;295:30;;;;315:5;295:30;;;;;;;;;;;;;;;;;;;;271:7;:21;279:12;;271:21;;;;;;;;;;;:54;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;201:128;:::o;24:382::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "24:382:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;173:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;173:24:1;;;;;;;;;;;;;;;;;;;;;;;132:37;;8:9:-1;5:2;;;30:1;27;20:12;5:2;132:37:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;132:37:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;132:37:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;132:37:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;173:24;;;;:::o;132:37::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
    "source": "pragma solidity 0.5.0;\n\ncontract StoryBook {\n\t// Read/write candidate\n\tstruct Story {\n\t\tuint id;\n\t\tstring name;\n\t\tstring body;\n\t}\n\n\tmapping(uint => Story) public stories;\n\n\tuint public storiesCount;\n\n\tfunction addStory (string memory _name) private {\n\t\tstoriesCount++;\n\t\tstories[storiesCount] = Story(storiesCount, _name, \"\");\n\t}\n\n\tconstructor() public {\n\t\taddStory(\"Story 1\");\n\t\taddStory(\"Story 2\");\n\t}\n\n}\n",
    "sourcePath": "C:/Projects/blockstory/contracts/StoryBook.sol",
    "ast": {
      "absolutePath": "/C/Projects/blockstory/contracts/StoryBook.sol",
      "exportedSymbols": {
        "StoryBook": [
          103
        ]
      },
      "id": 104,
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
          "id": 103,
          "linearizedBaseContracts": [
            103
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
              "scope": 103,
              "src": "71:58:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 69,
              "name": "stories",
              "nodeType": "VariableDeclaration",
              "scope": 103,
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
              "id": 71,
              "name": "storiesCount",
              "nodeType": "VariableDeclaration",
              "scope": 103,
              "src": "173:24:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 70,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "173:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 89,
                "nodeType": "Block",
                "src": "249:80:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 77,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "253:14:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 76,
                        "name": "storiesCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "253:12:1",
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
                    "id": 78,
                    "nodeType": "ExpressionStatement",
                    "src": "253:14:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 87,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 79,
                          "name": "stories",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "271:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                            "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                          }
                        },
                        "id": 81,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 80,
                          "name": "storiesCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "279:12:1",
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
                        "src": "271:21:1",
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
                            "id": 83,
                            "name": "storiesCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "301:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "315:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "",
                            "id": 85,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "322:2:1",
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
                          "id": 82,
                          "name": "Story",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "295:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Story_$65_storage_ptr_$",
                            "typeString": "type(struct StoryBook.Story storage pointer)"
                          }
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "295:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Story_$65_memory",
                          "typeString": "struct StoryBook.Story memory"
                        }
                      },
                      "src": "271:54:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Story_$65_storage",
                        "typeString": "struct StoryBook.Story storage ref"
                      }
                    },
                    "id": 88,
                    "nodeType": "ExpressionStatement",
                    "src": "271:54:1"
                  }
                ]
              },
              "documentation": null,
              "id": 90,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "addStory",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 74,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 73,
                    "name": "_name",
                    "nodeType": "VariableDeclaration",
                    "scope": 90,
                    "src": "220:19:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 72,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "220:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "219:21:1"
              },
              "returnParameters": {
                "id": 75,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "249:0:1"
              },
              "scope": 103,
              "src": "201:128:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 101,
                "nodeType": "Block",
                "src": "353:50:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "53746f72792031",
                          "id": 94,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "366:9:1",
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
                        "id": 93,
                        "name": "addStory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "357:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "357:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 96,
                    "nodeType": "ExpressionStatement",
                    "src": "357:19:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "53746f72792032",
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "389:9:1",
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
                        "id": 97,
                        "name": "addStory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "380:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "380:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 100,
                    "nodeType": "ExpressionStatement",
                    "src": "380:19:1"
                  }
                ]
              },
              "documentation": null,
              "id": 102,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 91,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "343:2:1"
              },
              "returnParameters": {
                "id": 92,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "353:0:1"
              },
              "scope": 103,
              "src": "332:71:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 104,
          "src": "24:382:1"
        }
      ],
      "src": "0:407:1"
    },
    "legacyAST": {
      "absolutePath": "/C/Projects/blockstory/contracts/StoryBook.sol",
      "exportedSymbols": {
        "StoryBook": [
          103
        ]
      },
      "id": 104,
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
          "id": 103,
          "linearizedBaseContracts": [
            103
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
              "scope": 103,
              "src": "71:58:1",
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 69,
              "name": "stories",
              "nodeType": "VariableDeclaration",
              "scope": 103,
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
              "id": 71,
              "name": "storiesCount",
              "nodeType": "VariableDeclaration",
              "scope": 103,
              "src": "173:24:1",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 70,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "173:4:1",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": null,
              "visibility": "public"
            },
            {
              "body": {
                "id": 89,
                "nodeType": "Block",
                "src": "249:80:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 77,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "253:14:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 76,
                        "name": "storiesCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 71,
                        "src": "253:12:1",
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
                    "id": 78,
                    "nodeType": "ExpressionStatement",
                    "src": "253:14:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "id": 87,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 79,
                          "name": "stories",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 69,
                          "src": "271:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Story_$65_storage_$",
                            "typeString": "mapping(uint256 => struct StoryBook.Story storage ref)"
                          }
                        },
                        "id": 81,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 80,
                          "name": "storiesCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "279:12:1",
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
                        "src": "271:21:1",
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
                            "id": 83,
                            "name": "storiesCount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 71,
                            "src": "301:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 84,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 73,
                            "src": "315:5:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "",
                            "id": 85,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "322:2:1",
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
                          "id": 82,
                          "name": "Story",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 65,
                          "src": "295:5:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Story_$65_storage_ptr_$",
                            "typeString": "type(struct StoryBook.Story storage pointer)"
                          }
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "295:30:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Story_$65_memory",
                          "typeString": "struct StoryBook.Story memory"
                        }
                      },
                      "src": "271:54:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Story_$65_storage",
                        "typeString": "struct StoryBook.Story storage ref"
                      }
                    },
                    "id": 88,
                    "nodeType": "ExpressionStatement",
                    "src": "271:54:1"
                  }
                ]
              },
              "documentation": null,
              "id": 90,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "addStory",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 74,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 73,
                    "name": "_name",
                    "nodeType": "VariableDeclaration",
                    "scope": 90,
                    "src": "220:19:1",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 72,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "220:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "219:21:1"
              },
              "returnParameters": {
                "id": 75,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "249:0:1"
              },
              "scope": 103,
              "src": "201:128:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "private"
            },
            {
              "body": {
                "id": 101,
                "nodeType": "Block",
                "src": "353:50:1",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "53746f72792031",
                          "id": 94,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "366:9:1",
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
                        "id": 93,
                        "name": "addStory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "357:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 95,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "357:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 96,
                    "nodeType": "ExpressionStatement",
                    "src": "357:19:1"
                  },
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "53746f72792032",
                          "id": 98,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "389:9:1",
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
                        "id": 97,
                        "name": "addStory",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 90,
                        "src": "380:8:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (string memory)"
                        }
                      },
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "380:19:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 100,
                    "nodeType": "ExpressionStatement",
                    "src": "380:19:1"
                  }
                ]
              },
              "documentation": null,
              "id": 102,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [],
              "name": "",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 91,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "343:2:1"
              },
              "returnParameters": {
                "id": 92,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "353:0:1"
              },
              "scope": 103,
              "src": "332:71:1",
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            }
          ],
          "scope": 104,
          "src": "24:382:1"
        }
      ],
      "src": "0:407:1"
    },
    "compiler": {
      "name": "solc",
      "version": "0.5.0+commit.1d4f565a.Emscripten.clang"
    },
    "networks": {
      "5777": {
        "events": {},
        "links": {},
        "address": "0x16b22D5C4c2B568d4aa4Ac9784C54d23d27fc058",
        "transactionHash": "0x1ae0afd73dc1db0e6aa9a14cabc644dab15a69d6d51daa670a2709908d108418"
      }
    },
    "schemaVersion": "3.0.2",
    "updatedAt": "2019-02-23T22:49:28.919Z",
    "devdoc": {
      "methods": {}
    },
    "userdoc": {
      "methods": {}
    }
  }