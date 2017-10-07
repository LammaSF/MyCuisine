import {templates} from 'templates';
import 'bootstrap';

async function getPage(){
   // let p = new Promise(function(resolve, reject){
   //     await templates.getPage('location');
   //     await footer;
   //      function footer() {
   //          return new Promise(resolve => {
   //              setTimeout(() => {
   //                  resolve(x);
   //              }, 2000);
   //          });
   //          templates.getPage('common-footer');
     //   }
    $('.common-footer').css("display","initial");
    templates.getPage('location')
    // templates.getPage('common-footer');
//}
//)
   // });
   // return p;
}


let locationControl = {
    getPage,
}

export { locationControl as locationController }
