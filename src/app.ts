import express, { Request, Response, NextFunction, Express} from "express"
import writerRoutes from './routers/writer.routes'
import bloggerRoutes from './routers/blogs.routes'

const writerPort : number = 3000 ; // For Writer 
const blogPort : number = 3001 ; // For Blogs 

const writerApp : Express = express();
const bloggerApp : Express = express();

bloggerApp.use('/blog', bloggerRoutes );

bloggerApp.get('/', ( req : Request , res : Response ) :  Response => {
    return res.status(200).json({"message" : " Blogger Base Working Fine "})
})

bloggerApp.listen(blogPort, () : void => {
    console.log(`Server running at Blogger Port : ${blogPort}`)
})

export { bloggerApp }