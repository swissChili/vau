import { Type, Token } from "./token"
import { error } from "./error"
import { stdlib } from "./lib"

const reserved = {
    lambda: (input, context: Context) => {
        // Can't use `arguments` in arrow function :(
        return function() {
            let args = arguments;
            try {
                let scope = input[1].reduce((acc, x, i) => {
                    acc[x.value] = args[i];
                    return acc;
                });
                return new Context(scope, context).interpret(input[2]);


            } catch (e) {
                error("Syntax error at `lambda`. Failed to reduce 1st argument."
                , `Make sure args are wrapped in (). eg: (lambda (a b c) (print a b c))`)
            }
        }
    },
    print: (input, context: Context) => {
        console.log(input.slice(1).map(x => context.interpret(x)).join(" "));
    },
    def: (input, context: Context) => {
        context.scope[input[1].value] = context.interpret(input[2]);
    }
};

class Context {
    scope: object;
    parent: Context;
    hasParent: boolean;
    constructor(scope: object, parent = undefined) {
        this.scope = scope;
        this.parent = parent;
        this.hasParent = parent !== undefined;
    }

    get(key: string) {
        if (key in this.scope) {
            return this.scope[key];
        } else if (this.hasParent) {
            return this.parent.get(key);
        } else {
            return undefined;
        }
    }

    interpretArray(input) {
        if (input.length > 0 && input[0].value in reserved) {
            return reserved[input[0].value](input, this);
        } else {
            let list = input.map(x => this.interpret(x));
            if (list[0] instanceof Function) {
                return list[0].apply(undefined, list.slice(1));
            } else {
                return list;
            }
        }
    }

    interpret(input: Token[] | Token) {
        if (input instanceof Array) {
            return this.interpretArray(input);
        } else if (input.type === Type.Ident) {
            // This will always be a string but the cast
            // is required to tsc doesn't throw a fit.

            // Split at dots, foo.bar.baz will access [foo][bar][baz]
            // on the actual object
            let ns = String(input.value).split('.');
            let s = ns.shift();
            let current = this.get(s);
            for (let n of ns) {
                current = current[n];
            }
            return current;
        } else {
            return input.value;
        }
    }
}

export { Context, reserved }
