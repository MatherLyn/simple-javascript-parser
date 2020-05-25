/**
 * 
 *  ______
 *  | ___ \
 *  | |_/ /_ _ _ __ ___  ___ _ __ 
 *  |  __/ _` | '__/ __|/ _ \ '__|
 *  | | | (_| | |  \__ \  __/ |
 *  \_|  \__,_|_|  |___/\___|_|
 *
 */


import * as util from '../util/declares'
import * as generators from './expression-generates'

/**
 * The root of the AST.
 */
const Program: util.Program = new util.Program()

/**
 * A pointer to record the root of the AST, where comments should be stored in.
 */
const root: util.Program = Program

/**
 * A pointer to record where the current node should be in.
 */
let pointer: any = Program

function parser (tokens: Array<util.Token>) {
  // current node
  let current: number = 0

  // length of tokens array
  const len: number = tokens.length

  while (current < len) {
    const token: util.Token = tokens[current]
    // 1. keyword
    if (token.type === 'keyword') {
      if (token.value === 'let' || token.value === 'const' || token.value === 'var') {
        generators.generateVariableDeclaration(pointer.body, current, tokens, token.value)
      }
    }

    // 2. number
    if (token.type === 'number') {

    }

    // 3. string
    if (token.type === 'string') {

    }

    // 4. identifier
    if (token.type === 'identifier') {
      
    }
    // 5. punctuator
    if (token.type === 'punctuator') {

    }

    // 6. regexp
    if (token.type === 'regexp') {
      
    }
    // 7. comment-line
    if (token.type === 'comment-line') {

    }

    // 8. comment-block
    if (token.type === 'comment-block') {
      
    }

    current++
  }

  return Program
}

export default parser

