const form = document.getElementById("myform");
// console.log(form);

const formData = new FormData(form); 

form.addEventListener("submit",(e)=>{
    // e.preventDefault();
    console.log(formData)

})