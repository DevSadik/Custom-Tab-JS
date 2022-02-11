// get all elements

const tab_nav = document.querySelectorAll('.clone-tab-content .tab-menu ul li a');
const tab_pane_all = document.querySelectorAll('.clone-tab-content .tab-body .tab-pane');

tab_nav.forEach( item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        tab_nav.forEach( item => {
            item.classList.remove('active')
        });

        item.classList.add('active');

        const tab_pane = document.querySelector(this.getAttribute('href'));

        tab_pane_all.forEach( item => {
            item.classList.remove('active')
        });

        tab_pane.classList.add('active');

    });
});