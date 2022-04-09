import * as acorn from 'acorn'
import type { ParserOptions } from 'types'
import literalPlugin from './plugins/literal'
const syntaxPlugins = {
    'literal': literalPlugin
}

const defaultOptions: ParserOptions = {
    plugins: []
}

function parse(code: string, options: ParserOptions) {
    const resolvedOptions = Object.assign({}, defaultOptions, options)
    const newParser = resolvedOptions.plugins!.reduce((Parser, PluginName) => {
        let plugin = syntaxPlugins[PluginName]
        return plugin ? Parser.extend(plugin) : Parser
    }, acorn.Parser)
    return newParser.parse(code, {
        locations: true,
        ecmaVersion: 'latest'
    })
}

export default parse