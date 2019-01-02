import { Tokenize } from "./tokenize"
import { debugTokens } from "./debug"
import { Parse } from "./parse"

let tokens = Tokenize(`

(console.log "foo bar baz")

`);

console.log(Parse(tokens));
