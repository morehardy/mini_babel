import { Node } from 'acorn'
export interface AstDefinition {
    visitor?: Array<string>
}

export type DefinitionKeys = | 'Program' | 'VariableDeclaration' | 'VariableDeclarator' | 'Identifier' | 'NumericLiteral' | 'FunctionDeclaration' | 'BlockStatement' | 'ReturnStatement' | 'BinaryExpression' | 'ExpressionStatement' | 'CallExpression'

export type AstDefinitionsMap = Map<DefinitionKeys, AstDefinition>

type ValidationKeys = `is${DefinitionKeys}`

interface use<T> {
    [key: T]: () => boolean
}

export type Validations = Record<ValidationKeys, (Node) => boolean>

