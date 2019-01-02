import { Tokenize } from "./tokenize"

let tokens = Tokenize(`
(a "b" 123)
('foo (bar baz) quux)`);

console.log(tokens);