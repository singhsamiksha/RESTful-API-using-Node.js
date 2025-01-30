import { deleteMember } from '../Controller/deleteMember.controller.js';
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js';

//Delete member by Id.
export function deleteRequest(app){
   app.delete("/api/members/:id",deleteMember);
}