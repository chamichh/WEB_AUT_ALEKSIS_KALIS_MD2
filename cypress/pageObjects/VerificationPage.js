export default class VerificationPage {
    static get path() {
        return '/appointment.php#confirmation';
    }

    static moveToVerificationPage() {
        cy.visit(this.path);
    }

    static findElements() {
        return {
            confirmComment: cy.get('p#commentConfirm'),
            confirmHealthcare: cy.get('p#programConfirm'),
            confirmCentre: cy.get('p#facilityConfirm'),
            confirmAdmission: cy.get('p#hospital_admissionConfirm'),
            confirmDate: cy.get('p#visit_dateConfirm')
        };
    }
}
