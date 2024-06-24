function scrollToHome() {
    var aboutSection = document.querySelector('.home');
    aboutSection.scrollIntoView({behavior: "smooth"})
    
}

function scrollToAbout() {
    var aboutSection = document.querySelector('.about');
    aboutSection.scrollIntoView({behavior: "smooth"})
    
}

function scrollToEducation() {
    var aboutSection = document.querySelector('.education');
    aboutSection.scrollIntoView({behavior: "smooth"})
    
}
function scrollToPortfolio() {
    var aboutSection = document.querySelector('.portfolio');
    aboutSection.scrollIntoView({behavior: "smooth"})
    
}


/* ************** typing animation ****************** */
var typed = new Typed(".typing", {
    strings:["","an Actuary", "a Web designer", "a Web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


/* ********************************* Aside ************************** */
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let  i=0; i<totalNavList; i++)
        {
            const a = navList[i].querySelector("a");
            a.addEventListener("click", function(){
                this.classList.add("active")
            })
        }


document.querySelector(".hire-me").addEventListener("click", function()
{
    showSection(this);
    updateNav(this);
})


const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Use HTTPS
const httpsOptions = {
  key: fs.readFileSync('path/to/private/key.pem'),
  cert: fs.readFileSync('path/to/certificate.pem')
};

// Middleware to redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url);
  }
});

// Your routes and other middleware
// ...

https.createServer(httpsOptions, app).listen(443, () => {
  console.log('Server running on port 443');
});


