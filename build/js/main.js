const initApp = () => {

    const hambergerBtn = document.getElementById('humberger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const togglemenu = () => {

        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');

        hambergerBtn.classList.toggle('toggle-btn');

        mobileMenu.classList.toggle('animate-open-menu');

    }

    hambergerBtn.addEventListener('click', togglemenu);
    mobileMenu.addEventListener('click', (e) => {

        if (e.target.tagName === 'A') {
            togglemenu();
        }

    });

}

document.addEventListener('DOMContentLoaded', initApp);