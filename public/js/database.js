import { firebaseModule } from 'firebase-config';

class DataBase {

    constructor(config) {
        this.database = config.database;
    }


    getAllMenus() {
        return new Promise((resolve, reject) => {
            let reviews = this.database.ref('menu/');
            reviews.once('value', data => {
                resolve(data.val());
            });
        });
    }

    // getReviews(query) {
    //     return new Promise((resolve, reject) => {
    //         let reviews = this.database.ref('reviews/').orderByChild(query.prop).equalTo(query.value);
    //         reviews.once('value', data => {
    //             resolve(data.val());
    //         });
    //     });
    // }
    //
    // getReview(query) {
    //     return new Promise((resolve, reject) => {
    //         let reviews = this.database.ref('reviews/').child(query);
    //         reviews.once('value', data => {
    //             resolve(data.val());
    //         });
    //     });
   // }
}

const dataBase = new DataBase(firebaseModule);

export { dataBase };