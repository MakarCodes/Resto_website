//////// burger button //////////
document.querySelector('.burger-nav').addEventListener('click', () => {
    document.querySelector('.nav-home').classList.toggle('active-burger');
})


/////////////// pop-up /////////////////

const popUpCloseButton = document.querySelector('.close-icon');
popUpCloseButton.addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = 'none';
})

const popUpReservationCloseButton = document.querySelector('.close-reservation');
popUpReservationCloseButton.addEventListener('click', () => {
    document.querySelector('.reservation-pop-up').style.display = 'none';
})

const bookingButton = document.querySelectorAll('.booking');

bookingButton.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.reservation-pop-up').style.display = 'flex';
        document.querySelector('.reservation-pop-up').scrollIntoView();
    })
})

const reservationForm = document.querySelector('.form-container form');

reservationForm.addEventListener('submit', e => {
    e.preventDefault();
    reservationForm.reset();
    alert('You booked table!')
    document.querySelector('.reservation-pop-up').style.display = 'none';
})

/////////////////////////////// scrolls ////////////////////////////////

scrollToTopButton = document.querySelector('.scroll');

window.addEventListener('scroll', () => {
    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    let headerContainerHeight = document.querySelector('.main-banner').offsetHeight;
    const buttonDistanceToTop = document.querySelector('.scroll').offsetTop;
    let distance = window.pageYOffset + buttonDistanceToTop;
    if (viewportWidth > 1024) {
        if(distance > headerContainerHeight) {
            scrollToTopButton.classList.add('animateScrollFadeIn');
        } else if (distance < headerContainerHeight) {
            scrollToTopButton.classList.remove('animateScrollFadeIn');
        }
    }

})
scrollToTopButton.addEventListener('click', () => scrollToSection(0));

document.querySelector('.main-banner').addEventListener('click', e => {
    if(e.target.tagName === 'A') {
            let selector = e.target.getAttribute('data-scroll'); 
            let distanceToTop = document.querySelector(selector).offsetTop;

            const heightOfMenu = document.querySelector('.outer-menu-container').offsetHeight;
            let distanceToScroll = distanceToTop - heightOfMenu * 2 ;

            const heightofParallaxContainer = document.querySelector('.parallax-img-one').offsetHeight;
            let distanceToScrollforParallax = distanceToTop + heightofParallaxContainer / 2 - heightOfMenu * 2 ;

            let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

            if (viewportWidth > 768) {
                if(e.target.classList.contains('scroll-parallax')) {
                    scrollToSection(distanceToScrollforParallax);
                } else {
                    scrollToSection(distanceToScroll);
                }
            } else if (viewportWidth <= 768) {
                scrollToSection(distanceToTop);
            }
    }
})

function scrollToSection (distance) {
    window.scroll({
        top: distance, 
        behavior: 'smooth'
      })
}

////////////////////////////// main nav animation /////////////////////////////////////
 
window.addEventListener('scroll', function() {
    const heightOfHeaderBar = document.querySelector('.header-bar-container').offsetHeight;
    const heightOfMenu = document.querySelector('.outer-menu-container').offsetHeight;
    const distance = heightOfHeaderBar + heightOfMenu;

    if(window.pageYOffset >= distance) {
    document.querySelector('.outer-menu-container-sticky').classList.add('moveDown');
    } else if(window.pageYOffset < distance) {
        document.querySelector('.outer-menu-container-sticky').classList.remove('moveDown');
    }
 });


 //////////////////////// tabs script //////////////////////////////////////////////

 class Tabs {
     constructor(container){
         this.container = container;
         this.tabs = container.querySelectorAll('.trigger');
     }

     init() {
         this.tabs.forEach(tab => {
             tab.addEventListener('click', e => {
                 this.toggleTabs(e);
                 this.toggleContent(e);
             })
         })
     }

     toggleTabs(e){
         this.tabs.forEach(tab => tab.classList.remove('active'));
         e.target.classList.add('active');
     }

     toggleContent(e){
         this.container.querySelectorAll('.content').forEach(item => {
             item.classList.remove('active');
         });
         const selector = e.target.getAttribute('data-target');
         const content = this.container.querySelector(selector);
         content.classList.add('active');
     }
 }

const tabsAppetizers = new Tabs(document.querySelector('.menu-tabs-appetizer'));
tabsAppetizers.init();
const tabsMain = new Tabs(document.querySelector('.menu-tabs-main'));
tabsMain.init();
const tabsDesserts = new Tabs(document.querySelector('.menu-tabs-dessert'));
tabsDesserts.init();


//////////////////////////////////////////////// dropdowns script /////////////////////////////////////

class Dropdown {
    constructor (container) {
        this.container = container;
        this.trigger = container.querySelector('.trigger-dropdown');
        this.icon = container.querySelector('.trigger-dropdown').querySelector('.dropdown-icon');
        this.content = container.querySelector('.dropdown-content');
    }

    init() {
        this.trigger.addEventListener('click', () => {
            this.icon.classList.toggle('active');
            this.content.classList.toggle('active');
            if(this.icon.classList.contains('active')) {
                this.icon.innerHTML = `<i class="fas fa-plus"></i>`;
            } else {
                this.icon.innerHTML =  `<i class="fas fa-minus"></i>`;
            }
        })
    }
}

const allDropdowns = document.querySelectorAll('.dropdown');

allDropdowns.forEach(drop => {
    const singleDropdown = new Dropdown(drop);
    singleDropdown.init();
})



