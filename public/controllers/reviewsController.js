import {templates} from 'templates';
import 'bootstrap';


function all(){
    templates.getPage('reviews')
        .then(templates.getPage('common-footer'));
}


let reviewsControl = {
    all
}

export { reviewsControl as reviewsController }