import {templates} from 'templates';
import 'bootstrap';

function getAllMenus() {

    return new Promise((resolve, reject) => {
        let reviews = this.database().ref('cakes/');
        reviews.once('value', data => {
            resolve(data.val());
        });
        console.log(reviews)
    });
}
function all(){
    // let cakes = firebase.database().ref('cakes');
    return new Promise((resolve, reject) => {
        let reviews = firebase.database().ref('cakes/');
        reviews.once('value', data => {
            resolve(data.val());
        })
            .then( templates.getPage('menu'));
        console.log(reviews);

    });

}


let menuControl = {
    all,

}

export { menuControl as menuController }