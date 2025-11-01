import { JsonInitializable } from "../../../_classes/json-initializable.class";

export class LakshService extends JsonInitializable {
    title: string;
    description: string;
    image?: string | undefined;
    linkLabel?: string | undefined;
    linkUrl?: string | undefined;

    constructor(data?: Partial<LakshService>) {
        super(data);
    }
}

