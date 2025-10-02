import { JsonInitializable } from "../../../_classes/json-initializable.class";
import { LakshProjectBlock } from "../../../projects/project-page/_classes/project-block.class";

export class LakshArticle extends JsonInitializable {
    id: number;
    image: string;
    title: string;
    titleLead: string;
    slogan: string;
    description: string;
    alias: string;
    template?: string;

    blocks: LakshProjectBlock[];

    constructor(data?: any) {
        // Настраиваем маппинги для вложенных классов
        const nestedClassMappings = {
            'blocks': {
                class: LakshProjectBlock
            }
        };
        super(data, undefined, nestedClassMappings);
    }
}
