#!/usr/bin/env node

import { Tokenize } from "./tokenize"
import { debugTokens } from "./debug"
import { Parse } from "./parse"
import { Context, reserved } from "./context"
import { stdlib } from "./lib"
import { error } from "./error"
import fs = require('fs');

const fileError = `
(print "Failed to read file, make sure it exists and the 
current user has write permissions")
`;

if (process.argv.length > 2) {
    let raw = String(fs.readFileSync(process.argv[2]));
    let tokens = Tokenize(raw);

    let ctx = new Context(stdlib);
    let ast = Parse(tokens);
    ctx.interpret(ast);
} else {
    error('No file specified',
`Usage:
vau [file.vau]`);
}
