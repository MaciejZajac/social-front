export {};

// it('Handle user registration - email in use', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('a').contains('Rejestracja').click();
//     cy.url().should('include', '/register');
//     cy.get("input[id='email']").type('maciej.zajac.197@gmail.com');
//     cy.get("input[id='password']").type('test123');
//     cy.get('button[type=submit]').contains('Zarejestruj').click();
//     cy.get('div.ant-alert-message').contains('Something went wrong!');
// });

// it('Handle user registration - fresh email', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('a').contains('Rejestracja').click();
//     cy.url().should('include', '/register');
//     cy.get("input[id='email']").type('maciej.zajac.praca@gmail.com');
//     cy.get("input[id='password']").type('test123');
//     cy.get('button[type=submit]').contains('Zarejestruj').click();
//     cy.url().should('include', '/login');
// });

it('Handle user login - real user', () => {
    cy.visit('http://localhost:3000');
    cy.get('a').contains('Zaloguj').click();
    cy.url().should('include', '/login');
    cy.get("input[id='email']").type('maciej.zajac.197@gmail.com');
    cy.get("input[id='password']").type('test123');
    cy.get('button[type=submit]').contains('Zaloguj').click();
    cy.url().should('include', '/dashboard');
});

it('Creating new Offer', () => {
    // przejście na dodawanie oferty z dashboardu
    cy.get('a').contains('Dodaj nową ofertę').click();
    cy.url().should('include', '/dashboard/dodajoferte');

    // formularz dodawania oferty
    cy.get("input[id='basic_jobTitle']").type('Front end developer');
    cy.get("textarea[id='basic_jobDescription']").type('Szukamy fronta, który będzie pisał w jQuery');
    cy.get("input[id='basic_pensionFrom']").type('4000');
    cy.get("input[id='basic_pensionTo']").type('9000');
    cy.get("input[id='basic_requiredSkills']").click();
    cy.get('div.ant-select-item.ant-select-item-option').contains('React').click();
    cy.get('button[type=submit]').contains('Stwórz ofertę').click();
});
