const form1 = document.getElementById("myform");
const formDetails = document.getElementById("formDetails");
console.log(formDetails);
var data = [];

async function getData(){
    form1.addEventListener("submit",async (e)=>{
        e.preventDefault();
        const formData = new FormData(form); 
        
        try{
            const res = await fetch('https://httpbin.org/post',{
                method:"POST",
                body: formData,
            })
            let dataJson= await res.json();
            data.push(dataJson);
            // window.location.href("submitContact.html")
        }
        catch{
            console.log("error");
        }
            
    })
}


getData();



// function setFormDetails(data){
//     let details = data[0].form;
//     formDetails.innerHTML = `<h1>${details.country}</h1>`;
// }

// setFormDetails();


// setTimeout(setFormDetails(data),10000);
// window.location.href("submitContact.html")



