import {templates} from 'templates';
import 'bootstrap';


function getPage(){
    templates.getPage('location');
}



let locationControl = {
    getPage
}

export { locationControl as locationController }
