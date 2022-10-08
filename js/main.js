setTimeout(() => {
    document.querySelector('.preload').style.display = "none";
}, 2240);



window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
// responsive bar navigation
var navigation =document.querySelector('nav');
var openbtn = document.querySelector('.menu-btn');
var closebtn = document.querySelector('.close-btn');

openbtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closebtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
/******************************************************************************************************************/


const people = [
    { name: 'fortnite'},
    { name: 'dayZ: Battle Royale'},
    { name: 'the Culling'},
    { name: 'unturned'},
    { name: 'eRules of Survivalvan'},
    { name: 'rust'},
    { name: 'free Fire'},
    { name: 'battle Royal Strike Survivor'},
    { name: 'black Survival'},
    { name: 'pixel’s Unknown Battleground'},
    { name: 'vast Survival'},
    { name: 'h1Z1: King of the Kill'},
    { name: 'ark: Survival Evolved'},
    { name: 'minecraft: Hunger games'},
    { name: 'last Man Standing'},
    { name: 'Fortnite'},
    { name: 'call of Duty Mobile'},
    { name: 'civilization VI: Red Death'},
    { name: 'gta Online: Motor Wars'},
    { name: 'totally Accurate Battlegrounds'},
    { name: 'apex Legends'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
];

const searchInput = document.querySelector('.input');
searchInput.addEventListener("input", (e) => {
    let value = e.target.value;
    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase();
    } else {
        value = value.trim().toUpperCase();
    }
});
const clearButton = document.getElementById('clear');
function setList(results){
    for (const person of results){
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');
        const text = document.createTextNode(person.name);
        resultItem.appendChild(text);
        list.appendChild(resultItem);
    }
};
searchInput.addEventListener("input", (e) => {
    let value = e.target.value;
    if (value && value.trim().length > 0){
         value = value.trim().toLowerCase();
        setList(people.filter(person => {
            return person.name.includes(value);
        }));
    }
});
function clearList(){
    while (list.firstChild){
        list.removeChild(list.firstChild);
    }
};
function noResults(){
    const error = document.createElement('li');
    error.classList.add('error-message');
    const text = document.createTextNode('No results found. Sorry!');
    error.appendChild(text);
    list.appendChild(error);
};
function setList(results){
    clearList();
    for (const person of results){
        const resultItem = document.createElement('li');
        resultItem.classList.add('result-item');
        const text = document.createTextNode(person.name);
        resultItem.appendChild(text);
        list.appendChild(resultItem);
    }
    if (results.length === 0 ){
        noResults();
    }
};
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = "https://www.google.com/search?q=" + userData;
            linkTag.setAttribute("href", webLink);
            console.log(webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = '<li>'+ data +'</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}
function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = "https://www.google.com/search?q=" + selectData;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}


const suggestions = [
    'fortnite',
    'dayZ: Battle Royale',
    'the Culling',
    'unturned',
    'eRules of Survivalvan',
    'rust',
    'free Fire',
    'battle Royal Strike Survivor',
    'black Survival',
    'pixel’s Unknown Battleground',
    'vast Survival',
    'h1Z1: King of the Kill',
    'ark: Survival Evolved',
    'minecraft: Hunger games',
    'last Man Standing',
    'Fortnite',
    'call of Duty Mobile',
    'civilization VI: Red Death',
    'gta Online: Motor Wars',
    'totally Accurate Battlegrounds',
    'apex Legends',
    'violet',
    'wyatt',
    'rol',
    'yadri',
    'pubj',
];