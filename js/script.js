let divClient = document.querySelector("#myclient");

let massClient = [];
let t = new XMLHttpRequest();
t.open("GET", "client_list.json", true);
t.responseType = "json";
t.send();
t.onload = function () {
  massClient = t.response;
};

setTimeout(function () {
  for (let oneclient of massClient) {
    let div = document.createElement("div");
    div.innerHTML = `<h5>${oneclient.url}</h5><div class="cat">${oneclient.cat}</div><div class="desc">${oneclient.description}</div>`;
    divClient.appendChild(div);
    console.log(oneclient);
  }
}, 1000);
