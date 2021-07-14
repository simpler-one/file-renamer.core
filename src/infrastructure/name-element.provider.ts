import DeserializeError from "../domain/modular/deserialize-error";
import NameElement from "../domain/modular/name-element";
import NameElementDeserializer from "../domain/modular/name-element.deserializer";
import serializedNameElement from "../domain/modular/serialized.name-element";


export default class NameElementDeserializerStore implements NameElementDeserializer {
    public constructor(
        private readonly store: Map<string, NameElementDeserializer>,
    ) {
    }

    deserialize(serialized: serializedNameElement): NameElement {
        const deserializer = this.store.get(serialized.name);
        if (deserializer === undefined) {
            throw new DeserializeError(`Unknown element name: ${serialized.name}`);
        }

        return deserializer.deserialize(serialized);
    }
}
