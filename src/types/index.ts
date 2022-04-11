import { AstDefinitionsMap, Validations } from 'types'
const astDefinitionsMap: AstDefinitionsMap = new Map()

astDefinitionsMap.set('Program', {
    visitor: ['body']
})
astDefinitionsMap.set('VariableDeclaration', {
    visitor: ['declarations']
})
astDefinitionsMap.set('FunctionDeclaration', {
    visitor: ['id', 'params', 'body']
})
astDefinitionsMap.set('BlockStatement', {
    visitor: ['body']
});
astDefinitionsMap.set('ReturnStatement', {
    visitor: ['argument']
});
astDefinitionsMap.set('BinaryExpression', {
    visitor: ['left', 'right']
});
astDefinitionsMap.set('ExpressionStatement', {
    visitor: ['expression']
});
astDefinitionsMap.set('CallExpression', {
    visitor: ['callee', 'arguments']
});
astDefinitionsMap.set('Identifier', {});
astDefinitionsMap.set('NumericLiteral', {});

const validations: Validations = {} as Validations

for (let name of astDefinitionsMap.keys()) {
    validations[`is${name}`] = function (node) {
        return node.type === name
    }
}

export default {
    visitorKeys: astDefinitionsMap,
    ...validations
}