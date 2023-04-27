
let stateData;

const process = (data) => {
        
let  info = data[0].states;

stateData = info; 

console.log(data[0].states);

info.forEach((state) => {
    

    let stateOption = `<option>${state.name}</option>`;
    

    console.log(stateOption);
    $("#statesList").append(stateOption);
});
};

const getData = () => {
$.ajax({
    type: "GET",
    url:"https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states",
    dataType: "json",
    success: function (result, status, xhr) {
    process(result);
    },
    error: function (xhr, status, error) {
    alert(
        "Result: " +
        status +
        " " +
        error +
        " " +
        xhr.status +
        " " +
        xhr.statusText
    );
    },
});
};

const setUp = () =>{
        let listBox = $("<fieldset><legend>Choose the state you want to read:</legend><select id='statesList' name='statesList' Size=25></fieldset>");
        $("#lists").append(listBox);

        getData();

        $("#popup").fadeOut();

        listBox.on("click", function () {

                // when click happens, get the index of the item selected
                let index = $("select[name='statesList'] option:selected").index();
                console.log("index is", index);
             
                $("#popup").fadeIn();

                let name = `${stateData[index].name}`;
                let container = document.getElementById('name');
                container.replaceChildren();
                $("#name").append(name);

                let nickname= ` <ul>
                        <li><span class="nickname">Nickname:</span> ${stateData[index].nickname}</li>
                        <li>Statehood: ${stateData[index].date_of_statehood}</li>
                        </ul>`;
                let container0 = document.getElementById('nickname');
                container0.replaceChildren();
                $("#nickname").append(nickname);

                let motto = `<span class="motto">"${stateData[index].motto}"</span>`;
                let container1 = document.getElementById('motto');
                container1.replaceChildren();
                $("#motto").append(motto);

                let stateImg = document.createElement("img");
                stateImg.src = stateData[index].image;
                let container2 = document.getElementById('imgFlag');
                container2.replaceChildren();
                $("#imgFlag").append(stateImg);

                let info =`<ul>
                        <li>Captital: ${stateData[index].capital}</li>
                        <li>Landmass: ${stateData[index].landmass}</li>
                        <li>Population: ${stateData[index].population}</li>
                        </ul>
                        <h4>Major industry</h4>
                        <p>${stateData[index].majorindustry}</p>`;

                let container3 = document.getElementById('info');
                container3.replaceChildren();
                $("#info").append(info);

                let symbol = `<h4>Symbols</h4>
                        <ul>
                        <li><span class="bird">Bird:</span> ${stateData[index].symbols[0].value}</li>
                        <li><span class="flower">Flower:</span> ${stateData[index].symbols[1].value}</li>
                        <li><span class="tree">Trees:</span> ${stateData[index].symbols[2].value}</li>
                        </ul>`;
                let container4 = document.getElementById('symbols');
                container4.replaceChildren();
                $("#symbols").append(symbol);

                let tourist = `
                <h4>Tourist Attraction</h4>
                <p>${stateData[index].touristattractions}</p>`;

                let container5 = document.getElementById('tourist');
                container5.replaceChildren();
                $("#tourist").append(tourist);
                
                
              }); 
              
};

$(document).ready(setUp);