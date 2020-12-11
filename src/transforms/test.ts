import { FileInfo, API, Options } from 'jscodeshift';
import {ASTPath} from "jscodeshift/src/core";

module.exports = (fileInfo: FileInfo, api: API, options: Options) => {
    const j = api.jscodeshift;
    const root = j(fileInfo.source);

    root
        .find(j.CallExpression, {})
        .forEach((path: ASTPath) => {

        });

    return root.toSource();
}

module.exports.parser = 'ts';
