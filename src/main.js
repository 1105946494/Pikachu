import string from "./css";
const demo = document.querySelector("#demo");
const demo2 = document.querySelector("#demo2");
let n = 1;
let time = 10;
let id;
const player = {
  init: () => {
    id = player.play();
    demo.innerHTML = string.substr(0, n);
    demo2.innerText = string.substr(0, n);
    document.querySelector("#bofan").onclick = () => {
      player.pause(), player.play(), player.remove("bofan");
    };
    player.bindEvents();
  },
  remove: (xxx) => {
    const list = {
      zanting: "zanting",
      mansu: "mansu",
      zhongsu: "zhongsu",
      kuaisu: "kuaisu",
      bofan: "bofan",
    };
    for (let key in list) {
      document.getElementById(key).classList.remove("active");
    }
    document.getElementById(xxx).classList.add("active");
  },
  bindEvents: () => {
    const hashtable = {
      "#zanting": player.pause,
      "#mansu": player.solw,
      "#zhongsu": player.normal,
      "#kuaisu": player.fast,
    };
    for (let key in hashtable) {
      document.querySelector(key).onclick = hashtable[key];
    }
  },
  a: () => {
    n += 1;
    if (n > string.length) {
      window.clearInterval(id);
      return;
    }
    demo.innerHTML = string.substr(0, n);
    demo2.innerText = string.substr(0, n);
    demo2.scrollTop = demo2.scrollHeight;
  },
  play: () => {
    return (id = setInterval(player.a, time));
  },
  pause: () => {
    window.clearInterval(id);
    player.remove("zanting");
  },
  solw: () => {
    player.pause();
    time = 100;
    player.play();
    player.remove("mansu");
  },
  normal: () => {
    player.pause();
    time = 50;
    player.play();
    player.remove("zhongsu");
  },
  fast: () => {
    player.pause();
    time = 0;
    player.play();
    player.remove("kuaisu");
  },
};
player.init();
