import { JsonInitializable } from "./json-initializable.class";

export class LakshPerson extends JsonInitializable {
    active: boolean;
    alias: string;
    name: string;
    title: string;
    role: string;
    portrait: string;
    biography: string;

    constructor(data?: any) {
        super(data);
    }
}
