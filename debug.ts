import { Token } from "./token"
import * as kuler from "kuler"

const debugTokens = (tokens: Token[]) => {
    for (let token of tokens) {
        let first = kuler(String("          " + token.type).slice(-7));
        console.log(first.style("#73e2cc") + " :: " + token.value);
    }
};

export { debugTokens }
