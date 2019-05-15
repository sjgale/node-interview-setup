const sinon = require('sinon')
const expect = require('chai').expect
const {sum} = require('./')

describe('application', () => {
    let reqStub
    let resStub
    let nextStub
    
    beforeEach(() => {
        reqStub = {body: {}}
        resStub = {
            status: sinon.stub().returns(resStub),
            send: sinon.stub()
        }
        nextStub = sinon.stub()
    })
    
    describe('add()', () => {
        beforeEach(() => {
            reqStub.body.numbers = [1,2,3]
            sum(reqStub, resStub, nextStub)            
        })
        
        it('should call send with the sum of numbers given', () => {
            expect(resStub.send.callCount).to.equal(1)
            expect(resStub.send.firstCall.args).to.deep.equal([{'sum': 6}])
        })
        
        it('should not call next', () => {
            expect(nextStub.callCount).to.equal(0)
        })
    })
})