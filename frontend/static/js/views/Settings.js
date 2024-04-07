import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHTML() {
        return `
        <h1>Welcome to settings</h1>
        <p> You are looking for settings</p>
        `;
    }
}
