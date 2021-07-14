import RenameRule from "./rename-rule";


export default interface RenameRuleParser {
    /**
     * Parse rule.
     * @param ruleStr rule string
     * @throws ParseError
     */
    parse(ruleStr: string): RenameRule
}
