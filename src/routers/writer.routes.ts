import { Request, Response, Router } from 'express'
import http from 'http'

import writerDatabase from '../database/writer.json'

const router : Router = Router();

interface writerAccountInterface {
    id : number,
    name : string,
    profession : string, 
    location : string
}

router.get('/:id', ( req: Request, res : Response ) : Response  => {
    let database : writerAccountInterface[] = writerDatabase ;

    if ( req.params.id == 'all' )
        return res.send(database);

    let user : writerAccountInterface[] = database.filter((document) => document.id == parseInt(req.params.id))
    
    if ( user.length == 0 )
        return res.status(403).send("Sorry No Details for the User Found");
    
    return res.send(user);
})

router.get('/blogs-by-writer/:nameOfWriter', async ( req : Request , res : Response ) : Promise < void > => {
    let name : string = req.params.nameOfWriter ; 

    try {
        let database : writerAccountInterface[] = writerDatabase ;
    
        let user : writerAccountInterface[] = database.filter((document) => document.name == name)
    
        let url : string = `http://localhost:3001/blog/${user[0].id}`;
        
        let data = '';

        http.get(url, (resp) => {

                // A chunk of data has been received.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    JSON.parse(data);
                    res.status(201).send(data);
                });

            }).on("error", (err) => {
              console.log("Error: " + err.message);        
        });


    } catch ( e : any ) {
        res.send(e);
    }


})

export default router ;