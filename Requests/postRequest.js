
import {createMember} from "../Controller/member.control.js";
import '../Middlewares/validateMiddleware.js';
import '../Middlewares/logMiddleware.js'

//Create new user
export function postRequest(app){
    app.post("/api/member",createMember);
}
