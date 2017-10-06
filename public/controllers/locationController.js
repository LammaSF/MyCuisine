import {templates} from 'templates';
import 'bootstrap';

// (function () {
//     function initMap() {
//         var map,
//             center,
//             marker,
//             mapOptions,
//             markerOptions;
//
//         center = new google.maps.LatLng(42.650698, 23.379031);
//
//         mapOptions = {
//             zoom: 15,
//             center: center,
//
//         };
//
//         map = new google.maps.Map(document.getElementById('map'), mapOptions);
//
//         markerOptions = {
//             map: map,
//             position: center
//         };
//
//         marker = new google.maps.Marker(markerOptions);
//
//         window.setTimeout(function () {
//             google.maps.event.trigger(map, 'resize');
//         }, 100);
//     }
//
// }())

function getPage(){
    templates.getPage('location');
}


let locationControl = {
    getPage,
}

export { locationControl as locationController }
