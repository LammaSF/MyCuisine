function all(){return new Promise((e,t)=>{let l=firebase.database().ref("reviews/");console.log(l.toString()),l.once("value",e=>{let t=[];e.forEach(e=>{let l={review:e.val().review,title:e.val().title,name:e.val().name,image:e.val().image};t.push(l)}),templates.getPage("reviews",t),$(".common-footer").css("display","initial")})})}import{templates}from"templates";import"bootstrap";let reviewsControl={all:all};export{reviewsControl as reviewsController};