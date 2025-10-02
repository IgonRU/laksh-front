import { JsonInitializable } from "../../../_classes/json-initializable.class";

export class LakshArticleBlockPerson extends JsonInitializable {
    alias: string;
    name: string;
    title: string;
    role: string;
    biography: string;
    portrait: string | null;
    active: boolean;

    constructor(data?: any) {
        super(data);
    }
}

