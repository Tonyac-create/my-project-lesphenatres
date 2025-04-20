describe('test navigation menu', () => {
  context('desktop navigation', () => {
    beforeEach(() => {
      cy.viewport(1280, 720)
      cy.visit('http://localhost:3000')
    })

    it('clicks on desktop navigation links', () => {
      cy.get('nav.xl\\:flex ul').within(() => {
        cy.contains('Accueil').click()
        cy.url().should('eq', 'http://localhost:3000/')

        cy.contains('Notre philosophie').click()
        cy.url().should('include', '/philosophy')
        cy.go('back')

        cy.contains('Ateliers / spectacles').click()
        cy.url().should('include', '/projets')
        cy.go('back')

        cy.contains('À l\'affiche').click()
        cy.url().should('include', '/news')
        cy.go('back')

        cy.contains('Infos pratiques/Contact').click()
        cy.url().should('include', '/contact')
        cy.go('back')
      })
    })
  })
})

describe('open homepage , click btn and navigate', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('section').first().contains('Notre philosophie').click()
    cy.url().should('include', '/philosophy')
    cy.go('back')
    cy.get('section').first().contains('Besoin d\'infos ?').click()
    cy.url().should('include', '/contact')
    cy.go('back')
    cy.contains('Toute l\'histoire').click()
    cy.url().should('include', '/philosophy')
    cy.go('back')
    cy.contains('C\'est quoi un atelier ?').click()
    cy.url().should('include', '/projets')
    cy.go('back')
    cy.contains('Un spectacle m\'intéresse !').click()
    cy.url().should('include', '/contact')
    cy.go('back')
    cy.contains('Explorer les spectacles').click()
    cy.url().should('include', '/projets')
    cy.go('back')
  })
})

describe('check social media links', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have correct Facebook link', () => {
    cy.get('section')
      .contains('Nous suivre sur Facebook')
      .should('have.attr', 'href', 'https://www.facebook.com/lesphenatres')
      .and('have.attr', 'target', '_blank')
  })

  it('should have correct TikTok link', () => {
    cy.get('section')
      .contains('Nous suivre sur TikTok')
      .should('have.attr', 'href', 'https://www.tiktok.com/@lesphenatresdelartois?_t=ZN-8vLGTpttruQ&_r=1')
      .and('have.attr', 'target', '_blank')
  })

  it('should have correct Instagram link', () => {
    cy.get('section')
      .contains('Nous suivre sur Instagram')
      .should('have.attr', 'href', 'https://www.instagram.com/lesphenatresdelartois/?igsh=MXZwY21xeXZhOW80Ng%3D%3D#')
      .and('have.attr', 'target', '_blank')
  })
})

describe('check footer links', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have correct footer links', () => {
    cy.get('footer').contains('Mentions légales').click()
    cy.url().should('include', '/mentions')
    cy.go('back')
  })

  it('should have correct Facebook link', () => {
    cy.get('footer')
      .contains('Facebook')
      .should('have.attr', 'href', 'https://www.facebook.com/lesphenatres')
      .and('have.attr', 'target', '_blank')
  })

  it('should have correct TikTok link', () => {
    cy.get('footer')
      .contains('TikTok')
      .should('have.attr', 'href', 'https://www.tiktok.com/@lesphenatresdelartois?_t=ZN-8vLGTpttruQ&_r=1')
      .and('have.attr', 'target', '_blank')
  })

  it('should have correct Instagram link', () => {
    cy.get('footer')
      .contains('Instagram')
      .should('have.attr', 'href', 'https://www.instagram.com/lesphenatresdelartois/?igsh=MXZwY21xeXZhOW80Ng%3D%3D#')
      .and('have.attr', 'target', '_blank')
  })
})
