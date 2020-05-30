import express = require('express');
import input from './input/input';
import tokenizer from './tokenizer/tokenizer';
import parser from './parser/parser';

const app: express.Application = express();

app.get('/', (req, res) => {
    const tokens = tokenizer(input);
    const ast = parser(tokens);
    const result = {
        tokens,
        ast
    }
    res.send(result);
});

app.listen(3000, () => {
    console.log('HTTP server listening on port 3000...');
});