import { JsonInitializable } from "../../../_classes/json-initializable.class";
import { LakshProjectInfo } from "./project-info.class";

export class LakshProject extends JsonInitializable {
    id: number;
    image: string;
    title: string;
    titleLead: string;
    slogan: string;
    description: string;
    url: string;

    info: LakshProjectInfo;

    constructor(data?: any) {
        // Настраиваем маппинги для вложенных классов
        const nestedClassMappings = {
            'info': {
                class: LakshProjectInfo
            }
        };
        super(data, undefined, nestedClassMappings);
    }
}