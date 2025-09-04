function openSideHeader() {
    document.querySelector(".side-header").classList.add("side-header-show");
    document.querySelector(".backdrop").classList.toggle("backdrop-show");
    document.querySelector("body").style.overflow = "hidden";
}
function closeSideHeader() {
    document.querySelector(".side-header").classList.remove("side-header-show");

    document
        .querySelector(".side-header-main-menu-mobile")
        .classList.remove("side-header-main-menu-mobile-show");

    document.querySelector(".backdrop").classList.toggle("backdrop-show");

    document.querySelector("body").style.overflow = "scroll";
}

function openSideMobile() {
    document
        .querySelector(".side-header-main-menu-mobile")
        .classList.add("side-header-main-menu-mobile-show");
}

function backToSideHeader() {
    document
        .querySelector(".side-header-main-menu-mobile")
        .classList.remove("side-header-main-menu-mobile-show");
}
 
// ----------- customer service ------------
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function removeCustomerService() {
    document.querySelectorAll(".customer-service1")[0].style.display = "none";
    document.querySelector(".customer-service2").style.display = "none";
}



function dropdownList() {
    document
        .querySelector(".side-header-main-menu2 > li:nth-child(2)")
        .classList.toggle("dropdown-list-show");
    document
        .querySelector(".side-header-main-menu2 > li:nth-child(2) img ")
        .classList.toggle("icon-rotate");
}

// -----------faq section -----------------
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// ------------- responsive footer ------------

function footerDropdownList(e){
    
   
    let a = document.querySelectorAll(".footer-categories>div>ul")
    
    a.forEach((b) => {
        if (b !== e.target.parentElement.parentElement) {
            b.classList.remove('footer-dropdown');
            b.children[0].children[0].classList.remove("icon-rotate")
        }
        })
    e.target.parentElement.parentElement.classList.toggle("footer-dropdown");
    e.target.classList.toggle("icon-rotate");
}


// -------slider js -------------
let SliderButtonclick = 0;
function updateSliderPostion() {
    if (SliderButtonclick < 7 && SliderButtonclick >= 0) {
        document.querySelector(
            ".slider-scroll>ul:nth-child(1)"
        ).style.transform = `translateX(-${SliderButtonclick * 18.85}vw)`;
        document.querySelector(".loader>div").style.width = `${(SliderButtonclick + 1) * 14.2857
            }%`;
    } else if (SliderButtonclick < 0) {
        SliderButtonclick = 0;
    } else {
        SliderButtonclick = SliderButtonclick - 1;
    }
}

function sliderMoveRight() {
    SliderButtonclick = SliderButtonclick + 1;
    updateSliderPostion();
}

function sliderMoveLeft() {
    SliderButtonclick = SliderButtonclick - 1;
    updateSliderPostion();
}

// -------- discount popup ---------

function popupDiscountClose() {
    document.querySelector(".popupDiscount").style.display = "none";
    document.querySelector("body").style.overflow = "scroll";
    document.querySelector(".popup-backdrop").style.display = "none";
}

setTimeout(() => {
    document.querySelector(".popupDiscount").style.display = "block";
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".backdrop").display = "block";
    document.querySelector(".popup-backdrop").style.display = "block";
}, 3000);

// ---------setinterval counter ---------

let reviewsCounter1 = 0;
let VisitorsMonthly = setInterval(() => {
    if (reviewsCounter1 < 950) {
        document.querySelector(
            ".monthlyVisitors>ul>li:nth-child(2)"
        ).innerHTML = `${reviewsCounter1 + 3}K+`;
        reviewsCounter1 = reviewsCounter1 + 3;
    } else {
        clearInterval(VisitorsMonthly);
    }
}, 1);

let reviewsCounter2 = 0;
let soldProduct = setInterval(() => {
    if (reviewsCounter2 < 1400) {
        document.querySelector(".productSold>ul>li:nth-child(2)").innerHTML = `${reviewsCounter2 + 4
            }CR+`;
        reviewsCounter2 = reviewsCounter2 + 4;
    } else {
        clearInterval(soldProduct);
    }
}, 0.001);

let reviewsCounter3 = 0;
let productReview = setInterval(() => {
    if (reviewsCounter3 < 350) {
        document.querySelector(".reviews>ul>li:nth-child(2)").innerHTML = `${reviewsCounter3 + 1
            }CR+`;
        reviewsCounter3 = reviewsCounter3 + 1;
    } else {
        clearInterval(productReview);
    }
}, 0.01);

let reviewsCounter4 = 0;
let happyCustomers = setInterval(() => {
    if (reviewsCounter4 < 500) {
        document.querySelector(".happyCustomer>ul>li:nth-child(2)").innerHTML = `${reviewsCounter4 + 1
            }CR+`;
        reviewsCounter4 = reviewsCounter4 + 1;
    } else {
        clearInterval(happyCustomers);
    }
}, 0.01);
