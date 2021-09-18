import { Request, Response, Router } from 'express'

import blogDatabase from '../database/blogs.json'

const router : Router = Router();

interface blogsInterface {
    id : string ,
    content : string , 
    writerid : number 
}

router.get('/', ( req : Request, res : Response ) : Response => {
    return res.status(201).send("Blog Service Running Successfully.........")
})

router.get('/:writerId' , ( req : Request, res : Response ) : Response => {
    let writerId : string = req.params.writerId ; 

    if ( writerId == 'all' )
        return res.status(200).send(blogDatabase);
    
    let database : blogsInterface[] = blogDatabase ;

        
    let blogs : blogsInterface[] = database.filter((document) => document.writerid == parseInt(writerId) );
    
    if ( blogs.length == 0 )
        return res.status(303).send("No Blogs Published By The Given User!");

    return res.status(200).json({ "Message" : "These are the Blogs Written By The User ", "blogs" : blogs });
})

export default router ;