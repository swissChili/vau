enum Type {
    String = "STRING",
    Num = "NUM",
    Ident = "IDENT",
    OpenParen = "OPEN",
    CloseParen = "CLOSE"
}

class Token {
    type: Type;
    value: string | number;
    constructor(val, type = Type.Ident) {
        this.type = type;
        this.value = val;
    }
}

export { Token, Type }