import { deleteMember } from '../Controller/deleteMember.controller.js';
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js';

export function deleteRequest(app){
   app.delete("/api/members/:id",deleteMember);
}