document.addEventListener("DOMContentLoaded", () => {
  let forms = document.querySelector("#forms");
  let inputs = document.querySelector("#inputer");
  let container = document.querySelector("#container");
  let getItems = localStorage.getItem("items");
  let items = [];
  forms.onsubmit = () => {
    let list = document.createElement("li");
    container.append(list);
    list.innerText = inputs.value;
    items.push(inputs.value);
    inputs.value = "";
    console.log(items);
    localStorage.setItem("items", items);
    return false;
  };
  if ((getItems !== null)) {
    items = [...getItems];
    getItems = getItems.split(",");
    getItems.map((x) => {
      let list = document.createElement("li");
      container.append(list);
      list.innerText = x;
    });
    return false;
  };
});
setInterval(()=>{
  scrollBy(1000,0)
},1000)