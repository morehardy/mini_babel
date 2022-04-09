import acorn from 'acorn'

export interface ParserOptions {
    plugins?: ParserPlugin[]
}

export type ParserPlugin = | 'literal'

declare module 'acorn' {
    class Parser {
        constructor(options: Options, input: string, startPos?: number)
        parse(this: Parser): acorn.Node
        parseLiteral(value: string): acorn.Node
        static parse(this: typeof Parser, input: string, options: Options): Node
        static parseExpressionAt(this: typeof Parser, input: string, pos: number, options: Options): Node
        static tokenizer(this: typeof Parser, input: string, options: Options): {
            getToken(): Token
            [Symbol.iterator](): Iterator<Token>
        }
        static extend(this: typeof Parser, ...plugins: ((BaseParser: typeof Parser) => typeof Parser)[]): typeof Parser
    }
}