describe('WT website', () => {
    it('Opens WT website', () => {
      /*we are using cy a global object and calling the api commands inorder to interact with the browser.
           Here we use the visit command to open the web application in the browser.
          */
      cy.visit('https://www.willowtreeapps.com/')
      })

      it('.type() - type into a DOM element', () => {
        cy.visit('https://www.willowtreeapps.com/')
        cy.get('.search-input')
          .type('jobs').should('have.value', 'jobs')
      })
      
  })