import { JsonInitializable } from "../../../_classes/json-initializable.class";

export class LakshProject extends JsonInitializable {
    id: number;
    title: string;
    image: string;
    description: string;
    url: string;

    constructor(data?: Partial<LakshProject>) {
        super(data);
    }
}