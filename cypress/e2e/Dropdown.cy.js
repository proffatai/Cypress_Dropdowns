describe('Working with Dropdowns',{keystrokeDelay:3000 ,baseUrl:"https://qaboxletstestcypresspracticesite.netlify.app/differentdropdowntypes.html"},() => {
  it('Select by text/label', () => {
    cy.visit('/')
    cy.get('#speed').select('Faster')
    cy.get('#files').select('jQuery.js')

    cy.get('#myInput').type('Nigeria{enter}')

    cy.get('#cselect').select(['USA','India']) //multiselect, pass the values as an array
    

    cy.get('.chosen-search-input').type('Afg{enter}') // type afg and hit the enter key
    cy.get('.chosen-search-input').type('{shift}aNG{downarrow}{enter}') // hold shift and type 'aNg' and hit the downarrow key before hitting the enter
  })

  it.only('Select by value', () => {
    cy.visit('/')
    cy.get('#speed').select('5')
    cy.get('#files').select('someotherfile')

  
    cy.get('#myInput').type('Ind{downarrow}{downarrow}{enter}')// type the text ind, then hit the downarrow key twice and hit enter.India will be selected

    cy.get('#cselect').select(['USA','India','Algeria']) 
  })
})