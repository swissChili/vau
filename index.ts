import { Tokenize } from "./tokenize"
import { debugTokens } from "./debug"
import { Parse } from "./parse"
import { Context, reserved } from "./context"

let tokens = Tokenize(`

;; Hello World Program
(def name "Pete Mondelo")
(def greet (lambda (name)
    (print "Hello," name)))
(greet name)

`);

let ctx = new Context({});
ctx.interpret(Parse(tokens));
