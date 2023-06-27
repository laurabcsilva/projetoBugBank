
describe('testes na tela de cadastro', () => {

    beforeEach(() => {
        cy.visit('/')
    });
    it('teste 01 cadastro com sucesso', () => {
        cy.get('.ihdmxA').click();
        cy.get(':nth-child(2) > .input__default').type('tartaruganinjaa0@mestresplinter.com',{force:true})
        cy.get(':nth-child(3) > .input__default').type('lauro margareth',{force:true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('silvasaura',{force:true})
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('silvasaura',{force:true})
        cy.get('#toggleAddBalance').click({force:true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true})
    
        cy.get('#modalText').invoke('text').then((texto)=>{
            const numeroDaConta = texto.match(/\d+-\d+/)[0]

            cy.get('#btnCloseModal').click()
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('tartaruganinjaa0@mestresplinter.com')
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('silvasaura')
            cy.get('.otUnI').click()
            
        cy.contains(numeroDaConta)
        })
        cy.get('#textName').invoke('text').should('contains','lauro margareth')
        cy.get('#textBalance > span').invoke('text').then((text) => {
            const cleanText = text.replace(/[^\d.,]/g, '');
            const saldo = parseFloat(cleanText.replace(',', '.'));

            // Exemplo de asserção 
            expect(saldo).to.eq(1)

        });
        
    });
  
});