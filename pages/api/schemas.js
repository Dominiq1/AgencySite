export const MetaswapProfile = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "MetaswapProfile",
    "type": "object",
    "properties": {
      "name": {
        "type": "string",
        "maxLength": 150
      },
      "accountId": {
        "type": "string",
        "maxLength": 15
      },
      "profilePic": {
        "$ref": "#/definitions/imageSources"
      },
      "bio": {
        "type": "string",
        "maxLength": 1000
      },
      "emoji": {
        "type": "string",
        "maxLength": 2
      },
      "background": {
        "$ref": "#/definitions/imageSources"
      },
      "joinDate": {
        "type": "string",
        "format": "date",
        "maxLength": 10
      },
      "websiteUrl": {
        "type": "string",
        "maxLength": 240
      },"twitterUrl": {
        "type": "string",
        "maxLength": 240
      },
      "communicationUrl": {
        "type": "string",
        "maxLength": 240
      },
      "ownedNFTs": {
        "type": "array",
        "items": {
          "type": "object",
          "title" : "NFT",
          "properties":{

            'tokenStreamId' : {
                '$ref': '#/definitions/CeramicStreamId'
            }
          }
        }
      }
    },
    //definitions comma...
    "definitions": {
       "CeramicStreamId":{
            type: 'string',
            pattern: '^ceramic://.+(\\\\?version=.+)?',
            maxLength: 150,
          },
      "IPFSUrl": {
        "type": "string",
        "pattern": "^ipfs://.+",
        "maxLength": 150
      },
      "positiveInteger": {
        "type": "integer",
        "minimum": 1
      },
      "imageMetadata": {
        "type": "object",
        "properties": {
          "src": {
            "$ref": "#/definitions/IPFSUrl"
          },
          "mimeType": {
            "type": "string",
            "maxLength": 50
          },
          "width": {
            "$ref": "#/definitions/positiveInteger"
          },
          "height": {
            "$ref": "#/definitions/positiveInteger"
          },
          "size": {
            "$ref": "#/definitions/positiveInteger"
          }
        },
        "required": ["src", "mimeType", "width", "height"]
      },
      "imageSources": {
        "type": "object",
        "properties": {
          "original": {
            "$ref": "#/definitions/imageMetadata"
          },
          "alternatives": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/imageMetadata"
            }
          }
        },
        "required": ["original"]
      }
    }
  }


const MetaswapNFT = {
    "$schema" : "http://json-schema.org/draft-07/schema#",
    "title" : "MetaswapNFT",
    "type" : "object",
    "properties": {
        "name" : {
            "type": "string",
            "maxLength" : 120
        }, 
        "creator" : {
            "type": "string",
            "maxLength" : 120
        },
        "creatorDID" : {
           "type": "string",
           "maxLength" : 120
        },
       "description" : {
          "type": "string",
          "maxLength" : 120
        },
       "image" : {
         "type": "string",
         "maxLength" : 120
        },
        "type" : {
            "type": "string",
            "maxLength" : 120
        },
        "files": {
            "type": "array",
            "items": {  
                "type": "object",
                "properties" :{
                    
            "uri": "uri to file",
            "type" : "mime type",
            "metadata" : "metadata object - OPTIONAL",
            "metadata_uri": "uri tot metadata - OPTIONAL"

                }
            }
        },
        "format" : {
        "type": "string",
        "maxLength" : 120
        },
       "properties": {
        "type": "object",
        "properties": {
            "any" : "NFT property... (add more)"
        }
      },
       "localization": {
        "type": "array",
        "items": {
          "type": "object",
          "title" : "localizationObj",
          "properties":{
            'localization' : {
                '$local': '#/definitions/local'
            }
          }
        }
      } 
    }
}