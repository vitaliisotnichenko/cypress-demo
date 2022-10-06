import {navigateTo} from "../support/pageObjects/navigationPage";
import {onFormLayoutsPage} from "../support/pageObjects/formLayoutsPage";
import {onDatePickerPage} from "../support/pageObjects/datepickerPage";

describe('Test with Page Objects', () => {
    beforeEach('open app', () => {
        cy.visit('/')
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutPage();
        navigateTo.datePickerPage();
        navigateTo.toasterPage();
    })

    it('should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Vitalii', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithNameAndEmail('test@test.com', 'password')
        navigateTo.datePickerPage()
        onDatePickerPage.selectCommonDatepickerDateFromToday(1)
        onDatePickerPage.selectDatepickerWithRangeFromToday(7, 14)
    })
})