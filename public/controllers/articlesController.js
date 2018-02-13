import {templates} from 'templates';
import 'bootstrap';


function all() {
    return new Promise((resolve, reject) => {
        let articles = firebase.database().ref('articles/');

        articles.once('value', (snapshot) => {
            let f = [];

            snapshot.forEach(el => {
                let dbElements = {
                    'body': el.val().body,
                    'date': el.val().date,
                    'image': el.val().image,
                    'author': el.val().author,
                    'name': el.val().name,
                    'id': el.key

                };

                f.push(dbElements);


            });
            templates.getPage('allArticles', f);
            $('.common-footer').css("display", "initial");
        })
    })
}

function getArticleByName(id) {

    return new Promise((resolve, reject) => {
        let ids = Object.values(id)[0];

        let articles = firebase.database().ref('articles/' + ids+'/');

        articles.once('value', (snap) => {
            let f = [];

//
            console.log(snap.val().date);
                let dbElements = {
                    'body': snap.val().body,
                    'date': snap.val().date,
                    'image': snap.val().image,
                    'author': snap.val().author,
                    'name': snap.val().name,
                };

                f.push(dbElements);


            // });
            templates.getPage('article', f);


            $('.common-footer').css("display", "initial");
        })
    })
}

function search() {
    let resultSearch;
    $('#search-button').on('click', () => {
        const title = $('#search-input').val();
        console.log(title);


    });
    console.log();
    return new Promise((resolve, reject) => {
        let ids = Object.values(id)[0];
        console.log(typeof ids);
        let articles = firebase.database().ref('articles/' + ids+'/');

        articles.once('value', (snap) => {
            let f = [];
            console.log(articles);
//             snapshot.forEach(el => {
// console.log(el.val())
            console.log(snap.val().date);
            let dbElements = {
                'body': snap.val().body,
                'date': snap.val().date,
                'image': snap.val().image,
                'author': snap.val().author,
                'name': snap.val().name,
            };

            f.push(dbElements);


            // });
            templates.getPage('article', f);


            $('.common-footer').css("display", "initial");
        })
    })
}

let articlesControl = {
    all,
    getArticleByName
}

export {articlesControl as articlesController}