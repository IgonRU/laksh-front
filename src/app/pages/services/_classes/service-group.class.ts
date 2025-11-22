import { LakshService } from "./service.class";
import { JsonInitializable } from "../../../_classes/json-initializable.class";

export class LakshServiceGroup extends JsonInitializable {
    alias: string;
    title: string;
    description: string;
    image?: string | null;

    services: LakshService[];

    constructor(data?: Partial<LakshServiceGroup>) {
        // Настраиваем маппинги для вложенных классов
        const nestedClassMappings = {
            'services': {
                class: LakshService
            }
        };

        super(data, undefined, nestedClassMappings);
    }
}

