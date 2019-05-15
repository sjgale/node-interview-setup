const sinon = require('sinon')
const expect = require('chai').expect
const {sum, health, fourOhFour} = require('./')

function mockResponse() {
    let res = {}
    res.json = sinon.stub().returns(res),
    res.status = sinon.stub().returns(res),
    res.send = sinon.stub().returns(res)
    return res
}

describe('application', () => {
    let reqStub
    let resStub
    let nextStub
    
    beforeEach(() => {
        reqStub = {body:{}}
        resStub = mockResponse()
        nextStub = sinon.stub()
    })
    
    describe('sum()', () => {
        beforeEach(() => {
            reqStub.body.numbers = [1,2,3]
            sum(reqStub, resStub, nextStub)            
        })

        afterEach(() => {
            reqStub.body = {}           
        })
        
        it('should call send with the sum of numbers given', () => {
            expect(resStub.send.calledWith({'sum': 6}))
        })
        
        it('should not call next', () => {
            expect(nextStub.callCount).to.equal(0)
        })
    })

    describe('health()', () => {
        beforeEach(() => {
            health(reqStub, resStub, nextStub)            
        })
        
        it('should set the response status code to 200', () => {
            expect(resStub.status.calledWith(200))
        })

        it('should call send with a healthy response', () => {
            expect(resStub.send.calledWith('{"status":"Still kicking!"}'))
        })
        
        it('should not call next', () => {
            expect(nextStub.callCount).to.equal(0)
        })
    })

    describe('fourOhFour()', () => {
        beforeEach(() => {
            fourOhFour(reqStub, resStub, nextStub)
        })
        
        it('should set the response status code to 404', () => {
            expect(resStub.status.calledWith(404))
        })

        it('should send an empty response', () => {
            expect(resStub.send.callCount).to.equal(1)
        })
        
        it('should not call next', () => {
            expect(nextStub.callCount).to.equal(0)
        })
    })
})