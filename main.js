
let para = document.getElementById("data");
let img = document.getElementById("img");
let search=document.getElementById("breedsearch");
const URL = "https://dog.ceo/api/breeds/list/all";



btn.addEventListener('click', async () => {
   

    let search = document.getElementById("breedsearch").value.toLowerCase();
    if(search==="") { para.innerText = ""; img.src = ""; return}

    if(!search) {
        para.innerText = "enter the correct name";
    }
    try {
        
        const response = await fetch(URL);
        // const res = await fetch(url);
        // console.log(res);
        let data = await response.json();
        const breeds = Object.keys(data.message);
        console.log(breeds);
        const filterbreed = breeds.filter(breed => breed.toLowerCase().includes(search));
        console.log(filterbreed);
        const URL2=`https://dog.ceo/api/breed/${search}/images/random`;
        const response2 = await fetch(URL2);
        const data2 = await response2.json();
        img.src = data2.message;
        console.log(data2)
        
        if (filterbreed.length > 0) {

            para.innerText = `The Breeds are ${filterbreed.join(',')}`;

        }
        else {
            para.innerText = "enter the correct one";
        }
    }
    catch (error) {
        console.log(error);
        para.innerText = "404 error";
    }


})