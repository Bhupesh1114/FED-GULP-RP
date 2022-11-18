
const displayAjaxCards = () => {
    let count = 0;
    $(document).ready(function(){
        $.ajax({
            type: 'GET',
            url: "https://jsonplaceholder.typicode.com/photos",
            success:function(data){
            $(".j-card-wrapper__loading").hide();
             $.each(data,function(_,{url, title}){
             $(".j-card").append(`
             <div class="j-card__images">
             <img class="j-card__images__img" src=${url ? url : ""} alt="pic"/>
             <p class="j-card__images__text">${title ? title : ""}</p>
             </div>
             `)
             count++;
             if(count === 15){
                 return false;
             }
             })
            },
            error : function(error){
                $(".j-card-wrapper__loading").hide();
                $(".j-card-wrapper__error").show();
            }
        });
    });
}


export default displayAjaxCards;