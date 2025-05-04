describe('contact form submission', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/contact')
  })

  it('should submit form and show success modal', () => {
    // Remplir le formulaire
    cy.get('input[name="firstName"]').type('John')
    cy.get('input[name="lastName"]').type('Doe')
    cy.get('input[name="email"]').type('john.doe@example.com')
    cy.get('input[name="phone"]').type('0123456789')
    cy.get('textarea[name="message"]').type('Ceci est un message de test')

    // Intercepter l'appel à emailjs
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
      statusCode: 200,
      body: { status: 'OK' }
    })

    // Soumettre le formulaire
    cy.get('form').submit()

    // Vérifier que la modal de succès s'affiche
    cy.contains('Succès').should('be.visible')
    cy.contains('Message envoyé avec succès !').should('be.visible')

    // Fermer la modal
    cy.contains('OK').click()

    // Vérifier que la modal est fermée
    cy.contains('Succès').should('not.exist')
  })

  it('should show error modal when submission fails', () => {
    // Remplir le formulaire
    cy.get('input[name="firstName"]').type('John')
    cy.get('input[name="lastName"]').type('Doe')
    cy.get('input[name="email"]').type('john.doe@example.com')
    cy.get('input[name="phone"]').type('0123456789')
    cy.get('textarea[name="message"]').type('Ceci est un message de test')

    // Intercepter l'appel à emailjs avec une erreur
    cy.intercept('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', {
      statusCode: 500,
      body: { error: 'Internal Server Error' }
    })

    // Soumettre le formulaire
    cy.get('form').submit()

    // Vérifier que la modal d'erreur s'affiche
    cy.contains('Erreur').should('be.visible')
    cy.contains('Une erreur est survenue lors de l\'envoi du message.').should('be.visible')

    // Fermer la modal
    cy.contains('OK').click()

    // Vérifier que la modal est fermée
    cy.contains('Erreur').should('not.exist')
  })
})
