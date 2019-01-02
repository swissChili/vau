enum Type {
    String = "STRING",
    Num = "NUM",
    Ident = "IDENT",
    OpenParen = "(",
    CloseParen = ")"
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