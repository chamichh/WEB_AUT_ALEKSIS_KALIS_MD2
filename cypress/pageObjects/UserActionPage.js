export default class UserActionPage {
    static get paths() {
        return {
            start: '/',
            login: '/profile.php#login',
            reserve: '/#appointment'
        };
    }

    static visitStartPage() {
        cy.visit(this.paths.start);
    }

    static visitLoginPage() {
        cy.visit(this.paths.login);
    }

    static visitReservePage() {
        cy.visit(this.paths.reserve);
    }

    static getElements() {
        return {
            setName: cy.get('#txt-username'),
            setPassword: cy.get('#txt-password'),
            selectFacility: cy.get("select#combo_facility"),
            checkHospital: cy.get("[name='hospital_readmission']"),
            checkMedicaid: cy.get("#radio_program_medicaid"),
            selectDate: cy.get(".datepicker-days .day:not(.old)"),
            setComment: cy.get("#txt_comment"),
            clickAppointment: cy.get('a#btn-make-appointment'),
            clickMenu: cy.get("#menu-toggle"),
            clickHistory: cy.contains("History"),
            clickLogin: cy.get('button#btn-login')
        };
    }
    
}
