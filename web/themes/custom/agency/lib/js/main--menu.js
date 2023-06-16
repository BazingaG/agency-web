Drupal.behaviors.global_script = {
    attach: function (context, settings) {
        var current = window.location.pathname;
        context.querySelectorAll('.nav-bar .nav-item .nav-link').forEach(element, function() {
            console.log(element);
            if(element.getAttribute('href') === '/') {
                element.classList.add('active');
                console.log(element);
            }
        });
    }
}