import  {allMembers} from '../Controller/getMembers.control.js'
import '../Middlewares/logMiddleware.js';

//Fetch all users
export function getRequest(app){
     app.get("/api/allmembers", allMembers);
}
