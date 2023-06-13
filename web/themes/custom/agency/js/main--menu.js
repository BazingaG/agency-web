Drupal.behaviors.menu_script = {
    attach: function (context, settings) {
        console.log('Hi poonam from main menu');
        var current = window.location.pathname;
        context.querySelectorAll('.nav-bar .nav-item .nav-link').forEach(element => {
            console.log(element);
            if(element.getAttribute('href') === '/') {
                element.classList.add('active');
                console.log(element);
            }
        });
    }
}