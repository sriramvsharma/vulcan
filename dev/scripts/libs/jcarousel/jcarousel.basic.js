(function($) {
    $(function() {
        $('.jcarousel').jcarousel({
            wrap: 'circular',
            center: true
        }).jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + " " + '</a>';
                }
            });
    });
})(jQuery);

// $(window).on('load',function(){
//     $('.jcarousel').jcarousel('reload');
//     });