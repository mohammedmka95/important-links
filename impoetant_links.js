// chrome: //extensions//
let ul_list = document.getElementById("ul_list");

let link_input = document.getElementById("link_input");
let link_input_label = document.getElementById("link_input_label");
let add_link = document.getElementById("btn_add_link");

let link_tab_label = document.getElementById("link_tab_label");
let add_tab_link = document.getElementById("btn_add_tab_link");

let array_links_list = [];
let array_labels_list = [];
var localStorage_links = JSON.parse(localStorage.getItem("array_links_list"));
var localStorage_labels = JSON.parse(localStorage.getItem("array_labels_list"));

if (localStorage_links && localStorage_labels)
{
    array_links_list = localStorage_links
    array_labels_list = localStorage_labels
    leader()
}
//Add Link
add_link.addEventListener('click', function(){
    let val_link = link_input.value;
    let val_link_label = link_input_label.value;
    if(val_link !=="" &&  val_link_label !==""){
        array_links_list.push("https://"+val_link);
        array_labels_list.push(val_link_label);
        localStorage.setItem("array_links_list", JSON.stringify(array_links_list))
        localStorage.setItem("array_labels_list", JSON.stringify(array_labels_list))
        link_input.value = "";
        link_input_label.value = "";
        leader();
        console.log(localStorage.getItem("array_links_list"));
        console.log(localStorage.getItem("array_labels_list"));
    }
    
})
// Add tab link
add_tab_link.addEventListener('click', function(){
    let val_label = link_tab_label.value;
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let val_tab_url = tabs[0].url;
        if(val_tab_url !=="" &&  val_label !==""){
            array_links_list.push(val_tab_url);
            array_labels_list.push(val_label);
            localStorage.setItem("array_links_list", JSON.stringify(array_links_list))
            localStorage.setItem("array_labels_list", JSON.stringify(array_labels_list))
            link_tab_label.value = "";
            leader();
            console.log(localStorage.getItem("array_links_list"));
            console.log(localStorage.getItem("array_labels_list"));
        }
        
    })
    
    
})

function leader(){

    let list_li = "";
    for (let index = 0; index < array_links_list.length; index++) {
        const key = array_labels_list[index];
        const element = array_links_list[index];
        list_li += `
        <li>
            <a target = '_blank' href='${element}'> ${key} </a> 
            <button class="buttons" onclick="deleteItem()" id="${index}" >Delete</button>   
        </li>
       `
    }
    ul_list.innerHTML = list_li;
}

//delete link
ul_list.addEventListener('dblclick', function(e) {
    const idd = e.target.id;
    if (idd > -1) {
        array_labels_list.splice(idd, 1);
        array_links_list.splice(idd, 1);
        }
        localStorage.setItem("array_links_list", JSON.stringify(array_links_list))
        localStorage.setItem("array_labels_list", JSON.stringify(array_labels_list))
        leader();
});

//Delete all links
let deletAll = document.getElementById('deletAll');
deletAll.addEventListener('dblclick', function(e) {
    array_links_list = [];
    array_labels_list = [];
    localStorage.clear();
    leader();
});

// Html tabs

let linkList_tab = document.getElementById('linkList_tab')
let addLink_tab = document.getElementById('addLink_tab')
let addTabLink_tab = document.getElementById('addTabLink_tab')

let linkList = document.getElementById('linkList')
let addLink = document.getElementById('addLink')
let addTabLink = document.getElementById('addTabLink')


linkList_tab.addEventListener('click',function() {
    addLink.style.display = "none";
    addTabLink.style.display = "none";
    linkList.style.display = "block";

    addLink_tab.className = addLink_tab.className.replace(" active", "");
    addTabLink_tab.className = addTabLink_tab.className.replace(" active", "");
    linkList_tab.className += " active";
})

addLink_tab.addEventListener('click',function() {
    addTabLink.style.display = "none";
    linkList.style.display = "none";
    addLink.style.display = "block";

    linkList_tab.className = linkList_tab.className.replace(" active", "");
    addTabLink_tab.className = addTabLink_tab.className.replace(" active", "");
    addLink_tab.className += " active";
})

addTabLink_tab.addEventListener('click',function() {
    linkList.style.display = "none";
    addLink.style.display = "none";
    addTabLink.style.display = "block";

    linkList_tab.className = linkList_tab.className.replace(" active", "");
    addLink_tab.className = addLink_tab.className.replace(" active", "");
    addTabLink_tab.className += " active";
})



