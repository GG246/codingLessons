//when the document is ready, do some action
$(document).ready(function(){
  //print something to console
  console.log('document is ready');
  //click h2 turns red
  $('h2').click(function(){

    //turn all p red
    $('p').css('color','red');
  });
});
