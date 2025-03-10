

// $(document).ready(function(){

//     if(window.matchMedia('(max-width: 991px)').matches){
//         $(".fi").click(function(){
//             $(".menu1").slideToggle(100)
//         });
//     }else{
//         $(".dropdown-div").hover(()=>{
//             $(".menu1").slideToggle(100)
//         });
//     }
// });






$(document).ready(function(){
    $(".back-to-top").css("transition", "transform 300ms ease-in-out");
    $(window).on("scroll", ()=>{
        if($(document).scrollTop() > 0){
            if($(document).scrollTop() > 350){
                $(".back-to-top").css("transform", "translate(0px, 0px)");
            }
            $(".navbar").css({'background':'white'});
            $(".nav-link, .fi-nav").css({'color': 'black'});
        }
        else{
            $(".navbar").css({'background': 'transparent'});
            $(".nav-link, .fi-nav").css({'color': 'white'});
            $(".back-to-top").css("transform", "translate(100px, 0px)");
        }
        
    });

    

    $(".dropdown-div1").click(function(){
        $(".menu1").toggle(400)
    });
    $(".dropdown-div2").click(function(){
        $(".menu2").toggle(400)
    });
    $(".dropdown-div3").click(function(){
        $(".menu3").toggle(400)
    });
    $(".dropdown-div4").click(function(){
        $(".menu4").toggle(400)
    });
    $(".dropdown-div5").click(function(){
        $(".menu5").toggle(400)
    });

    $(".tech-icon").find("img").css("transition", "transform 300ms ease-in-out");

    $(".tech-icon").hover(   
        function()
        {
            $(this).find("img").css("transform", "translate(0px, 10px)");
        },
        function()
        {
            $(this).find("img").css("transform", "translate(0px, 0px)");
        }
    );

    


    

});
