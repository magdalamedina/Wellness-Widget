{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab560
\pard\pardeftab560\slleading20\partightenfactor0

\f0\fs24 \cf0 // Goals\
const waterGoal=64, proteinGoal=85, fiberGoal=30;\
\
// Load stored values\
let water=parseInt(localStorage.getItem("water"))||0;\
let protein=parseInt(localStorage.getItem("protein"))||0;\
let fiber=parseInt(localStorage.getItem("fiber"))||0;\
\
// Update function (for both pages)\
function update() \{\
  // Full dashboard elements\
  if(document.getElementById("waterTotal"))\{\
    document.getElementById("waterTotal").innerText=water+" oz";\
    let wp=Math.min((water/waterGoal)*100,100);\
    document.getElementById("waterPercent").innerText=Math.round(wp)+"%";\
    document.getElementById("waterFill").setAttribute("y",100-wp);\
    document.getElementById("waterFill").setAttribute("height",wp);\
\
    document.getElementById("proteinTotal").innerText=protein+" g";\
    let pp=Math.min((protein/proteinGoal)*100,100);\
    document.getElementById("proteinPercent").innerText=Math.round(pp)+"%";\
    const chicken=document.getElementById("chicken");\
    chicken.style.filter="grayscale("+(100-pp)+"%)";\
\
    let filledBeans=Math.floor((fiber/fiberGoal)*10);\
    document.querySelectorAll(".bean").forEach((bean,index)=>\{\
      if(index<filledBeans) bean.classList.add("filled");\
      else bean.classList.remove("filled");\
    \});\
  \}\
\
  // Widget preview elements\
  if(document.getElementById("waterPercentWidget"))\{\
    document.getElementById("waterPercentWidget").innerText=Math.round((water/waterGoal)*100)+"%";\
    document.getElementById("proteinPercentWidget").innerText=Math.round((protein/proteinGoal)*100)+"%";\
    document.getElementById("fiberPercentWidget").innerText=Math.round((fiber/fiberGoal)*100)+"%";\
  \}\
\}\
\
// Buttons (Full dashboard)\
function addWater(a)\{ water+=a; localStorage.setItem("water",water); update(); \}\
function removeWater(a)\{ water=Math.max(0,water-a); localStorage.setItem("water",water); update(); \}\
function addProtein()\{ let v=parseInt(proteinInput.value); if(v)\{ protein+=v; proteinInput.value=""; localStorage.setItem("protein",protein); update(); proteinInput.focus(); \}\}\
function addFiber()\{ let v=parseInt(fiberInput.value); if(v)\{ fiber+=v; fiberInput.value=""; localStorage.setItem("fiber",fiber); update(); fiberInput.focus(); \}\}\
\
// Theme\
function setTheme(t)\{ document.body.className="theme-"+t; localStorage.setItem("theme",t); \}\
if(localStorage.getItem("theme")) setTheme(localStorage.getItem("theme"));\
\
update();}