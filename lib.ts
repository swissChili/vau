import { libos } from "./lib/os"
import { Context } from "./context"


const stdlib = {
    os: libos,
    nth: (thing, i) => {
        return thing[i];
    }
};

export { stdlib }
