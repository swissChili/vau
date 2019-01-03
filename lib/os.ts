const libos = {
    args: process.argv[0].indexOf('node') > -1 ? process.argv.slice(2) : process.argv.slice(1)
};

export { libos }