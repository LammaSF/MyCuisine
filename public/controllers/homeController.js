import {templates} from 'templates';
import 'bootstrap';


function all(){
        templates.getPage('home');
}


function getByPage(){

}

let homeControl = {
    all,
    getByPage
}

export { homeControl as homeController }
