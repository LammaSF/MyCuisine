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
        let reviews = firebase.database().ref('menu/');
        // console.log(reviews.toString());
    reviews.once('value', (snapshot) => {
        let f = [];
let ind=0;
        snapshot.forEach(element => {
            let cat=  element.key;
            ind+=1;
            console.log(cat);
            element.forEach(el=>{

                let dbElements = {
                    'description': el.val().description,
                    'price': el.val().price,
                    'image': el.val().image,
                    'name': el.key,
                    'category': cat

                };
                f.push(dbElements);

            })

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