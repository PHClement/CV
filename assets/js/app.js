$(document).ready(function () {

    // API CodeStats
    setTimeout(function () {
        $.getJSON('https://codestats.net/api/users/NHClement', function (data) {
            $('.spinner').hide();
            var languages = data.languages;
            for(index in languages){
                $('#languages').prepend('  <div class="col-lg-4" style="padding: 10px 0">\n' +
                    '                                    <p class="title size-5">' + index + '</p>\n' +
                    '                                    <p class="subtitle size-7 '+ (languages[index].xps < 1000 ? "text-red-500" : languages[index].xps < 5000 ? "text-orange-500" : "text-green-500") +'">' + languages[index].xps + ' lignes tapés.</p>\n' +
                    '                        </div>');
            }
        });
    }, 1000);

});

// Scroll to
function scrollToElement(id) {
    $(document).ready(function () {
        $('html, body').animate({
            scrollTop: ($(id).offset().top)
        }, 500);
    });
}