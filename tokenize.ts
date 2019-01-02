import { Token, Type } from "./token"

const Tokenize = (input: string): Token[] => {
    let index = 0;
    let tokens = [];
    while (index < input.length) {
        let slice = input.slice(index);
        let match;
        // Matches a double quoted string
        if (match = /^"([^"]*)"/.exec(slice)) {
            tokens.push(new Token(match[1], Type.String));
            index += match[0].length;
        // Matches an indentifier, can include ' _ or $
        } else if (match = /^[a-zA-Z'_$]+/.exec(slice)) {
            tokens.push(new Token(match[0]));
            index += match[0].length;
        // Matches an integer
        } else if (match = /^\d+/.exec(slice)) {
            tokens.push(new Token(Number(match[0]), Type.Num));
            index += match[0].length;
        // Matches an opening parenthesy
        } else if (/^\(/.exec(slice)) {
            tokens.push(new Token('(', Type.OpenParen));
            index++;
        // Matches a closing parenthesy
        } else if (/^\)/.exec(slice)) {
            tokens.push(new Token(')', Type.CloseParen));
            index++;
        } else if (match = /^\s+/.exec(slice)) {
            index += match[0].length
        }
    }
    return tokens;
};

export { Tokenize }
