
const norcFormValidation = () => {
    const norc_form_section = document.querySelector(".norc-form");
    if(norc_form_section){

    
    const norc_form = norc_form_section.querySelector("form");

    const norc_form_inputs = norc_form_section.querySelectorAll(".norc-form__container__input");
    

    norc_form.addEventListener("submit", (event) => {
     event.preventDefault();
     
     norc_form_inputs.forEach(input => {
     if(!input.value.length){
        input.classList.add("form-validation-border");
        input.classList.remove("input-mb");
        const label = norc_form_section.querySelector(`[data-tab="${input.dataset.forTab}"]`);
        label.classList.add("form-validation-color");
        const exclamationIcon = norc_form_section.querySelector(`#${input.dataset.forTab}Exclamation`);
        exclamationIcon.classList.add("display-block");
        const warning =  norc_form_section.querySelector(`#${input.dataset.forTab}Warning`);
        warning.classList.add("display-block");
     }
     })
    })

    norc_form_inputs.forEach(input => {
        input.addEventListener("keyup", () => {
         input.classList.remove("form-validation-border");
         const label = norc_form_section.querySelector(`[data-tab="${input.dataset.forTab}"]`);
         const checkIcon = norc_form_section.querySelector(`#${input.dataset.forTab}Check`);
         const exclamationIcon = norc_form_section.querySelector(`#${input.dataset.forTab}Exclamation`);
         const warning =  norc_form_section.querySelector(`#${input.dataset.forTab}Warning`);
         input.classList.add("input-mb");
         warning.classList.remove("display-block");
         exclamationIcon.classList.remove("display-block");
         checkIcon.classList.add("display-block");
         label.classList.remove("form-validation-color");
        })
      })
    }
}

export default norcFormValidation;
