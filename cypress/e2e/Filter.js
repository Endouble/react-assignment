describe('Filters', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('filter missions by KWAJALEIN ATOLL lauches sites', () => {
        cy.getByText(/launch sites/i)
            .click()
            .getByTestId('filter-item-kwajalein-atoll')
            .click()
            // assertions
            .getByText(/FALCONSAT/i)
            .getByText(/DEMOSAT/i)
            .getByText(/TRAILBLAZER/i)
            .getByText(/RATSAT/i)
            .getByText(/RAZAKSAT/i);
    });
    it('filter missions by FALCON HEAVY rockets', () => {
        cy.getByText(/rockets/i)
            .click()
            .getByTestId('filter-item-falcon-heavy')
            .click()
            // assertions
            .getByText(/FALCON HEAVY TEST FLIGHT/i);
    });

    it('filter missions by 2010 missions', () => {
        cy.getByText(/launch year/i)
            .click()
            .getByText('2010')
            .click()
            // assertions
            .getByText(/FALCON 9 TEST FLIGHT/i)
            .getByText(/COTS 1/i);
    });

    it('filter missions by "VAFB SLC 4E" launch site and "FALCON 9" rocket, that took place in 2017', () => {
        cy.getByText(/launch sites/i)
            .click()
            .getByTestId('filter-item-vafb-slc-4e')
            .click()
            .getByText(/rockets/i)
            .click()
            .getByTestId('filter-item-falcon-9')
            .click()
            .getByText(/launch year/i)
            .click()
            .getByText('2017')
            .click()
            // assertions
            .getByText(/IRIDIUM NEXT MISSION 1/i)
            .getByText(/IRIDIUM NEXT MISSION 2/i)
            .getByText(/FORMOSAT-5/i)
            .getByText(/IRIDIUM NEXT MISSION 3/i)
            .getByText(/IRIDIUM NEXT MISSION 4/i);
    });
});
