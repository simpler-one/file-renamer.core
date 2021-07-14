import DateTime from "./date-time";
import FileProperty from "./file-property";
import { last, reverseAt } from "@simpler-one/node.utils/Array";
import { splitLast } from "@simpler-one/node.utils/String";

const ExtSeparator = ".";

type Getter = (f: ItemInfo) => any;
const KeyMap = new Map<FileProperty, Getter>([
    [FileProperty.None,          (f: ItemInfo) => 0],
    [FileProperty.FullName,      (f: ItemInfo) => f.fullName],
    [FileProperty.ExtensionName, (f: ItemInfo) => f.extensionName],
    [FileProperty.LastUpdate,    (f: ItemInfo) => f.lastUpdate],
    [FileProperty.Size,          (f: ItemInfo) => f.byteSize],
]);

export default class ItemInfo {

    public get fullName(): string {
        return last(this.path);
    }

    public get simpleName(): string {
        return this.splitName[0];
    }

    public get extensionName(): string {
        return this.splitName[1];
    }

    public get splitName(): [string, string] {
        const wholeName = this.fullName;
        if (this.isDir) {
            return [wholeName, ""];
        }

        return splitLast(wholeName, ExtSeparator, "");
    }

    public get parent(): string {
        if (this.path.length === 1) {
            return "";
        }

        return reverseAt(this.path, 1);
    }

    constructor(
        public readonly path: string[],
        public readonly isDir: boolean,
        public readonly lastUpdate: DateTime,
        public readonly byteSize: number,
    ) {
    }

    public static getComparer(key: FileProperty): (file1: ItemInfo, file2: ItemInfo) => number {
        return (file1: ItemInfo, file2: ItemInfo) => ItemInfo.compare(file1, file2, key);
    }

    public static compare(file1: ItemInfo, file2: ItemInfo, key: FileProperty): number {
        const val1 = file1.get(key);
        const val2 = file2.get(key);

        if (val1 < val2) {
            return -1;
        }
        if (val1 > val2) {
            return 1;
        }

        return 0;
    }

    public get(key: FileProperty): any {
        return KeyMap.get(key)(this);
    }
}
