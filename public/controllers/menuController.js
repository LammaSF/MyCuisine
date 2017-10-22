import {templates} from 'templates';
import 'bootstrap';
import 'jquery';

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

    return new Promise((resolve, reject) => {
        let reviews = firebase.database().ref('menu/');

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
        let $this = $(this);

        reviews.once('value', (snapshot) => {
            let f = [];

            snapshot.forEach(element => {
                // let cat = element.val().image;
                //
                // if (document.getElementsByTagName('h3').textContent != 'CAKES') {
                // console.log(document.getElementById('#items'));
                // $this.hide();
           // }
                console.log(cat);
                    let dbElements = {
                        'description': element.val().description,
                        'price': element.val().price,
                        'image': element.val().image,
                        'name': element.key,
                        'id': element.val().id,
                        'category': cat

                    };
                    f.push(dbElements);


            });
            templates.getPage('menuByCategory', f);
                // .then((data) => {
                //     let reviews = firebase.database().ref('reviews/');
                //     console.log(reviews.toString());
                //     reviews.once('value', (snapshot) => {
                //         let f = []
                //         snapshot.forEach(element => {
                //             let rev = {
                //                 'review': element.val().review,
                //                 'title': element.val().title,
                //                 'name': element.val().name,
                //                 'image': element.val().image
                //
                //             };
                //             f.push(rev);
                //         })
                //         return templates.getTemplate('recommend');
                //     }).then((template) => {
                //         $('.list-recommend').html(template(rev));
                //     });
                // })

            $('.common-footer').css("display", "initial");

        })
    })
    }


let menuControl = {
    all,
    getMenuCategory

}

export { menuControl as menuController }