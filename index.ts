import { Tokenize } from "./tokenize"
import { debugTokens } from "./debug"
import { Parse } from "./parse"
import { Context, reserved } from "./context"
import { stdlib } from "./lib"

let tokens = Tokenize(`

;; Hello World Program
(def name "Pete Mondelo")
(def greet
    (lambda
        (name)
        (print name)))
(greet name)
(print "1st arg:" (nth os.args 0))
`);

let ctx = new Context(stdlib);
let ast = Parse(tokens);
ctx.interpret(ast);