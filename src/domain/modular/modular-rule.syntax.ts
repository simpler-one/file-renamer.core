import SerializedNameElement from "./serialized.name-element";


export default interface ModularRuleSyntax {
    /**
     * Parse
     * @param ruleStr rule string
     * @throws ParseError
     */
    parse(ruleStr: string): SerializedNameElement[]
}
