import ItemInfo from "../file-info";

export default interface NameElement {
    eval(item: ItemInfo, i: number): string;
}
