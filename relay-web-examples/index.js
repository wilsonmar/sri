//var React = require('react'),
//var  ReactDOM = require('react-dom')
var
    React = require('react'),
    ReactDOM = require('react-dom'),
    createHistory = require('history'),
    //Relay = require('/Users/chandrasekharkode/Desktop/Kode/Programming/scalaprojects/sri/relay-web-examples/node_modules/react-relay/dist/relay.js'),
     //ReactNativeWeb = require('react-native-web'),
     Navigator = require('bh-react-navigator'),
    RelayLocalSchema = require('relay-local-schema');

//window.ReactNativeWeb = ReactNativeWeb;
window.React = React;
window.RelayLocalSchema = RelayLocalSchema;
window.createHistory = createHistory;
window.Navigator = Navigator;
window.ReactDOM = ReactDOM;
//window.Relay = Relay;

//js

var schema2 = {
    "__schema": {
        "queryType": {
            "name": "Query"
        },
        "mutationType": {
            "name": "Mutation"
        },
        "types": [
            {
                "kind": "OBJECT",
                "name": "Query",
                "description": null,
                "fields": [
                    {
                        "name": "factions",
                        "description": null,
                        "args": [
                            {
                                "name": "names",
                                "description": null,
                                "type": {
                                    "kind": "LIST",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "String",
                                        "ofType": null
                                    }
                                },
                                "defaultValue": null
                            }
                        ],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "Faction",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "node",
                        "description": "Fetches an object given its ID",
                        "args": [
                            {
                                "name": "id",
                                "description": "The ID of an object",
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "SCALAR",
                                        "name": "ID",
                                        "ofType": null
                                    }
                                },
                                "defaultValue": null
                            }
                        ],
                        "type": {
                            "kind": "INTERFACE",
                            "name": "Node",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "SCALAR",
                "name": "String",
                "description": null,
                "fields": null,
                "inputFields": null,
                "interfaces": null,
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "Faction",
                "description": "A faction in the Star Wars saga",
                "fields": [
                    {
                        "name": "id",
                        "description": "The ID of an object",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "ID",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "name",
                        "description": "The name of the faction.",
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "ships",
                        "description": "The ships used by the faction.",
                        "args": [
                            {
                                "name": "before",
                                "description": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                },
                                "defaultValue": null
                            },
                            {
                                "name": "after",
                                "description": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "String",
                                    "ofType": null
                                },
                                "defaultValue": null
                            },
                            {
                                "name": "first",
                                "description": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "defaultValue": null
                            },
                            {
                                "name": "last",
                                "description": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Int",
                                    "ofType": null
                                },
                                "defaultValue": null
                            }
                        ],
                        "type": {
                            "kind": "OBJECT",
                            "name": "ShipConnection",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node",
                        "ofType": null
                    }
                ],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "INTERFACE",
                "name": "Node",
                "description": "An object with an ID",
                "fields": [
                    {
                        "name": "id",
                        "description": "The id of the object.",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "ID",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": null,
                "enumValues": null,
                "possibleTypes": [
                    {
                        "kind": "OBJECT",
                        "name": "Ship",
                        "ofType": null
                    },
                    {
                        "kind": "OBJECT",
                        "name": "Faction",
                        "ofType": null
                    }
                ]
            },
            {
                "kind": "OBJECT",
                "name": "Ship",
                "description": "A ship in the Star Wars saga",
                "fields": [
                    {
                        "name": "id",
                        "description": "The ID of an object",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "ID",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "name",
                        "description": "The name of the ship.",
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [
                    {
                        "kind": "INTERFACE",
                        "name": "Node",
                        "ofType": null
                    }
                ],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "SCALAR",
                "name": "ID",
                "description": null,
                "fields": null,
                "inputFields": null,
                "interfaces": null,
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "SCALAR",
                "name": "Int",
                "description": null,
                "fields": null,
                "inputFields": null,
                "interfaces": null,
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "ShipConnection",
                "description": "A connection to a list of items.",
                "fields": [
                    {
                        "name": "pageInfo",
                        "description": "Information to aid in pagination.",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "PageInfo",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "edges",
                        "description": "Information to aid in pagination.",
                        "args": [],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "ShipEdge",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "PageInfo",
                "description": "Information about pagination in a connection.",
                "fields": [
                    {
                        "name": "hasNextPage",
                        "description": "When paginating forwards, are there more items?",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "hasPreviousPage",
                        "description": "When paginating backwards, are there more items?",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "startCursor",
                        "description": "When paginating backwards, the cursor to continue.",
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "endCursor",
                        "description": "When paginating forwards, the cursor to continue.",
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "SCALAR",
                "name": "Boolean",
                "description": null,
                "fields": null,
                "inputFields": null,
                "interfaces": null,
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "ShipEdge",
                "description": "An edge in a connection.",
                "fields": [
                    {
                        "name": "node",
                        "description": "The item at the end of the edge",
                        "args": [],
                        "type": {
                            "kind": "OBJECT",
                            "name": "Ship",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "cursor",
                        "description": "A cursor for use in pagination",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "Mutation",
                "description": null,
                "fields": [
                    {
                        "name": "introduceShip",
                        "description": null,
                        "args": [
                            {
                                "name": "input",
                                "description": null,
                                "type": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "INPUT_OBJECT",
                                        "name": "IntroduceShipInput",
                                        "ofType": null
                                    }
                                },
                                "defaultValue": null
                            }
                        ],
                        "type": {
                            "kind": "OBJECT",
                            "name": "IntroduceShipPayload",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "INPUT_OBJECT",
                "name": "IntroduceShipInput",
                "description": null,
                "fields": null,
                "inputFields": [
                    {
                        "name": "shipName",
                        "description": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "defaultValue": null
                    },
                    {
                        "name": "factionId",
                        "description": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "ID",
                                "ofType": null
                            }
                        },
                        "defaultValue": null
                    },
                    {
                        "name": "clientMutationId",
                        "description": null,
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "defaultValue": null
                    }
                ],
                "interfaces": null,
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "IntroduceShipPayload",
                "description": null,
                "fields": [
                    {
                        "name": "ship",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "OBJECT",
                            "name": "Ship",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "faction",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "OBJECT",
                            "name": "Faction",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "clientMutationId",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "__Schema",
                "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query and mutation operations.",
                "fields": [
                    {
                        "name": "types",
                        "description": "A list of all types supported by this server.",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__Type"
                                    }
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "queryType",
                        "description": "The type that query operations will be rooted at.",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "__Type",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "mutationType",
                        "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
                        "args": [],
                        "type": {
                            "kind": "OBJECT",
                            "name": "__Type",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "directives",
                        "description": "A list of all directives supported by this server.",
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__Directive"
                                    }
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "__Type",
                "description": null,
                "fields": [
                    {
                        "name": "kind",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "ENUM",
                                "name": "__TypeKind",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "name",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "description",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "fields",
                        "description": null,
                        "args": [
                            {
                                "name": "includeDeprecated",
                                "description": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "defaultValue": "false"
                            }
                        ],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__Field",
                                    "ofType": null
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "interfaces",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__Type",
                                    "ofType": null
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "possibleTypes",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__Type",
                                    "ofType": null
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "enumValues",
                        "description": null,
                        "args": [
                            {
                                "name": "includeDeprecated",
                                "description": null,
                                "type": {
                                    "kind": "SCALAR",
                                    "name": "Boolean",
                                    "ofType": null
                                },
                                "defaultValue": "false"
                            }
                        ],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__EnumValue",
                                    "ofType": null
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "inputFields",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "LIST",
                            "name": null,
                            "ofType": {
                                "kind": "NON_NULL",
                                "name": null,
                                "ofType": {
                                    "kind": "OBJECT",
                                    "name": "__InputValue",
                                    "ofType": null
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "ofType",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "OBJECT",
                            "name": "__Type",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "ENUM",
                "name": "__TypeKind",
                "description": "An enum describing what kind of type a given __Type is",
                "fields": null,
                "inputFields": null,
                "interfaces": null,
                "enumValues": [
                    {
                        "name": "SCALAR",
                        "description": "Indicates this type is a scalar.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "OBJECT",
                        "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "INTERFACE",
                        "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "UNION",
                        "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "ENUM",
                        "description": "Indicates this type is an enum. `enumValues` is a valid field.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "INPUT_OBJECT",
                        "description": "Indicates this type is an input object. `inputFields` is a valid field.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "LIST",
                        "description": "Indicates this type is a list. `ofType` is a valid field.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "NON_NULL",
                        "description": "Indicates this type is a non-null. `ofType` is a valid field.",
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "__Field",
                "description": null,
                "fields": [
                    {
                        "name": "name",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "description",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "args",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__InputValue"
                                    }
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "type",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "__Type",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "isDeprecated",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "deprecationReason",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "__InputValue",
                "description": null,
                "fields": [
                    {
                        "name": "name",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "description",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "type",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "OBJECT",
                                "name": "__Type",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "defaultValue",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "__EnumValue",
                "description": null,
                "fields": [
                    {
                        "name": "name",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "description",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "isDeprecated",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "deprecationReason",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            },
            {
                "kind": "OBJECT",
                "name": "__Directive",
                "description": null,
                "fields": [
                    {
                        "name": "name",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "String",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "description",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "SCALAR",
                            "name": "String",
                            "ofType": null
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "args",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "LIST",
                                "name": null,
                                "ofType": {
                                    "kind": "NON_NULL",
                                    "name": null,
                                    "ofType": {
                                        "kind": "OBJECT",
                                        "name": "__InputValue"
                                    }
                                }
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "onOperation",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "onFragment",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    },
                    {
                        "name": "onField",
                        "description": null,
                        "args": [],
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "isDeprecated": false,
                        "deprecationReason": null
                    }
                ],
                "inputFields": null,
                "interfaces": [],
                "enumValues": null,
                "possibleTypes": null
            }
        ],
        "directives": [
            {
                "name": "include",
                "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
                "args": [
                    {
                        "name": "if",
                        "description": "Included when true.",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "defaultValue": null
                    }
                ],
                "onOperation": false,
                "onFragment": true,
                "onField": true
            },
            {
                "name": "skip",
                "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
                "args": [
                    {
                        "name": "if",
                        "description": "Skipped when true.",
                        "type": {
                            "kind": "NON_NULL",
                            "name": null,
                            "ofType": {
                                "kind": "SCALAR",
                                "name": "Boolean",
                                "ofType": null
                            }
                        },
                        "defaultValue": null
                    }
                ],
                "onOperation": false,
                "onFragment": true,
                "onField": true
            }
        ]
    }
}

window.schema2 = schema2;

//css




