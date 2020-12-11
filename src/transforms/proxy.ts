import { FileInfo, API, Options } from 'jscodeshift';
import { ASTPath } from "jscodeshift/src/core";

// jscodeshift -t F:\pyramid-cli-new\src\transforms\proxy.ts F:\pyramid-cli-new\src\transforms\__testfixtures__\proxy.ts

module.exports = (fileInfo: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    root
        .find(j.Property, {
            key: {
                name: 'dev'
            }
        })
        .forEach((path: ASTPath) => {
            console.log('11111111111');
        });

    return root.toSource();
}

module.exports.parser = 'ts';
