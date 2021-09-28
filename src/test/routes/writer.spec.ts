import chai from "chai"
import chaiHtpp from "chai-http"
import { expect } from "chai"
import { writerApp } from '../../app'
chai.use(chaiHtpp);

describe("Check : Writer Service ", () : void => {
    
    it ("Writer Service Base Url Checking", (done) : void => {       
        chai.request(writerApp)
            .get('/writer/')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(201);
                done();
            })
    })
    
    it ("Writer Service Database with ID", (done) : void => {       
        chai.request(writerApp)
            .get('/writer/1')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(200);
                done();
            })
    })

    it ("Writer Microservice Being linked to Blogs Microservice", (done) : void => {       
        chai.request(writerApp)
            .get('/writer/blogs-by-writer/Deepankar')
            .end((err : any , res : any ) => {
                expect(res.status).to.be.equal(201);
                done();
            })
    })
})
