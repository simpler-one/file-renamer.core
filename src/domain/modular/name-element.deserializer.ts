import NameElement from "./name-element";
import SerializedNameElement from "./serialized.name-element";

export default interface NameElementDeserializer {
    /**
     * Deserialize element.
     * @param serialized
     */
    deserialize(serialized: SerializedNameElement): NameElement
}
