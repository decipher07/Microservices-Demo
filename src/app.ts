import express, { Request, Response, NextFunction, Express} from "express"

const writerPort : number = 3000 ; // For Writer 
const blogPort : number = 3001 ; // For Blogs 

const app : Express = express();
const bloggerApp : Express = express();

app.listen(writerPort, () : void => {
    console.log(`Server For Writer Port Running at : ${writerPort}`);
})

bloggerApp.listen(blogPort, () : void => {
    console.log(`Server running at Blogger Port : ${blogPort}`)
})