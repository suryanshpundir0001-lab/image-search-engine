// jai SitaRam 

const apiKey = "SI5tOp4aSQDGwQslSUT9z3NSJuen6RqmNd6QccRVWAAsY8hMfLsxntD3";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
                    
    // const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    // const response = await fetch(url);
    // const data = await response.json();
    const url = `https://api.pexels.com/v1/search?query=${keyword}&page=${page}&per_page=12`;

    const response = await fetch(url, {
        headers: {
            Authorization: apiKey
        }
});

const data = await response.json();

console.log(response.status);
console.log(data);

    if(page === 1){
        searchResult.innerHTML = "";
    }
    //console.log(data);
    const results = data.photos;

    

    results.map((result) =>{
        // const image = document.createElement("img");
        // // image.src = result.urls.small;
        // //imageLink.href = result.links.html;
        // imageLink.href = result.url;
        // image.src = result.src.medium;
        // imageLink.href = result.url;
        // const imageLink = document.createElement("a");
        // imageLink.href = result.links.html;
        // imageLink.target= "_blank";

        // imageLink.appendChild(image);
        // searchResult.appendChild(imageLink);
        const image = document.createElement("img");
        image.src = result.src.medium;

        const imageLink = document.createElement("a");
        imageLink.href = result.url;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
            })
            showMoreBtn.style.display = "block";


}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();

});

showMoreBtn.addEventListener("click" , ()=>{
    page++;
    searchImages();

})
