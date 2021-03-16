
customElements.define('any-src', class Sourceable extends HTMLElement {
    static get observedAttributes() {
        return ['src'];
    }

    constructor() {
        super();
    }

    attributeChangedCallback() {
        fetch(this.getAttribute('src'))
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.status);
                }
                return res.json();
            })
            .then(data => {
                this.querySelectorAll('[data-text]').forEach(el => el.innerText = data[el.dataset.text]);
                this.querySelectorAll('[data-src]').forEach(el => el.src = data[el.dataset.src]);
                this.querySelectorAll('[data-value]').forEach(el => el.value = data[el.dataset.value]);
            });
    }
});
