import ItemInfo from "../../../domain/file-info";
import { padLeft } from "@simpler-one/node.utils/String";
import NameElement from "../../../domain/modular/name-element";


export default class SerialElement implements NameElement {
    public constructor(
        private readonly length: number = 0,
        private readonly padChar: string = "0",
    ) {
    }

    public eval(item: ItemInfo, i: number): string {
        return padLeft(String(i), this.length, this.padChar);
    }
}
