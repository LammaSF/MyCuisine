import {templates} from 'templates';
import 'bootstrap';


function all(){
    templates.getPage('menu');
}


let menuControl = {
    all,

}

export { menuControl as menuController }