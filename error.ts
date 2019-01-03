import * as kuler from "kuler"
import { Color } from "./color"

const err = "\x1B[41m ERR \x1B[0m";

const error = (short, long) => {
    short = new kuler(short, undefined).style(Color.Red);
    console.log(err + short);
    console.log("     " + long);
};

export { error }