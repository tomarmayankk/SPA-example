import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `
        <h1>Welcome back, DOM</h1>
        <p>lorem ipsum donor</p>
        <p><a href="/posts" data-link>View recent posts</a></p>
        `;
    }
}
