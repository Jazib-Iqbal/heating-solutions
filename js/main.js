
//send email button

function sendEmailDefault(){
  var email = "example@example.com";
  var subject = "Test Email";
  var msgBody = "Thank you for contacting us, we will get back to you in 24 hours!";
  window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
}





function addSearch(obj,evt){
  var container  = $(obj).closest('.searchBox');
 if(!container.hasClass("input")){
  container.addClass("input");
  evt.preventDefault();
}
  else if(container.hasClass('input') && $(obj).closest('.inputBox').length == 0){
    container.removeClass("input");
  }
}