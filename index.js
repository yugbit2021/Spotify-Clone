
let songIndex=0;
let audioElement=new Audio('OST.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songsName: "Ost-Goblin",filePath:"songs/1.mp3", coverPath:"cover/O.jpg"},
    {songName:"Asus", filePath:"songs/2.mp3", coverPath:"cover/O.jpg"},
    {songName:"Bit", filePath:"songs/3.mp3", coverPath:"cover/O.jpg"},
    {songName:"Vivo", filePath:"songs/4.mp3", coverPath:"cover/O.jpg"},
    {songName:"Realme", filePath:"songs/5.mp3", coverPath:"cover/O.jpg"},
]
songItems.forEach(element);
function element(i){

    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName
}


masterplay.addEventListener('click',()=>{
   if(audioElement.paused||audioElement.currentTime<=0){
       audioElement.play();
       masterplay.classList.remove('fa-circle-play');
       masterplay.classList.add('fa-circle-pause');
   } else{
    audioElement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-circle-play');
   }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;  
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})



