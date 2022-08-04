const card = document.querySelector("#card")
const template = document.querySelector("#template")
const fragment = document.createDocumentFragment()
const btnsButtons = document.querySelectorAll(".card .btn")


let cardObjects = {
   
};

const addIncard = (e) =>{

    const product = {
        title : e.target.dataset.product,
        id : e.target.dataset.product,
        quantity : 1
    }


    if(cardObjects.hasOwnProperty(product.id)){
        product.quantity = cardObjects[product.title].quantity + 1
    }

    cardObjects[product.title] = product

    console.log(cardObjects)

    showCrad()
};


const showCrad  = () =>{
    card.textContent = ""

    Object.values(cardObjects).forEach(product =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent =product.title;
        clone.querySelector(".badge").textContent =product.quantity

        fragment.appendChild(clone)
    })
    card.appendChild(fragment)
}



btnsButtons.forEach(btn => btn.addEventListener("click",addIncard));




