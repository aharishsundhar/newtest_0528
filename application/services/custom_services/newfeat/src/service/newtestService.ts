import { Request, Response } from 'express';
import {newtestDao} from '../dao/newtestDao';
import { CustomLogger } from '../config/Logger'
let newtest = new newtestDao();

export class newtestService {
    
    constructor() { }
    
    public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into newtestService.ts: GpCreate')
     const  newtestData = req.body;
     newtest.GpCreate(newtestData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from newtestService.ts: GpCreate')
         callback(response);
         });
    }


}