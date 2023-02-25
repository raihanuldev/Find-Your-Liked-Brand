const loadPhone =async (inputValue)=>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhone(data.data);
}
const displayPhone = (phones) =>{
    const phoneContainer = document.getElementById('card-container');
    phoneContainer.innerText = ''
    // Thts's means when You will Search new Data,Then Remove Old Data.

    // display show only 20 phoens
    phones= phones.slice(0,20)

    // display nai Interface

    const notFound = document.getElementById('not-found');
    if(phones.length ===0){
        notFound.classList.remove('d-none')
    }
    else{
        notFound.classList.add('d-none')
    }

    // display show 
    for(const phone of phones){
        // console.log(phone);
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div class="card p-2">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">Brand: ${phone.phone_name}</h4>
                <h5 class="card-title">Brand: ${phone.brand}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(newDiv);
    }
    
}

document.getElementById('search-btn').addEventListener('click', function(){
    const inputValueElement = document.getElementById('search-filed');
    const inputValue = inputValueElement.value;
    inputValueElement.value = '';
    // console.log(inputValue);
    loadPhone(inputValue);

})

loadPhone('iphone');