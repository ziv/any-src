export type El = HTMLElement & { dataset: DOMStringMap };
export type Data = Record<string, any>;

export const source = (e: HTMLElement): string => {
    const src = e.getAttribute('src');
    if (!src) {
        throw new Error('"src" attribute is empty');
    }
    return src;
}

export const options = (e: HTMLElement): RequestInit | undefined => {
    const opts = e.getAttribute('opts');
    if (!opts) {
        return undefined;
    }
    try {
        return JSON.parse(opts) as RequestInit;
    } catch (e) {
        throw new Error(`unable to parse json: ${e}`);
    }
}

export const load = async (input: string, init: RequestInit | undefined): Promise<any> => {
    const res = await fetch(input, init);
    if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}`);
    }
    return res.json();
};

export const updateFactory = (el: HTMLElement, data: Data) =>
    (attr: string, prop: string) =>
        el.querySelectorAll(`[${attr}]`).forEach((e: El) => {
            // todo replace function should support string access notation ("foo[0].bar")
            // e[prop] = data[e.dataset[key]];
            e[prop] = data[e.getAttribute(attr)];
        });
