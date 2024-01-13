let url='https://fakestoreapi.com/products';

let Root = document.getElementById('root')
async function getProducts(){
    let response = await fetch(url)
    let produces = await response.json();
    console.log(produces)
    let goods = produces.map ((produce) => {
        return`
        <div class="box">
          <div class="product-img">
          <img src=${produce.image} alt='pp' class='pmg'>
          </div>
        <div>
        <p>${produce.title.substr(0, 12)}</p>
        <p>${produce.price}</p>
        </div>
        </div>`
    }).join("")
    Root.innerHTML = goods;
}
getProducts()