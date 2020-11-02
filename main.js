$(document).ready(function(){
    var stickyNavTop = $('#navbar').offset().top;
    console.log(stickyNavTop)
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky'); 
        }
    };
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
        stickyNav();
    });
    // search
    $(document).ready(function(){
        $("#input-search").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#navbar ul li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            // $("#navbar ul li a").show()
          });
        });
      });
    // đăng nhập ở navbar
    $("#btn-login").click(function(){
        $('#login').toggle(500);
    });
    // đăng kí trong form
    $("#btn-signup-form-login").click(function(){
        $('#sign-up').show(500);
        $('#login').hide();
    });
    //submit đăng nhập, đăng kí và reset pass trong form
    $("#btn-login-form").submit(function(){
        alert("Submitted");
    });
    $("#btn-sign-up").submit(function(){
        alert("Submitted");
    });
    $("#btn-reset").submit(function(){
        alert("Submitted");
    });
    // reset pass
    $("#reset-pass").click(function(){
        $('#reset').show(500);
        $('#login').hide();
    });
    // ẩn đăng nhập đăng kí
    $("#exit-login").click(function(){
        $('#login').hide(500);
    });
    $("#exit-sign").click(function(){
        $('#sign-up').hide(500);
    });
    $("#exit-reset").click(function(){
        $('#reset').hide(500);
    });
    // phone botton
    $("#phone-bottom").click(function(){
        $("#phone").show(5000);

    });
    $("#exit-phone").click(function(){
        $('#phone').hide(500);
    });
    $("#sub-phone").click(function(){
        alert("Xin cảm ơn , chúng tôi sẻ gọi lại sớm cho bạn !");
        // $('#phone').hide(500);
    });
    // chat bottom
    $("#chat-bottom").click(function(){
        $("#chat").show(5000);

    });$("#exit-chat").click(function(){
        $('#chat').hide(500);
    });
    // giỏ hàng
    $("#btn-cart").click(function(){
        $("#cart").show(5000);

    });
    $("#exit-cart").click(function(){
        $('#cart').hide(500);
    });
});


//    sticky navbar bằng javascript
// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky+62) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
$(document).ready(function(){
    $("#addcart").click(function(){
        alert("helo")
    })
})