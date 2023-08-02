const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

var timeout;
var timeout2;




function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: '-10',
    opacity:0,
    duration: 2,
    ease: Expo.easeInOut
  })

  .to(".bounding-elem", {
    y: 0,
    ease: Expo,
    delay: -1.2,
    stagger: .1
  })

  .from("#landing-page-footer, #side-block", {
    y: -10,
    opacity: 0,
    duration: 1.5,
    delay: -.8,
    ease: Expo.easeInOut
  })
}

function circleDistort() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function(dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.6,1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.6,1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
    timeout = setTimeout(function() {
      document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100)
  });
}

function circleMouseFollower(xscale, yscale) {
  window.addEventListener("mousemove", function(dets) {
    document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleDistort();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function(dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
      left: 0,
      top: 0
    });

    gsap.to(elem.querySelector("h1"), {
      marginLeft: 0,
      opacity: .6 
    });
  });

  elem.addEventListener("mousemove", function(dets) {
    gsap.to(elem.querySelector("h1"), {
      marginLeft: 70,
      opacity: .3 
    });
  });

  elem.addEventListener("mouseleave", function(dets) {
    gsap.to(document.querySelector("#minicircle"), {
      height: 15,
      width: 15,
      opacity: 1,
      fontSize: 0
    });
  });

  elem.addEventListener("mousemove", function(dets) {
    gsap.to(document.querySelector("#minicircle"), {
      height: 60,
      width: 60,
      opacity: .9,
      fontSize: 15
    });
  });

  elem.addEventListener("mousemove", function(dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;

  
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff - 130,
        left: dets.clientX - 170,
        rotate: gsap.utils.clamp(-20, 20, diffrot*.8)
      });
  });
});



function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  // Format the time with leading zeros if needed
  const formattedTime = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes} IST`;

  const timeDiv = document.querySelector('.time');
  timeDiv.textContent = formattedTime;
}

// Update the clock immediately and every minute
updateClock();
setInterval(updateClock, 60000); // Update every 60 seconds (1 minute)


document.getElementById("c1").addEventListener("mouseenter", () => {
  var tl2 = gsap.timeline();
  
    tl2.to(".i1", {
      duration: .5,
      y: 20,
      opacity: 1,
      ease: "power2.out",
    });
    
    tl2.from(".i1", {
      y: -30
    })
    tl2.to(".i1", {
      duration: .5,
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });
});


document.getElementById("c2").addEventListener("mouseenter", () => {
  var tl2 = gsap.timeline();
  
    tl2.to(".i2", {
      duration: .5,
      y: 20,
      opacity: 1,
      ease: "power2.out",
    });
    
    tl2.from(".i2", {
      y: -30
    })
    tl2.to(".i2", {
      duration: .5,
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });
});


var loader = document.getElementById("preloader");

setTimeout(function() {
  loader.style.height = "0vh";
  loader.style.fontSize = "0px";
}, 1000);