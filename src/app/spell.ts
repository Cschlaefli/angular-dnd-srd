export class Spell {
    _id?: string;
    name?: string;
    page?: string;
    range?: string;
    ritual?: boolean;
    casting_time?: string;
    classes?: string[];
    components?: string[];
    concentration?: string;
    desc?: string;
    duration?: string;
    higher_level?: string;
    level?: number;
    material?: string;
    subclasses?: string[];
    school?: string;
}

export class MetaInformation {
    max_results: number;
    page: number;
    total: number;
}

export class SpellResponse {
    _meta: [];
    _items: Spell[];
}
