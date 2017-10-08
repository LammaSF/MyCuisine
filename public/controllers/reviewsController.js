import {templates} from 'templates';
import 'bootstrap';


function all(){
    return new Promise((resolve, reject) => {
        let reviews = firebase.database().ref('reviews/');
        console.log(reviews.toString());
        reviews.once('value', (snapshot) => {
            let f = []
            snapshot.forEach(element => {
                let dbElements = {
                    'review': element.val().review,
                    'title': element.val().title,
                    'name': element.val().name,
                    'image': element.val().image

                };
                f.push(dbElements);
            })
            templates.getPage('reviews', f);
            $('.common-footer').css("display", "initial");
        })

    });

}


let reviewsControl = {
    all
}

export { reviewsControl as reviewsController }