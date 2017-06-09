console.log('wat')
console.log($)

// var forEach = function(arr, cb){
// for(var i = 0 ; i < arr.length; i++){
//   {cb(arr[i], i, arr)}
// }
// }




let appContainer = document.querySelector(".page-content")
console.log(appContainer)



function controllerRouter(){
   let currentRoute = window.location.hash.slice(1)

   if(currentRoute === ''){
      appContainer.innerHTML =`
    <div class="portfolio-image col-md-6">
      <img src="./braden_holmes_960.jpg">
    </div>
    <div class="biography col-md-5">
      <h3>Braden Holmes</h3>
      <p>Hello there! I'm a former liquor slinger and grounds worker
         turned front-end developer! I recently graduated from The Iron Yard's 3 month
         bootcamp and am looking to expand my horizons. Apart from that, I also have a
         deep love for music (I play guitar in a band), archery, the outdoors, and
         the arts. I enjoy the act of creating new things and keeping myself
         as sharp as possible.
      </p>
      <p>
         There is a link to my resume below this bio,
         and a couple of examples of the work I've done can be found on the "Projects"
         page. My contact info can be found at the bottom of this page. Hope to hear from
         you soon!
       </p>
       <p class="resume"><a href="https://drive.google.com/file/d/0B1eZwfOdQFhpdnZhX2daU1VnbkU/view?usp=sharing" target="_blank">My Resume</a><p>
     </div>

      <footer class="home-footer col-md-10">
        <h3>Contact</h3>
        <p>Phone: (615)604-9328</p>
        <p>Email: bradenmadison@yahoo.com</p>
        <p>Github: https://github.com/bradenholmes92</p>
      </footer>
      `
   }
   if(currentRoute === "projects"){
     appContainer.innerHTML = `
     <div class="bbc-container text-center">
      <img src="./BBC.png">
     <h1>BBC Radio</h1>
     <p>This project pulls from the BBC Radio API and displays a list of the
     top tracks featured on two different BBC playlists, as well as
     the featured track of the day.</p>
     <h3>Technologies:</h3>
       <p>Backbone.js</p>
       <p>HTML</p>
       <p>SASS</p>
     <p><a href="https://github.com/bradenholmes92/assignment-20" target="_blank">See project code here</a><p>
     </div>
     <div class="brews-container text-center">
      <img src="./brewsmuse.png">
     <h1>BrewsMuse</h1>
     <p>BrewsMuse is a mobile-first application that allows you to find
      bars in your local area, and find out what they have on tap for the
      given day, week, or month. You can also see if bars are hosting any live music,
      and what the date and cover charge will be. New vendors/bar owners can create an account
      and add their bar, tap selection, and music to the pre-existing list of bars on the application.
      It was the final project of The Iron Yard cohort I recently graduated. To complete this project,
      I worked with fellow front end engineer, Andrea Coaker, and two back end engineers:
      Parker Tankersley and Colby Burke.
     </p>
     <h3>Technologies:</h3>
       <p>Bootstrap</p>
       <p>React.js</p>
       <p>Backbone.js</p>
     <p><a href="https://github.com/andicoaker/brews-muse" target="_blank">See project code here</a><p>
     </div>
     `
  }



}

controllerRouter();
window.addEventListener('hashchange', controllerRouter)
