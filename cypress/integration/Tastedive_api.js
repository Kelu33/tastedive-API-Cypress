describe('Test de l\'api tastedive', () => {
    let query = require('../fixtures/tastediveData');

    it('Calls the API', () => {
        cy.TasteDive(query)

        cy.get('@response').should((response) => {
            const resp = response.body.Similar
            let info = resp.Info[0]
            let results = resp.Results
            expect(info.Name.toLowerCase()).to.eql(query.name)
            expect(info.Type).to.eql(query.type)
            for (let i = 0; i < results.length; i++) {
                expect(results[i].Type).to.eql(query.type)
            }

        })

    })    
    
})
