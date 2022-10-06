function selectGroupMenuItem(groupName) {
    cy.contains('a', groupName).then(menu => {
        cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage {
    formLayoutPage() {
        selectGroupMenuItem('Form')
        cy.contains('Form Layouts').click()
    }

    datePickerPage() {
        selectGroupMenuItem('Form')
        cy.contains('Datepicker').click()
    }

    toasterPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click()
    }

}

export const navigateTo = new NavigationPage()