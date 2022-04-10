import type { Options } from 'types'
import parser from '../parser'

function transformSync(code: string, options: Options) {
    const ast = parser.parse(code, options.parserOpts)

}

export default {
    transformSync
}