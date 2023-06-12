export default class PastPage {
    static get path() {
        return '/history.php#history';
    }

    static goTo() {
        cy.visit(this.path);
    }

    static findElements() {
        return {
            emptyMessage: cy.get('div.col-sm-12 p')
        };
    }
}
