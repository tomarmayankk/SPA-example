import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHTML() {
        return `
        <h1>Posts</h1>
        <p>You are looking at the posts</p>
        `;
    }
}
