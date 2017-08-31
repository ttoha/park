$( document ).ready(function() {

$('[data-number]').on('mouseover', function(){
    var number = $(this).attr('data-number');
    $('#imgmap').attr('src', 'img/geoplan'+ number +'.jpg')
})
$('[data-number]').on('mouseout', function(){
    $('#imgmap').attr('src', 'img/geoplan.jpg')
})

    $('.main-slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<div data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><span></span></div>',
        nextArrow: '<div data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><span></span></div>'
    });

    $('video').mediaelementplayer({
        alwaysShowControls: false,
        videoVolume: 'horizontal',
        features: ['playpause','progress','volume','fullscreen']
    });
    $('#simple-menu').sidr({
      name: 'sidr',
      side: 'right'
    });
    $('.small-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg></span></div>',
        nextArrow: '<div data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"><g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg></span></div>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },{
              breakpoint: 480,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
$("#carousel").slidingCarousel({
     squeeze : 500,
     animate : 250,
     shadow  : false
 });
    $('.all-cottage-item-hover').on('mouseover', function(){
        var par = $(this).parent('.all-cottage-item').outerHeight();
        $(this).parent('.all-cottage-item').css('height', par);
        $(this).css('position','absolute');
        $(this).find('.extra').show();
    });
    $('.all-cottage-item-hover').on('mouseout', function(){
        $(this).css('position','static');
    });
});

var map;
var contactMap;

function initMap() {


    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 50.518847, lng: 30.1685},
        zoom: 14,
        disableDefaultUI: true,
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#F5F5F5"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#cbcbcb"
            }, {
                "visibility": "on"
            }]
        }]
    });

    var marker = new google.maps.Marker({
        position: {lat: 50.518628, lng: 30.132360},
        map: map,
        title: 'Михайловский Сад',
        icon: 'img/google-place.png'
    });
}

function initMapContact() {

    contactMap = new google.maps.Map(document.getElementById('mapContact'), {
        center: {lat: 50.521264, lng: 30.131515},
        zoom: 14,
        disableDefaultUI: true,
        styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "weight": 1.5
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#315439"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#315439"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]
    });

    var marker = new google.maps.Marker({
        position: {lat: 50.518628, lng: 30.132360},
        map: contactMap,
        title: 'Михайловский Сад',
        icon: 'img/google-place.png'
    });
    var contentString = '<div id="content">'+
          '<h2 class="contacts-title">Офис продаж</h2>'+
          '<div class="contacts-content">'+
          '<div class="contacts-content-phone">+38 (044) 123-45-67</div>'+
          '<div class="contacts-content-mail">info@mihalovskypark.com.ua</div>'+
          '</div>'+
          '</div>'
    var infowindow = new google.maps.InfoWindow({
       content: contentString,
       backgroundColor: 'transparent',
       maxWidth: 400
    });

google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '50px'});


    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({display: 'none'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({display: 'none'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });



    infowindow.open(contactMap, marker);
}
