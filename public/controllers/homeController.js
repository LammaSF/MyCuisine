import {templates} from 'templates';
import 'bootstrap';
import 'jquery';


function all() {

    $('.common-footer').css("display", "none");
    return new Promise((resolve, reject) => {
        let cat = "tarts";
        let reviews = firebase.database().ref('menu/tarts');
        let $this = $(this);

        reviews.once('value', (snapshot) => {
            let f = [];

            snapshot.forEach(element => {

                let dbElements = {
                    'description': element.val().description,
                    'price': element.val().price,
                    'image': element.val().image,
                    'id':element.val().id,
                    'name': element.key,
                    'category': cat

                };
                f.push(dbElements);


            });
            templates.getPage('home', f) .done(() => {

                    $('#carouselIndicators').carousel({
                        interval: 7000
                    });

            })
        })
    })
}




let homeControl = {
    all,
}

export { homeControl as homeController };
