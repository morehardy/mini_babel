import * as acorn from 'acorn'

function literalParser(Parser: typeof acorn.Parser) {
    return class extends Parser {
        parseLiteral(value: string): acorn.Node {
            const node = super.parseLiteral(value)
            switch (typeof node.value) {
                case 'number':
                    node.type = 'NumericLiteral';
                    break;
                case 'string':
                    node.type = 'StringLiteral';
                    break;
            }
            return node;
        }
    }
}

export default literalParser