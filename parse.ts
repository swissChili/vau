import { Token, Type } from "./token"

const Parse = (input: Token[], list = []) => {
    let token = input.shift();
    if (token === undefined)
        return list;
    switch (token.type) {
        case Type.OpenParen:
            list.push(Parse(input));
            return Parse(input, list);
        case Type.CloseParen:
            return list;
        default:
            list.push(token)
            return Parse(input, list);
    }
}

export { Parse }
