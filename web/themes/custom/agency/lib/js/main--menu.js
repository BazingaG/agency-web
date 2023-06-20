Drupal.behaviors.global_styling = {
    attach: function (context, settings) {
        var current = window.location.pathname;
        context.querySelectorAll('.nav-bar .nav-item .nav-link').forEach(el, function() {
            console.log(el);
            if(element.getAttribute('href') === '/') {
                element.classList.add('active');
                console.log(element);
            }
        });
    }
}