$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $('.nav').toggleClass('showing');
    });

    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
           
          ]
      });

   
      // contact form
  function validate() { 
    let name = 
      document.getElementById("name").value; 
    let subject = 
      document.getElementById("subject").value; 
    let phone = 
      document.getElementById("phone").value; 
    let email = 
      document.getElementById("email").value; 
    let message = 
      document.getElementById("message").value; 
    let error_message = 
      document.getElementById("error_message"); 

    error_message.style.padding = "10px"; 

    let errors = []; 

    if (name.length < 5) { 
      errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
      errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
      errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
      errors.push( 
        "Please Enter a valid Email");} 
    if (message.length <= 10) { 
      errors.push( 
        "Please Enter More Than 10 Characters");} 

    if (errors.length > 0) { 
      error_message.innerHTML = 
        errors.join("<br>"); 
      return false;} 
    else { 
      alert( 
        "Form Submitted Successfully!"); 
      return true;}}



});