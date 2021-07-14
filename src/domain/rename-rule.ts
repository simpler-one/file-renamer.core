import ItemInfo from "./file-info";


export default interface RenameRule {
    rename(item: ItemInfo, i: number): string
}
