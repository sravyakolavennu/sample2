/*function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}

getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
})*/

function loadJSON(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }  else {
        reject(new Error('error'));
      }
    })
  })
}
var newFile=loadJSON("data.json");
  newFile.then(data=>{
    console.log(data);
    carrer(data.carrer);
    education(data.education);
    skills(data.skills);
    achievements(data.achievements);
  })

  var childTwo=document.querySelector(".childTwo");
  function carrer(carrerObj){
    var carrerHeading=document.createElement("h2");
    carrerHeading.textContent="Career Objective";
    childTwo.appendChild(carrerHeading);
    var hr=document.createElement("hr");
    childTwo.appendChild(hr);
    var p=document.createElement("p");
    p.textContent=carrerObj.info;
    childTwo.appendChild(p);
  }

  function education(edu){
    var educationHeading=document.createElement("h2");
    educationHeading.textContent="Education Qualifications";
    childTwo.appendChild(educationHeading);
    var hr=document.createElement("hr");
    childTwo.appendChild(hr);
    for (var i=0;i<edu.length;i++){
      eduH3=document.createElement("h3");
      eduH3.textContent=edu[i].degree;
      childTwo.appendChild(eduH3);
      var eduUl=document.createElement("ul");
      var eduLi=document.createElement("li");
      eduLi.textContent=edu[i].institute;
      eduUl.appendChild(eduLi);
      childTwo.appendChild(eduUl);
      var eduLi2=document.createElement("li");
      eduLi2.textContent=edu[i].data;
      eduUl.appendChild(eduLi2);
      childTwo.appendChild(eduUl);
    }
  }

  function skills(skillInfo){
    var skillsHeading=document.createElement("h2");
    skillsHeading.textContent="Technical Skills";
    childTwo.appendChild(skillsHeading);
    var hr=document.createElement("hr");
    childTwo.appendChild(hr);
    var skillstable=document.createElement("table");
    skillstable.border="1";
    childTwo.appendChild(skillstable)
    var tableData="";
    for(var i=0; i<skillInfo.length; i++){
      tableData+="<tr><td>"+skillInfo[i].title+"</td><td>"+skillInfo[i].info+"</td></tr>"
    }
    skillstable.innerHTML=tableData;
}
    function achievements(ach){
      var skillsHeading=document.createElement("h2");
      skillsHeading.textContent="Achievements";
      childTwo.appendChild(skillsHeading);
      var hr=document.createElement("hr");
      childTwo.appendChild(hr);
      var ul=document.createElement("ul");
      childTwo.appendChild(ul);
      var li="";
    for(var i=0;i<ach.length;i++){
    li+="<li>"+ach[i].achieveData+"</li>";
    ul.innerHTML=li;
  }
  }
