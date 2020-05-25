import input from './input/input'
import tokenizer from './tokenizer/tokenizer'
import parser from './parser/parser'

const tokens = tokenizer(input)

const ast = parser(tokens)

console.log(tokens);
console.log(ast)