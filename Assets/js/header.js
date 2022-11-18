
const showSearchInput = () => {
    $(document).ready(function () {
     $(".header__first-block__search-container__btn").on("click",function(){
        $(".header-search-from").toggleClass("display-block");
        $(".header-form__input").focus();
     })
     $(".header__form__btn > .btn-close").on("click", function(){
        $(".header-search-from").removeClass("display-block")
     })
    })
}

const showHeaderAccordian = () => {
    $(document).ready(function () {
    $(".header-accordian__menu").on("click", function(){
       $(".header__third-block").toggleClass("display-block");
       $(".header-accordian__menu__btn__icon").toggleClass("rotate-arrow")
    })

    $(".header__third-block__text__wrapper").each(function(){
        $(this).on("click",function(){
        $(".header__third-block__text__wrapper__links").each(function(){
            $(this).removeClass("display-block");
        })
            $(`[data-tab="${this.dataset.forTab}"]`).addClass("display-block");
        }
        
        )  
         
    }
    
    )
    })
}


export {showSearchInput,showHeaderAccordian};
