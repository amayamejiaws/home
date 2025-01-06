$(document).ready(function () {
    // Add dynamic year to footer
    $("#year").text(new Date().getFullYear());

    // Add hover effects to sections
    $(".section").hover(
        function () {
            $(this).css({
                backgroundColor: "#f0f8ff",
                transition: "background-color 0.5s ease",
            });
        },
        function () {
            $(this).css("backgroundColor", "#fff");
        }
    );

    // Animate Hero Text on Scroll
    const hero = $(".hero");
    const observerOptions = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                hero.find("h1").addClass("animate");
                hero.find("p").addClass("animate");
            }
        });
    }, observerOptions);

    if (hero.length) {
        observer.observe(hero[0]);
    }

    // Floating navigation highlight
    const sectionsObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    $("nav ul li a").removeClass("active");
                    $(`a[href="#${entry.target.id}"]`).addClass("active");
                }
            });
        },
        { threshold: 0.7 }
    );

    $("section").each(function () {
        sectionsObserver.observe(this);
    });
    
    // Portfolio details carousel
    $(document).ready(function() {
      var owl = $('.owl-carousel');

      owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3500,
        nav: true,
        margin: 10,
      });

      owl.on('changed.owl.carousel', function(event) {
          var item = event.item.index - 2;     // Position of the current item
          $('h1').removeClass('animated bounce');
     $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated bounce');
      });

    });
})(jQuery);
