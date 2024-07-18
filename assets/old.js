const text = "§ Olá!§ Meu nome é Gustavo.§ Eu faço aplicações web.";

(function run(){
  let i = 0;
  const writeText = (t, itv) => {
    if(i >= t.length)
      return clearInterval(itv);
    if(t[i] === "§")
      document.querySelector("#cli").innerHTML += "<br> ";
    else
      document.querySelector("#cli").innerHTML += t[i];
    i++
  }
  let itv = setInterval(writeText, 100, text);
})();
