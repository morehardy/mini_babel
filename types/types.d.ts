import { Node } from 'acorn'
export interface AstDefinition {
    visitor?: Array<string>
}

export type DefinitionKeys = | 'Program' | 'VariableDeclaration' | 'VariableDeclarator' | 'Identifier' | 'NumericLiteral' | 'FunctionDeclaration' | 'BlockStatement' | 'ReturnStatement' | 'BinaryExpression' | 'ExpressionStatement' | 'CallExpression'

export type AstDefinitionsMap = Map<DefinitionKeys, AstDefinition>

type DefToValidations<Keys extends keyof T, V> = {
    [Key in Keys as `is${Key}`]: V
}

export type Validations = DefToValidations<DefinitionKeys, (node: Node) => boolean>

