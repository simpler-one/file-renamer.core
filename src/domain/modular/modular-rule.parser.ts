import RenameRule from "../rename-rule";
import RenameRuleParser from "../rename-rule.parser";
import ModularRuleSyntax from "./modular-rule.syntax";
import ModularRenameRule from "./modular.rename-rule";
import NameElementDeserializer from "./name-element.deserializer";


export default class ModularRuleParser implements RenameRuleParser {
    public constructor(
        private readonly syntax: ModularRuleSyntax,
        private readonly deserializer: NameElementDeserializer,
    ) {
    }

    parse(ruleStr: string): RenameRule {
        const serializedElements = this.syntax.parse(ruleStr);
        const elements = serializedElements.map(el => this.deserializer.deserialize(el));

        return new ModularRenameRule(elements);
    }
}
