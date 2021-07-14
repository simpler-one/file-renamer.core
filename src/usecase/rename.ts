import NameElementProvider from "../domain/modular/name-element.deserializer";

export default class Rename {
    public constructor(
        private readonly provider: NameElementProvider,
    ) {
    }
}
