import {load, options, source, updateFactory} from './helpers';

export class AnySrc extends HTMLElement {
    static get observedAttributes() {
        return ['src', 'opts'];
    }

    async attributeChangedCallback() {
        const update = updateFactory(this, await load(source(this), options(this)));
        update('data-text', 'innerText');
        update('data-src', 'src');
        update('data-value', 'value');
    }
}
