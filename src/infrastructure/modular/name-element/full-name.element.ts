import ItemInfo from "../../../domain/file-info";
import NameElement from "../../../domain/modular/name-element";
import CaseOption from "./case-option";


export default class FullNameElement implements NameElement {
    constructor(
        private readonly caseOption: CaseOption = CaseOption.None,
    ) {
    }

    public eval(item: ItemInfo, i: number): string {
        return this.caseOption.apply(item.fullName);
    }
}
