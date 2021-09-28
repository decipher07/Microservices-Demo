import request from "supertest"
import { expect } from "chai"

import { writerApp } from '../../app'

describe("Server Checks for Writer Application", () : void => {
    it("Server Instantiation without Errors", (done) : void => {
        request(writerApp).get('/').expect(200, done);
    })
})
