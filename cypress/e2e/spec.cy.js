import UserActionPage from "../pageObjects/UserActionPage";
import VerificationPage from "../pageObjects/VerificationPage";
import PastPage from "../pageObjects/PastPage";

describe('basic script', () => {

  context('Proceed a Reservation', () => {
    beforeEach(() => {
      UserActionPage.visitStartPage();
    })

    it('Proceed a Reservation', () => {
      UserActionPage.visitLoginPage();

      const elements = UserActionPage.getElements();


      elements.setName.type("John Doe");
      elements.setPassword.type("ThisIsNotAPassword");
      elements.clickLogin.click();

      UserActionPage.visitReservePage();

      elements.selectFacility.select("Seoul CURA Healthcare Center");
      elements.checkHospital.click();
      elements.checkMedicaid.click();
      elements.selectDate.contains("30").click();
      elements.setComment.click('topRight').type("CURA Healthcare Service");
      elements.clickAppointment.click();

      VerificationPage.findElements().confirmCentre.should('have.text', 'Seoul CURA Healthcare Center');
      VerificationPage.findElements().confirmAdmission.should('have.text', 'Yes');
      VerificationPage.findElements().confirmHealthcare.should('have.text', 'Medicaid');
      VerificationPage.findElements().confirmDate.should('have.text', '30/06/2023');
      VerificationPage.findElements().confirmComment.should('have.text', 'CURA Healthcare Service');
      
    });

    it('Reservation history empty', () => {
      UserActionPage.visitStartPage();
      
      const elements = UserActionPage.getElements();
      
      elements.setName.type("John Doe");
      elements.setPassword.type("ThisIsNotAPassword");
      elements.clickAppointment.click();

      UserActionPage.visitReservePage();
      
      elements.clickMenu.click();
      elements.clickHistory.click();
      
      PastPage.goTo();
      PastPage.findElements().emptyMessage().should('have.text', 'No appointment.');
    })
  });
});
