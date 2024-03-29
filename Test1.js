const _ = Cypress
chai.use(require('chai-sorted'))
import RozetkaTest from '../oldTests/pageObjects/RozetkaTest'
const rozetkaTest = new RozetkaTest()
const baseUrl = Cypress.config('baseUrl')


describe('Rozetka Test Suite', () => {
    xit('Verify if the price filter working correctly for the following marketplaces”', () => {
        cy.visit(baseUrl)
        rozetkaTest.checkingURL()
        rozetkaTest.getGamersMenu()
        rozetkaTest.getCatalogButton()
        rozetkaTest.getFirstFilter()
        rozetkaTest.getSecondFilter()
        rozetkaTest.getAscendingOption()
        rozetkaTest.getProductsPrices()
    })
    it('Add items to the basket', () => {
        cy.visit(baseUrl)
        rozetkaTest.checkingURL()
        rozetkaTest.getGamersMenu()
        rozetkaTest.getCatalogButtonBasket()

        rozetkaTest.getVideocardBuyButton()
        rozetkaTest.getCatalogMenu()
        rozetkaTest.getSecondCatalogButton()
        rozetkaTest.getBuyButton()
        rozetkaTest.getCart()
        rozetkaTest.getProductCart()
        rozetkaTest.getProductCartName()
        rozetkaTest.getCartDelete()
        rozetkaTest.getDeleteButton()
        rozetkaTest.getTotalCartProducts()
    })
    xit('Search the item', () => {
        cy.visit(baseUrl)
        rozetkaTest.checkingURL()
        rozetkaTest.getSearchField()
        rozetkaTest.getSearchButton()
        rozetkaTest.getItemsName()
    })
    xit('Failed test”', () => {
        cy.visit(baseUrl)
        rozetkaTest.checkingURL()
        rozetkaTest.getGamersMenu()
        rozetkaTest.getCatalogButton()
        rozetkaTest.getFirstFilter()
        rozetkaTest.getSecondFilter()
        rozetkaTest.getAscendingOption()
        rozetkaTest.getProductPricesFailed()
    })
})