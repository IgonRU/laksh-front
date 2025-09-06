import { JsonInitializable } from "../../../_classes/json-initializable.class";

export class LakshProjectListItem extends JsonInitializable {
    id: number;
    title: string;
    description: string;
    image: string;
    alias: string;

    constructor(data?: any) {
        super(data);
    }
}