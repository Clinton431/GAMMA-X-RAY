// preloader
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');
});
        // Team 
$(function(){
$("#team-members").owlCarousel({
    items:2,
    autoplay:true,
    smartspeed:700,
    loop:true,
    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"><i/>']
});
});
//   Progress Bars 
    $(function(){
            $("#progress-elements").waypoint(function(){

        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            },1000);
            
        });
        this.destroy();
    }, {
        offset:'bottom-in-view'
});
    });
    //   Responsive Tabs 
    $(function(){
        $("#services-tabs").responsiveTabs({
            animation: 'slide',
        });
    });
        // Portfolio 

        $(window).on('load',function(){
            // Initialize isotope 
            $("#isotope-container").isotope({
            })
            // filter items on button click 
            $("#isotope-filters").on('click','button',function(){
            //   Get filter value 
            var filterValue = $(this).attr('data-filter');
            // filter portfolio 
        $("#isotope-container").isotope({
            filter: filterValue
         });
            // Active button 
            $("#isotope-filters").find('.active').removeClass('active');
            $(this).addClass('active')

     });
});
        // Magnifier 
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
      });
});
    // Testimonial 
    $(function(){
        $("#testimonial-slider").owlCarousel({
            items:1,
            autoplay:false,
            smartspeed:700,
            loop:true,
            autoplayHoverPause:true,
            nav:true,
            dots:false,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"><i/>']
        });
        });

        // Stats 
        $(function() {
            $(".counter").counterUp({
                delay: 10,
                time: 2000,
            });
        });
            // Clients 
    $(function(){
        $("#clients-list").owlCarousel({
            items:6,
            autoplay:false,
            smartspeed:700,
            loop:true,
            autoplayHoverPause:true,
            nav:true,
            dots:false,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"><i/>'],
            // responsive: {
            //      // breakpoint from 0 up
            //      0: {
            //         items: 1
            //      },
            //      // breakpoint from 480 up
            //      480: {
            //         items: 2
            //      }
            // }
             });
        }); 
        // Google map 
$(window).on('load',function() {
        // Map variables
    var addressString = '230 Broadway,NY,NewYork 10007,USA';
    var myLatlng = {lat:40.714320,lng:-74.005790};
        // 1.Render Map 
        var map = new google.maps.Map(document.getElementById('map'),{
            zoom:11,
            center:myLatlng
        });
        // 2.Add Marker 
        var marker = new google.maps.Marker({
            position:myLatlng,
            map: map,
            title:"Click To See Address"
        })
        // 3.Add Info Window 
        var infowindow = new google.maps.InfoWindow({
            content: addressString
        });
            // Show info window when user clicks marker
        marker.addListener('click',function(){
            InfoWindow.open(map,marker);
        });
    }); 
        // Navigation bar 
        // Show and hide White Navigation 
$(function(){
    // Show/hide navba on page load 
    showHideNav ();

    $(window).scroll(function(){
        // show and hide nav on window scroll 
        showHideNav ()
    });

    function showHideNav (){
        
        if ( $(window).scrollTop() >50 ) {
            // Show white nav 
            $("nav").addClass("white-nav-top");

                // Show dark logo 
            $(".navbar-brand img").attr("src","./IMAGES/Untitled.png");

        } else { 
             
            // Hide navigation bar 
            $("nav").removeClass("white-nav-top");

            
                // Show logo 
                $(".navbar-brand img").attr("src","./IMAGES/CLIN.png");
        }
    }
});
    // Smooth navigation 
$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        // get section id like #about, #team, #services etc 
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top -65
        },1250, "easeInOutExpo");

    });
});