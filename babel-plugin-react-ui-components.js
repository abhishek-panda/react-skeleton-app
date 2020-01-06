module.exports = function (babel) {
    const { types: t } = babel;

    return {
        visitor: {
            ImportDeclaration(path) {
                const { node } = path;
                const importPath = node.source.value;
                if(importPath === "@flipkart/react-ui-components"){
                    const newNodes = [];
                    node.specifiers.forEach(specifier => {
                        const importIdentifier = specifier.local.name;
                        const newImportPath = `${importPath}/${importIdentifier}`;
                        const newsourceLiteral = t.stringLiteral(newImportPath);
                        const commonIdentifier = t.identifier(importIdentifier);
                        const newSpecifiers = [t.importDefaultSpecifier(commonIdentifier)];
                        const importNode = t.importDeclaration(newSpecifiers, newsourceLiteral);
                        newNodes.push(importNode);
                    });
                    path.replaceWithMultiple(newNodes);
                }
            }
        }
    };
}