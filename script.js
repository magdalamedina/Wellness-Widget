{\rtf1\ansi\ansicpg1252\cocoartf2513
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Goals\
const waterGoal=64, proteinGoal=85, fiberGoal=30;\
\
// Load stored values\
let water=parseInt(localStorage.getItem("water"))||0;\
let protein=parseInt(localStorage.getItem("protein"))||0;\
let fiber=parseInt(localStorage.getItem("fiber"))||0;\
\
function update()\{\
  // Dashboard\
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
    document.getElementById("chicken").style.filter="grayscale("+(100-pp)+"%)";\
\
    let filledBeans=Math.floor((fiber/fiberGoal)*10);\
    document.querySelectorAll(".bean").forEach((bean,index)=>\{\
      if(index<filledBeans) bean.classList.add("filled");\
      else bean.classList.remove("filled");\
    \});\
  \}\
\
  // Widget\
  if(document.getElementById("waterPercentWidget"))\{\
    document.getElementById("waterPercentWidget").innerText=Math.round((water/waterGoal)*100)+"%";\
    document.getElementById("proteinPercentWidget").innerText=Math.round((protein/proteinGoal)*100)+"%";\
    document.getElementById("fiberPercentWidget").innerText=Math.round((fiber/fiberGoal)*100)+"%";\
  \}\
\}\
\
// Buttons\
function addWater(a)\{ water+=a; localStorage.setItem("water",water); update(); \}\
function removeWater(a)\{ water=Math.max(0,water-a); localStorage.setItem("water",water); update(); \}\
function addProtein()\{ let v=parseInt(document.getElementById("proteinInput").value); if(v)\{ protein+=v; document.getElementById("proteinInput").value=""; localStorage.setItem("protein",protein); update(); \} \}\
function addFiber()\{ let v=parseInt(document.getElementById("fiberInput").value); if(v)\{ fiber+=v; document.getElementById("fiberInput").value=""; localStorage.setItem("fiber",fiber); update(); \} \}\
\
// Theme\
function setTheme(t)\{ document.body.className="theme-"+t; localStorage.setItem("theme",t); \}\
\
update();}