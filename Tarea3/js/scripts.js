document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();


    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);


    document.querySelectorAll('.activator').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.card');
            card.classList.toggle('revealed');
        });
    });

    document.querySelectorAll('.card-reveal .card-title i').forEach(function(icon) {
        icon.addEventListener('click', function() {
            const card = this.closest('.card');
            card.classList.remove('revealed');
        });
    });
});
