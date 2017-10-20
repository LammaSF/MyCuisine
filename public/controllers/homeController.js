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
                    'name': element.key,
                    'category': cat

                };
                f.push(dbElements);


            })
            templates.getPage('home', f) .done(() => {
                jQuery(document).ready(function ($) {

                    $('#myCarousel').carousel({
                        interval: 7000,
                    });

                })
                //Handles the carousel thumbnails
                $('[id^=carousel-selector-]').click(function () {
                    let id_selector = $(this).attr("id");
                    let id = /-(\d+)$/.exec(id_selector)[1];
                    jQuery('#myCarousel').carousel(parseInt(id));
                });
                // When the carousel slides, auto update the text
                $('#myCarousel').on('slid.bs.carousel', function (e) {
                    let id = $('.item.active').data('slide-number');

                    $('#carousel-text').html($('#slide-content-' + id).html());
                });
            })
        })
    })
}




let homeControl = {
    all,
}

export { homeControl as homeController };
