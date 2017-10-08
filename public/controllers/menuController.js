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
        let reviews = firebase.database().ref('menu/cakes/');
        console.log(reviews.toString());
    reviews.once('value', (snapshot) => {
        let f = []
        snapshot.forEach(element => {
            let dbElements = {
                'description': element.val().description,
                'price': element.val().price,
                'image': element.val().image,
                'category': element.parent,

            };
            f.push(dbElements);
        })
        templates.getPage('menu', f);
        $('.common-footer').css("display", "initial");
    })

    });

}


let menuControl = {
    all,

}

export { menuControl as menuController }