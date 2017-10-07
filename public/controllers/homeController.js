import {templates} from 'templates';
import 'bootstrap';
import 'jquery';


function all(){
    $('.common-footer').css("display","none");
        templates.getPage('home');
}


function getByPage(){

}

let homeControl = {
    all,
    getByPage
}

export { homeControl as homeController }
