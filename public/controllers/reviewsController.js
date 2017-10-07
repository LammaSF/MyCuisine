import {templates} from 'templates';
import 'bootstrap';


function all(){
    templates.getPage('reviews');
}


let reviewsControl = {
    all
}

export { reviewsControl as reviewsController }