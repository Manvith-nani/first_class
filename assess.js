let search=document.querySelector("input");
let data=[];

let d =document.querySelector("div");
const fetchData=async()=>{
    try{
        const a =await fetch("https://dummyjson.com/products");
        const b =await a.json();
        data=b.products;
        console.log(data);
        displayData(data);
    }catch(error){
        console.log(error);
    }
}
const displayData=(data)=>{
    const products=data.map((each)=>{
        return `
        <div class="product">
        <h2>${each.title}</h2>
        <p>Rating: ${each.rating.toFixed(2)}</p>
        <img src="${each.thumbnail}" alt="${each.title}"  />
        </div>
        `
    }).join("");
    d.innerHTML=products;
}
const applyFilter=(data,filter)=>{
    if(filter==="all"){
        return data;
    }else{
        return data.filter((each)=>{
            return each.category===filter;
        })
    }
}
search.addEventListener("input",(e)=>{
    const searchTerm=e.target.value.toLowerCase();
    const filteredData=data.filter((each)=>{
        return each.title.toLowerCase().includes(searchTerm);
    })
    displayData(filteredData);
})
fetchData();