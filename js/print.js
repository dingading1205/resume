const $ = (q) => document.querySelector(q);
const $$ = (q) => Array.from(document.querySelectorAll(q));
const $on = (el, ev, fn) => {
  Array.isArray(el)
    ? el.forEach((o) => $on(o, ev, fn))
    : el.addEventListener(ev, fn);
  return el;
};

let i = 1;
let msg = document.getElementById("hello").innerHTML;

const type = () => {
  if (i === msg.length) {
    i = 1;
  } else {
    document.getElementById("hello").innerText = msg.substring(0, i++);
  }
};

setInterval(type, 180);


// const link = (name) => {
//   var a = document.createElement("a");
//   a.setAttribute("href", "url/" + name + ".pdf");
//   a.setAttribute("download", name);
//   a.click();
//   console.log(a);
// };

// $('#lebenslauf').click(function (){
//     console.log("aa")

// $('#lebenslauf').on("click", e => link("lebenslauf"));

// $on($("#lebenslauf"), "click", (e) => link("lebenslauf"));
