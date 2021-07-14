import ItemInfo from "../../../domain/file-info";
import NameElement from "../../../domain/modular/name-element";


export default class ConstElement implements NameElement {
    public constructor(
        private readonly value: string
    ) {
    }

    public static empty(): ConstElement {
        return new ConstElement("");
    }

    public eval(item: ItemInfo, i: number): string {
        return this.value;
    }
}
