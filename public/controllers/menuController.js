import {templates} from 'templates';
import 'bootstrap';

// function getAllMenus() {
//
//     return new Promise((resolve, reject) => {
//         let reviews = this.database().ref('cakes/');
//         reviews.once('value', data => {
//             resolve(data.val());
//         });
//         console.log(reviews)
//     });
// }
function all(){
    // let cakes = firebase.database().ref('cakes');
    return new Promise((resolve, reject) => {
        let reviews = firebase.database().ref('menu/');
        // console.log(reviews.toString());
    reviews.once('value', (snapshot) => {
        let f = [];

        snapshot.forEach(element => {
            let cat=  element.key;
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

function getMenuCategory(category) {


    return new Promise((resolve, reject) => {
        let cat = category.category;

        let reviews = firebase.database().ref('menu/'+cat+'/');

        reviews.once('value', (snapshot) => {
            let f = [];

            snapshot.forEach(element => {
                // let cat = element.val().image;
                console.log(cat);
                    let dbElements = {
                        'description': element.val().description,
                        'price': element.val().price,
                        'image': element.val().image,
                        'name': element.key,
                        'category': cat

                    };
                    f.push(dbElements);


            })
            templates.getPage('menu', f);
            $('.common-footer').css("display", "initial");
            if (cat !== 'cakes') {
                console.log(cat);
                $('.cakes-title').hide();
            }
        })
    })
    }


let menuControl = {
    all,
    getMenuCategory

}

export { menuControl as menuController }