let arr = [
  {
    songName: "jale 2",
    dic: " ",
    url: "./songs/jale 2.mp3",
    img: "https://i.pinimg.com/564x/58/dd/2c/58dd2c02a1f05b1b8ef1498dc329cf64.jpg",
  },
  {
    songName: "sidhu",
    dic: "",
    url: "./songs/last.mp3",
    img: "https://i.pinimg.com/474x/91/2a/35/912a35b7fed07e59e473c7bfd8541d46.jpg ",
  },
  {
    songName: "raju punjabi",
    dic: "",
    url: "./songs/1.mp3",
    img: "https://i.pinimg.com/474x/05/c9/9d/05c99d947b060bef09ae8d81363e2f09.jpg",
  },
  {
    songName: "sidhu",
    dic: "",
    url: "./songs/2.mp3",
    img: "https://i.pinimg.com/564x/fd/6b/cf/fd6bcfcbb392228dc33561f408481f38.jpg",
  },
  {
    songName: "295",
    dic: "",
    url: "./songs/3.mp3",
    img: "https://i.pinimg.com/474x/d5/0c/04/d50c04fbf29a384c941d21bdd68b6196.jpg",
  },
  {
    songName: "je koi ske ne",
    dic: " ",
    url: "./songs/4.mp3",
    img: "https://i.pinimg.com/564x/fc/82/dd/fc82dd41f57cf69f40e64faea220180b.jpg",
  },
  {
    songName: "je koi ske ne",
    dic: "",
    url: "./songs/5.mp3",
    img: "https://i.pinimg.com/474x/af/fc/80/affc80b5b14cc55140126e9497a5b284.jpg",
  },
  {
    songName: " sidhu 😎",
    dic: "  ",
    url: "./songs/6.mp3",
    img: "https://i.pinimg.com/474x/44/da/99/44da9992a9535bf94f74c566f1c905f8.jpg",
  },
  {
    songName: "levale✌️",
    dic: "",
    url: "./songs/7.mp3",
    img: "https://i.pinimg.com/474x/74/7c/97/747c977a19ff5993dabd6e0d44808943.jpg",
  },
  {
    songName: "bhul ja",
    dic: "",
    url: "./songs/8.mp3",
    img: "https://i.pinimg.com/474x/d5/a8/07/d5a80750f44b6d46f5e3343863f2864f.jpg",
  },
  {
    songName: "sidhu new ",
    dic: "",
    url: "./songs/9.mp3",
    img: " https://i.pinimg.com/474x/d5/a8/07/d5a80750f44b6d46f5e3343863f2864f.jpg",
  },
  {
    songName: "pawoer",
    dic: "",
    url: "./songs/10.mp3",
    img: " https://i.pinimg.com/474x/e1/cb/29/e1cb290fffda8b91d3c68be6a659fea4.jpg",
  },
];

let songlist = document.querySelector(".songList");
let img = document.querySelector(".image");
let back = document.querySelector("#back");
let play = document.querySelector("#play");
let next = document.querySelector("#next");

let audio = new Audio();
let slectedSong = 0;

function mainfun() {
  let culter = "";
  arr.forEach((elem, index) => {
    culter += `<div class="list" id='${index}'>
    <div>
      <img class="invert" src="./svg/music.svg" alt="" />
    </div>
    <div>
      ${elem.songName} <br />
      ${elem.dic}
    </div>
    <div>
      <img class="invert" src="./svg/play.svg" alt="" />
    </div>
  </div>`;

    audio.src = arr[slectedSong].url;
    songlist.innerHTML = culter;
    img.style.backgroundImage = `url(${arr[slectedSong].img})`;
  });
}

mainfun();

songlist.addEventListener("click", (dets) => {
  slectedSong = dets.target.id;
  play.innerHTML = `<i class="ri-pause-line"></i>`;
  flog = 1;

  mainfun();

  audio.play();
});

let flog = 0;
play.addEventListener("click", () => {
  if (flog == 0) {
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    mainfun();
    audio.play();
    flog = 1;
  } else {
    play.innerHTML = `<i class="ri-play-line"></i>`;
    mainfun();
    audio.pause();
    flog = 0;
  }
});

next.addEventListener("click", () => {
  if (slectedSong < arr.length -1){
    slectedSong++;
    mainfun();
    audio.play();

  } 
    else{
      next.style.opacity = '0.3'
    }
});
back.addEventListener('click',()=>{
  if(slectedSong > 0){
    slectedSong --
    mainfun()
    audio.play()
    
  }
  else{
    back.style.opacity = '0.3'
  }
})
