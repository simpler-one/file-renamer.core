import ModularRenameRule from "../../domain/modular/modular.rename-rule";
import ConstElement from "./name-element/const.element";
import FullNameElement from "./name-element/full-name.element";
import SerialElement from "./name-element/serial.element";


export default class ModularRuleHelper {
    public static basic(
        prefix: string, suffix: string,
        headSerial: boolean = false, tailSerial: boolean = false
    ): ModularRenameRule {
        const head = headSerial ? [new SerialElement()] : [];
        const tail = tailSerial ? [new SerialElement()] : [];

        return new ModularRenameRule([
            ...head,
            new ConstElement(prefix),
            new FullNameElement(),
            new ConstElement(suffix),
            ...tail,
        ]);
    }
}
