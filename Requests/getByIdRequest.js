import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js'
import { findMember } from '../Controller/getIdMember.controller.js';

//Fetch member by Id
export function getIdRequest(app){
    app.get("/api/members/:id",findMember);
}