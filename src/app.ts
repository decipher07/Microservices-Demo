import express, { Request, Response, NextFunction, Express} from "express"
import writerRoutes from './routers/writer.routes'
import bloggerRoutes from './routers/blogs.routes'

const writerPort : number = 3000 ; // For Writer 
const blogPort : number = 3001 ; // For Blogs 

const writerApp : Express = express();
const bloggerApp : Express = express();

writerApp.use('/writer', writerRoutes );
bloggerApp.use('/blog', bloggerRoutes );

writerApp.listen(writerPort, () : void => {
    console.log(`Server For Writer Port Running at : ${writerPort}`);
})

bloggerApp.listen(blogPort, () : void => {
    console.log(`Server running at Blogger Port : ${blogPort}`)
})