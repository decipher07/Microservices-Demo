import chai from "chai"
import chaiHtpp from "chai-http"
import { expect } from "chai"
import { bloggerApp } from '../../app'
chai.use(chaiHtpp);

describe("Check : Blog Service ", () : void => {
    
    it ("Blogger Service Base Url Checking", (done) : void => {       
        chai.request(bloggerApp)
            .get('/blog/')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(201);
                done();
            })
    })
    
    it ("Blogger Service Database with ID", (done) : void => {       
        chai.request(bloggerApp)
            .get('/blog/1')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })
})