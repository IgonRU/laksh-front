import { JsonInitializable } from "./json-initializable.class";

export class LakshPerson extends JsonInitializable {
    id: number;
    portrait: string;
    name: string;
    title: string;
    role: string;
    biography: string;

    constructor(data?: any) {
        super(data);
    }
}
