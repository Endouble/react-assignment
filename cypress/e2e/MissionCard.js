describe('Mission Card', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('render modal with mission details', () => {
        cy.getByText(/details/i)
            .click()
            .getByText(/FALCONSAT/i)
            .getByText(/Engine failure at 33 seconds and loss of vehicle/i)
            .getByText(/LAUNCH SITE/i)
            .getByText(/Kwajalein Atoll Omelek Island/i)
            .getByText(/ROCKET NAME/i)
            .getByText(/Falcon 1/i)
            .getByText(/ROCKET TYPE/i)
            .getByText(/Merlin A/i)
            .getByText(/LAUNCH DATE/i)
            .getByText('2006-03-25T10:30:00+12:00');
    });
});
