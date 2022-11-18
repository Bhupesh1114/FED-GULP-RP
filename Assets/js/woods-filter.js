const allWoods = require("./allwoods.json");
const carouselsData = require("./carousels-data.json");

const filterWoods = () => {
  $(document).ready(function () {
    $.each(allWoods, function (_, { image, data_tab, name }) {
      $(".woods-texture__images").append(`
            <img data-tab=${data_tab} data-for-tab="${name ? name : ""}" class="woods-texture__images__img" src=${image ? image : ""} alt="wood_pic" />`);
    });
    $(".woods-texture__btns__btn").each(function () {
      $(this).on("click", function () {
        if (this.dataset.forTab === "all") {
          $(".woods-texture__images__img").hide().fadeIn(1000);
          $(".woods-texture__btns__btn").removeClass("active");
          $(`[data-for-tab="${this.dataset.forTab}"]`).addClass("active");
        } else {
          $(".woods-texture__btns__btn").removeClass("active");
          $(".woods-texture__images__img").hide();
          $(`[data-tab="${this.dataset.forTab}"]`).fadeIn(1000);
          $(`[data-for-tab="${this.dataset.forTab}"]`).addClass("active");
        }
      });
    });

    $.each(carouselsData, function(_,{image1,image2,image3, name}){
        const id = name.replace(" ", "-");
        $(".carousel-container").append(`
        <div data-tab="${name ? name : ""}" id="${id}" class="carousel slide m-auto jquery-carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="carousel__img" src=${image1 ? image1 : ""} class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img class="carousel__img" src=${image2 ? image2 : ""} class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img class="carousel__img" src=${image3 ? image3 : ""} class="d-block w-100" alt="...">
          </div>
        </div>
        <div class="btn-container">
        <button class="btn-container__prev-btn" type="button" data-bs-target="#${id}" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="btn-container__next-btn" type="button" data-bs-target="#${id}" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
        </div>
      </div>
        `)
    })
    $(".woods-texture__images__img:nth-child(4)").addClass("green-border")
    $(".jquery-carousel").each(function(){
       $(this).hide();
    })
    $(".jquery-carousel:nth-child(4)").show();
    $(".woods-texture__images__img").each(function(){
        $(this).on("click",function(){
            $(".woods-texture__images__img").each(function(){
                $(this).removeClass("green-border");
                $(".jquery-carousel").each(function(){
                    $(this).hide();
                 })
            })
          $(this).addClass("green-border");
          $(`[data-tab="${this.dataset.forTab}"]`).show();
        })
    })
  });
};

export default filterWoods;
