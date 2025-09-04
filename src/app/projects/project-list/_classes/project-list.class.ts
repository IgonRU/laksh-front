import { JsonInitializable } from "../../../_classes/json-initializable.class";
import { LakshProjectListItem } from "./project-list-item.class";

export class LakshProjectList extends JsonInitializable {
    items: LakshProjectListItem[];

    constructor(data?: any) {
        // Настраиваем маппинги для вложенных классов
        const nestedClassMappings = {
            'items': {
                class: LakshProjectListItem
            }
        };

        super(data, undefined, nestedClassMappings);
    }
}