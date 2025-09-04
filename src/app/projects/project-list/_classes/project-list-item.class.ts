import { JsonInitializable } from "../../../_classes/json-initializable.class";

export class LakshProjectListItem extends JsonInitializable {
    id: number;
    title: string;
    description: string;
    image: string;
    url: string;

    constructor(data?: any) {
        super(data);
    }
}