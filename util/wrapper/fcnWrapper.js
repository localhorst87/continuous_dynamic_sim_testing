const fs = require('fs');

exports.wrapper = (packageUri, functionToRun, argTypes, args) => {
    const moduleToImport = require("../../" + packageUri);

    let functionArguments = [];

    for(let i = 0; i < args.length; i++) {
        if (argTypes[i] == "file")
            functionArguments.push(fs.readFileSync(String(args[i]), "utf-8"));
        else
            functionArguments.push(String(args[i]));
    }    

    return moduleToImport[functionToRun](...functionArguments);
}