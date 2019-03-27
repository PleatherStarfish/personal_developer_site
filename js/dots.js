// Script thanks to Phil at https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript
$(window).on('scroll', function(){
    const s = $(window).scrollTop(),
          d = $(document).height(),
          c = $(window).height();

    const scrollPercent = (s / (d - c)) * 100;

    if (scrollPercent < 50) {
        document.getElementById('dot1').style.backgroundColor = '#868686';
        document.getElementById('dot2').style.backgroundColor = '#FFFFFF';
    }
    else {
        document.getElementById('dot1').style.backgroundColor = '#FFFFFF';
        document.getElementById('dot2').style.backgroundColor = '#868686';
    }
})