export default class CaseOption {
    public static readonly None = new CaseOption("None", (v) => v);
    public static readonly Upper = new CaseOption("Upper", (v) => v.toUpperCase());
    public static readonly Lower = new CaseOption("Lower", (v) => v.toLowerCase());

    constructor(
        public readonly name: string,
        public readonly apply: (value: string) => string,
    ) {
    }
}
