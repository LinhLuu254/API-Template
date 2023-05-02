
document.querySelector("#alaska_industry").addEventListener("click", (e) => {
  console.log("check buttons");
  let correct_buttons = document.querySelectorAll("[correct]");
  let checked_buttons = document.querySelectorAll(
    "input[name=alaska]:checked"
  );
  if (checked_buttons.length > 3) {
    document.querySelector("#correct_alaska_industry").textContent =
      "Hey, you can only pick 3!";
    return false;
  }

  console.log("checked buttons", checked_buttons);
  let score = 0;
  for (let i = 0; i < correct_buttons.length; i++) {
    for (let j = 0; j < checked_buttons.length; j++)
      if (correct_buttons[i] === checked_buttons[j]) 
      
      score += 1;
  }
  document.querySelector(
    "#correct_alaska_industry"
  ).textContent = `You scored ${score}/3. Major industry of Alaska are: oil, gas, and fishing `;
});

document.querySelector("#nebraska_industry").addEventListener("click", (e) => {
  console.log("check buttons");
  let correct_buttons = document.querySelectorAll("[correct]");
  let checked_buttons = document.querySelectorAll(
    "input[name=nebraska]:checked"
  );
  if (checked_buttons.length > 3) {
    document.querySelector("#correct_nebraska_industry").textContent =
      "Hey, you can only pick 3!";
    return false;
  }

  console.log("checked buttons", checked_buttons);
  let score = 0;
  for (let i = 0; i < correct_buttons.length; i++) {
    for (let j = 0; j < checked_buttons.length; j++)
      if (correct_buttons[i] === checked_buttons[j]) 
      
      score += 1;
  }
  document.querySelector(
    "#correct_nebraska_industry"
  ).textContent = `You scored ${score}/3. Major industry of Nebraska are: Agriculture, manufacturing, and healthcare `;
});

document.querySelector("#which_anwser1").addEventListener("click", (e) => {
  let selectedAnwser = document.querySelector('input[name="anwser1"]:checked');


  if (selectedAnwser.id === "b"){

  let container = document.getElementById('correct_anwser1');
  container.replaceChildren();

  let message = document.createElement("h4");
  message.innerHTML= "Bravo!";
  message.style.color = "#228B22"

  document.getElementById("correct_anwser1").appendChild(message);
  }

  else{

  let container = document.getElementById('correct_anwser1');
  container.replaceChildren();

  let error = document.createElement("h4");
  error.innerHTML = "Opp! Try Again!"
  error.style.color = "#A52A2A"

  document.getElementById("correct_anwser1").appendChild(error);
  }
  });

  document.querySelector("#which_anwser2").addEventListener("click", (e) => {
  let selectedAnwser2 = document.querySelector('input[name="anwser2"]:checked');

  if (selectedAnwser2.id === "c2"){

    let container = document.getElementById('correct_anwser2');
    container.replaceChildren();

    let message = document.createElement("h4");
    message.innerHTML= "You're so smart"
    message.style.color = "#228B22"

    document.getElementById("correct_anwser2").appendChild(message);
    
  }

  else{
    let container = document.getElementById('correct_anwser2');
    container.replaceChildren();

    let error = document.createElement("h4");
    error.innerHTML = "Opp! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser2").appendChild(error);
}
});

document.querySelector("#which_anwser3").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser3"]:checked');

  if (selectedAnwser4a.id === "d3"){

  let container = document.getElementById('correct_anwser3');
  container.replaceChildren();

  let message = document.createElement("h4");
  message.innerHTML= "Correct!"
  message.style.color = "#228B22"

  let content = document.createElement("p");
  content.innerHTML = "Minnesota is known as the 'Land of 10,000 Lakes' and it has the highest number of golfers per capita in the U.S.";

  //Style
  content.style.fontSize = "20px";
  content.style.backgroundColor ="#00FFFF";
  content.style.border ="solid 2px black";
  content.style.padding ="15px";

  document.getElementById("correct_anwser3").appendChild(message);
  document.getElementById("correct_anwser3").appendChild(content);
  }

  else{
  let container = document.getElementById('correct_anwser3');
  container.replaceChildren();

  let error = document.createElement("h4");
  error.innerHTML = "Opp! Try Again!"
  error.style.color = "#A52A2A"

  document.getElementById("correct_anwser3").appendChild(error);
  }
});

document.querySelector("#which_anwser4").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser4"]:checked');

  if (selectedAnwser4a.id === "a"){

      let container = document.getElementById('correct_anwser4');
      container.replaceChildren();

      let message = document.createElement("h4");
      message.innerHTML= "Correct!"
      message.style.color = "#228B22"

      let content = document.createElement("p");
      content.innerHTML = "Montana is known as the 'Treasure State' and has the largest migratory elk herd in the U.S.";
      
      //Style
      content.style.fontSize = "20px";
      content.style.backgroundColor ="#00FFFF";
      content.style.border ="solid 2px black";
      content.style.padding ="15px";

      document.getElementById("correct_anwser4").appendChild(message);
      document.getElementById("correct_anwser4").appendChild(content);
  }

  else{
      let container = document.getElementById('correct_anwser4');
      container.replaceChildren();
      
      let error = document.createElement("h4");
      error.innerHTML = "Nice guess! Try Again!"
      error.style.color = "#A52A2A"

      document.getElementById("correct_anwser4").appendChild(error);
  }
});

document.querySelector("#which_anwser5").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser5"]:checked');
  
  if (selectedAnwser4a.id === "d"){
  
      let container = document.getElementById('correct_anwser5');
      container.replaceChildren();
  
      let message = document.createElement("h4");
      message.innerHTML= "You're a genius!"
      message.style.color = "#228B22"
  
      let content = document.createElement("p");
      content.innerHTML = "Rhode Island is the smallest state in the United States, with a total land area of just over 1,000 square miles";
      
      //Style
      content.style.fontSize = "20px";
      content.style.backgroundColor ="#00FFFF";
      content.style.border ="solid 2px black";
      content.style.padding ="15px";
  
      document.getElementById("correct_anwser5").appendChild(message);
      document.getElementById("correct_anwser5").appendChild(content);
  }
  
  else{
      let container = document.getElementById('correct_anwser5');
      container.replaceChildren();
      
      let error = document.createElement("h4");
      error.innerHTML = "Nice guess! Try Again!"
      error.style.color = "#A52A2A"
  
      document.getElementById("correct_anwser5").appendChild(error);
  }
  });

document.querySelector("#which_anwser6").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser6"]:checked');

  if (selectedAnwser4a.id === "a"){

      let container = document.getElementById('correct_anwser6');
      container.replaceChildren();

      let message = document.createElement("h4");
      message.innerHTML= "Bravo!"
      message.style.color = "#228B22"

      let content = document.createElement("p");
      content.innerHTML = "South Dakota has the largest natural underground cave system in the world, Jewel Cave";
      
      //Style
      content.style.fontSize = "20px";
      content.style.backgroundColor ="#00FFFF";
      content.style.border ="solid 2px black";
      content.style.padding ="15px";

      document.getElementById("correct_anwser6").appendChild(message);
      document.getElementById("correct_anwser6").appendChild(content);
  }

  else{
      let container = document.getElementById('correct_anwser6');
      container.replaceChildren();
      
      let error = document.createElement("h4");
      error.innerHTML = "Opp! Try Again!"
      error.style.color = "#A52A2A"

      document.getElementById("correct_anwser6").appendChild(error);
  }
});

document.querySelector("#which_anwser7").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser7"]:checked');

  if (selectedAnwser4a.id === "b"){

      let container = document.getElementById('correct_anwser7');
      container.replaceChildren();

      let message = document.createElement("h4");
      message.innerHTML= "You're the best!"
      message.style.color = "#228B22"

      let content = document.createElement("p");
      content.innerHTML = "Wyoming is known as the 'Equality State' and is the least populous state in the U.S., with the lowest population density.";
      
      //Style
      content.style.fontSize = "20px";
      content.style.backgroundColor ="#00FFFF";
      content.style.border ="solid 2px black";
      content.style.padding ="15px";

      document.getElementById("correct_anwser7").appendChild(message);
      document.getElementById("correct_anwser7").appendChild(content);
}

else{
    let container = document.getElementById('correct_anwser7');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Nice guess! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser7").appendChild(error);
}
});

document.querySelector("#which_anwser8").addEventListener("click", (e) => {
  let selectedAnwser4a = document.querySelector('input[name="anwser8"]:checked');

  if (selectedAnwser4a.id === "b"){

      let container = document.getElementById('correct_anwser8');
      container.replaceChildren();

      let message = document.createElement("h4");
      message.innerHTML= "You're the best!"
      message.style.color = "#228B22"

      let content = document.createElement("p");
      content.innerHTML = "The Freedom Trail is a 2.5-mile-long (4.0 km) path through Boston that passes by 16 locations significant to the history of the United States, marked largely with brick.";
      
      //Style
      content.style.fontSize = "20px";
      content.style.backgroundColor ="#00FFFF";
      content.style.border ="solid 2px black";
      content.style.padding ="15px";

      document.getElementById("correct_anwser8").appendChild(message);
      document.getElementById("correct_anwser8").appendChild(content);
}

else{
    let container = document.getElementById('correct_anwser8');
    container.replaceChildren();
    
    let error = document.createElement("h4");
    error.innerHTML = "Nice guess! Try Again!"
    error.style.color = "#A52A2A"

    document.getElementById("correct_anwser8").appendChild(error);
}
});