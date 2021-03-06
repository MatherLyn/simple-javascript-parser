# simple-javascript-parser
A simple JavaScript AST generator.

To get Start, run:
```shell
npm install
npm run start
```

Use JSON Formatter plugins to beautify the response json.

## AST means Abstract Syntax Tree. To get an AST, first, we should tokenize the input code.
### Here is the demo input file:
```typescript
// /src/input

const code: string = `
let a = 123.12123, b, c


const f = 0o10

const g = 'hello world'

const h = a
`
```
### Here is the output token array:
```typescript
// /src/tokenizer

[
    {"value":"let","type":"keyword"},
    {"value":"a","type":"identifier"},
    {"value":"=","type":"punctuator"},
    {"value":"123.12123","type":"number"},
    {"value":",","type":"punctuator"},
    {"value":"b","type":"identifier"},
    {"value":",","type":"punctuator"},
    {"value":"c","type":"identifier"},
    {"value":"const","type":"keyword"},
    {"value":"f","type":"identifier"},
    {"value":"=","type":"punctuator"},
    {"value":"0o10","type":"number"},
    {"value":"const","type":"keyword"},
    {"value":"g","type":"identifier"},
    {"value":"=","type":"punctuator"},
    {"value":"'hello world'","type":"string"},
    {"value":"const","type":"keyword"},
    {"value":"h","type":"identifier"},
    {"value":"=","type":"punctuator"},
    {"value":"a","type":"identifier"}
]
```

## Then we should transform the tokens array to an AST based on JavaScript grammar rules.
### Here are some of the rules of the transform.
```typescript
// /src/parser

class VariableDeclaration {
  public type: string = 'VariableDeclaration'
  public declarations: Array<VariableDeclarator> = []
  public kind: string
  constructor (kind: string) {
    this.kind = kind
  }
}

class VariableDeclarator {
  public type: string = 'VariableDeclarator'
  public identifier: Identifier
  public initValue: any
  constructor (name: string, value: any) {
    this.identifier = new Identifier(name)
    this.initValue = value
  }
}
```


## Finally, we generate an AST on our own!
```typescript
// 127.0.0.1:3000

{
  "type":"Program",
  "sourceType":"module",
  "body":[
    {
      "type":"VariableDeclaration",
      "declarations":[
        {
          "type":"VariableDeclarator",
          "identifier":{
            "type":"Identifier",
            "name":"a"
          },
          "initValue":"123.12123"
        },
        {
          "type":"VariableDeclarator",
          "identifier":{
            "type":"Identifier",
            "name":"b"
          },
          "initValue":null
        },
        {
          "type":"VariableDeclarator",
          "identifier":{
            "type":"Identifier",
            "name":"c"
          },
          "initValue":null
        }
      ],
      "kind":"let"
    },
    {
      "type":"VariableDeclaration",
      "declarations":[
        {
          "type":"VariableDeclarator",
          "identifier":{
            "type":"Identifier",
            "name":"f"
          },
          "initValue":"0o10"
        }
      ],
      "kind":"const"
    },
    {
      "type":"VariableDeclaration",
      "declarations":[
        {
          "type":"VariableDeclarator",
          "identifier":{
            "type":"Identifier",
            "name":"g"
          },
          "initValue":"'hello world'"
        }
      ],
      "kind":"const"
    },
    {
      "type":"VariableDeclaration",
      "declarations":[
        {
          "type":"VariableDeclarator",
          "identifier":{
            "type":"Identifier",
            "name":"h"
          },
          "initValue":"a"
        }
      ],
      "kind":"const"
    }
  ],
  "comments":[
  ]
}
```