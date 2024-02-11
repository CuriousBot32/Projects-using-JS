//local reviews data
const reviews = [
 {
    id: 1,
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    img: "susan-smith.jpg",
    text: "I work as a web developer. I am a software engineer who loves to create websites as well as apps for people. I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas."
 },
 {
    id: 2,
    name: "Peter Jones",
    job: "WEB DESIGNER",
    img: "peter-jones.jpg",
    text: " I work as a web designer. I have been working as a web designer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects."
 },
 {
    id: 3,
    name: "Sara Jones",
    job: "INTERN",
    img: "sara-jones.jpg",
    text: "I am a hard-working and driven individual who isn't afraid to face a challenge. I'm passionate about my work and I know how to get the job done. I would describe myself as an open and honest person who doesn't believe in misleading other people and tries to be fair in everything I do."
 },
 {
    id: 4,
    name: "Bill Anderson",
    job: "THE BOSS",
    img: "bill-anderson1.jpg",
    text: "I am the Boss and I can adapt to new situations and changes quickly and easily. I have a friendly personality with my team and also enjoy interacting with others. I am a hard worker leader and am always putting in the extra effort for my team to achieve the goals."
 }
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener("DOMContentLoaded",  function(){
   showPerson()
});

//show person based on item
function showPerson(){
   const item = reviews[currentItem];
   img.src = item.img;
   author.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.text;
}

//show next person
nextBtn.addEventListener("click", function(){
   currentItem++;
   if(currentItem>reviews.length-1){
      currentItem = 0;
   }
   showPerson(currentItem);
}); 

//show previous person
prevBtn.addEventListener("click", function(){
   currentItem--;
   if(currentItem<0){
      currentItem = reviews.length-1;
   }
   showPerson(currentItem)
});

//show random person
randomBtn.addEventListener("click", function(){
   currentItem = Math.floor(Math.random()*reviews.length);
   console.log(currentItem);
   showPerson();
});