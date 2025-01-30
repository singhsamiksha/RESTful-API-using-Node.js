import { updateMember } from '../Controller/putMember.controller.js';
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js';

//Update the member
export function putRequest(app){
    app.put("/api/members/:id",updateMember);
}
