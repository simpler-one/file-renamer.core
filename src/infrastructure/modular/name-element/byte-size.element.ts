import ItemInfo from "../../../domain/file-info";
import NameElement from "../../../domain/modular/name-element";


const B = 1;
const kB = B * 1024;
const MB = kB * 1024;
const GB = MB * 1024;

export default class ByteSizeElement implements NameElement {
    constructor(
        private readonly unit: number,
    ) {
    }

    public static byte(): ByteSizeElement {
        return new ByteSizeElement(B);
    }
    public static kB(): ByteSizeElement {
        return new ByteSizeElement(kB);
    }
    public static MB(): ByteSizeElement {
        return new ByteSizeElement(MB);
    }
    public static GB(): ByteSizeElement {
        return new ByteSizeElement(GB);
    }

    public eval(item: ItemInfo, i: number): string {
        return String(
            Math.round(item.byteSize / this.unit)
        );
    }
}
