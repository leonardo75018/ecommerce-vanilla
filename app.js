const card = document.querySelector("#card");
const template = document.querySelector("#template");
const footer = document.querySelector("footer");
const templateFooter = document.querySelector("#footer")
const fragment = document.createDocumentFragment();


document.addEventListener("click", (e) =>{
    if(e.target.matches(".card .btn ")){
        addIncard(e)
    }
    if(e.target.matches(".btn-success")){
        increProductQuantity(e)
    }
    if(e.target.matches(".btn-danger")){
        decreProductQuantity(e)
    }
    
} );

let cardObjects = []

const addIncard = (e) =>{

    const product = {
        title : e.target.dataset.product,
        id : e.target.dataset.product,
        quantity : 1,
        price : parseInt(e.target.dataset.price)
    }

    const index = cardObjects.findIndex(item => item.id === product.id
    )

    if(index === -1){
        cardObjects.push(product)
    }else{
        cardObjects[index].quantity ++
    }

    showCrad()
    showFooter()
};


const showCrad  = (array) =>{
    card.textContent = ""

    cardObjects.forEach(product =>{
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent =product.title;
        clone.querySelector(".badge").textContent =product.quantity;
        clone.querySelector("div .lead span").textContent = product.price * product.quantity;
        clone.querySelector(".btn-danger").dataset.id = product.id;
        clone.querySelector(".btn-success").dataset.id = product.id;


        fragment.appendChild(clone)
    })
    card.appendChild(fragment)
};

const showFooter = () => {
    footer.textContent = ""

    const total = cardObjects.reduce(
        (acc,current) => acc + current.quantity * current.price,0
    )

    console.log(total)


}

const increProductQuantity = (e) =>{
    cardObjects.map(item => {
        if(item.id === e.target.dataset.id){
            item.quantity ++
        }
        return item
    })

    showCrad()
};

const decreProductQuantity = (e) =>{
    cardObjects.filter(item =>{
        if(item.id === e.target.dataset.id){
           if(item.quantity > 0){
             item.quantity --;
             if(item.quantity === 0) return;
             return item;
           }
        }else{return item};
    });

    showCrad();
};




