import ItemInfo from "../file-info";
import RenameRule from "../rename-rule";
import ConstElement from "./name-element/const.element";
import FullNameElement from "./name-element/full-name.element";
import NameElement from "./name-element";


export default class ModularRenameRule implements RenameRule {
    private readonly elements: NameElement[];

    constructor(elements: NameElement[]) {
        this.elements = [...elements];
    }

    rename(item: ItemInfo, i: number): string {
        let result = "";
        this.elements.forEach(el => {
            result += el.eval(item, i);
        });

        return result;
    }
}
