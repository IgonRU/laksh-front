import { JsonInitializable } from "../../../_classes/json-initializable.class";
import { LakshProject } from "../../../projects/project-page/_classes/project.class";

export class LakshMainpageSettings extends JsonInitializable {
  title: string;
  lead: string;
  heroImages: string[];
  portfolio: LakshProject[];

  constructor(data?: Partial<LakshMainpageSettings>) {
    // Настраиваем маппинги для вложенных классов
    const nestedClassMappings = {
      'portfolio': {
        class: LakshProject
      }
    };
    super(data, undefined, nestedClassMappings);
    // Безопасный дефолт на случай отсутствия heroImages в ответе
    if (!Array.isArray(this.heroImages)) {
      this.heroImages = [];
    }
  }
}