import { Token } from "./token"
import * as kuler from "kuler"
import { Color } from "./color"

const debugTokens = (tokens: Token[]) => {
    for (let token of tokens) {
        let first = new kuler(String("          " + token.type).slice(-7));
        console.log(first.style(Color.Cyan) + " :: " + token.value);
    }
};

export { debugTokens }
