import ItemInfo from "./file-info";
import RenameRule from "./rename-rule";
import FileProperty from "./file-property";


export default abstract class FileService {
    sort(files: ItemInfo[], key: FileProperty, ascending: boolean): ItemInfo[] {
        const sorted = files.sort(ItemInfo.getComparer(key));
        if (!ascending) {
            sorted.reverse();
        }

        return sorted;
    }

    renameAll(files: ItemInfo[], fn: RenameRule): string[] {
        return files.map((f, i) => fn.rename(f, i));
    }
}
