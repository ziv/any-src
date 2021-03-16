const responseHandler = (res) => {
    if (!res.ok) {
        throw new Error(`Error ${res.status}`);
    }
    return res.json();
}

const updateFactory = (el) => (data) => (key, prop) => el
    .querySelectorAll(`[data-${key}]`)
    .forEach(e => e[prop] = data[e.dataset[key]]);

customElements.define('any-src', class Sourceable extends HTMLElement {
    static get observedAttributes() {
        return ['src'];
    }

    attributeChangedCallback() {
        // todo complete fetch HTTP options
        // const http = this.dataset.http;
        // if (http) {
        //     // parse json and use it as fetch options
        // }
        // todo complete loader
        // const loader = this.dataset.loader;
        // if (loader) {
        //     // handle loader display
        // }
        fetch(this.getAttribute('src'))
            .then(responseHandler)
            .then(updateFactory(this))
            .then(update => {
                update('text', 'innerText');
                update('src', 'src');
                update('value', 'value');
            });
    }
});
