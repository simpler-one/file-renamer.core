export default class SerializedNameElement {
    public readonly params: Readonly<string[]>;
    public readonly switchOptions: Readonly<string[]>;

    constructor(
        public readonly name: string,
        params: string[],
        switchOptions: string[],
    ) {
        this.params = Object.freeze([...params]);
        this.switchOptions = Object.freeze([...switchOptions]);
    }
}
