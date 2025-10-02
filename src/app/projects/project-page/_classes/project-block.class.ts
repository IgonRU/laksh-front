import { JsonInitializable } from "../../../_classes/json-initializable.class";
import { LakshArticleBlockPerson } from "../../../_components/article/_classes/article-block-person.class";

export interface LakshProjectBlockData {
  title?: string;
  subtitle?: string;
  text?: string;
  description?: string;
  image?: string;
  images?: string[];
  persons?: LakshArticleBlockPerson[];
}

export class LakshProjectBlock extends JsonInitializable {
  type: 'text' | 'image' | 'fixed' | 'gallery' | 'persons';
  data: LakshProjectBlockData;

  constructor(data?: any) {
    // Настраиваем маппинги для вложенных классов
    const nestedClassMappings = {
      'data.persons': {
        class: LakshArticleBlockPerson
      }
    };
    super(data, undefined, nestedClassMappings);
  }
}
