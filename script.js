
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
        let listBox = $("<fieldset><p class='instruction'>'click to each state to view info'</p><select id='statesList' name='statesList' Size=15></fieldset>");
        $("#lists").append(listBox);

        getData();

        $(".origin").fadeIn();

        $("#popup").fadeOut();

        listBox.on("click", function () {

                // when click happens, get the index of the item selected
                let index = $("select[name='statesList'] option:selected").index();
                console.log("index is", index);

                $(".origin").fadeOut();
                $("#popup").fadeIn();

                let name = `<h1>${stateData[index].name}</h1>`;
                let container = document.getElementById('name');
                container.replaceChildren();
                $("#name").append(name);

                let motto = `<span class="motto">"${stateData[index].motto}"</span>`;
                let container1 = document.getElementById('motto');
                container1.replaceChildren();
                $("#motto").append(motto);

                let nickname= ` <h4>Fast Facts</h4>
                        <ul>
                        <li><span class="label">Nickname:</span> ${stateData[index].nickname}</li>
                        <li><span class="label">Statehood:</span> ${stateData[index].date_of_statehood}</li>
                        </ul>`;
                let container0 = document.getElementById('nickname');
                container0.replaceChildren();
                $("#nickname").append(nickname);

                
                let stateImg = document.createElement("img");
                stateImg.src = stateData[index].image;
                let container2 = document.getElementById('imgFlag');
                container2.replaceChildren();
                $("#imgFlag").append(stateImg);

                let info =`<ul>
                        <li><span class="label">Capital: </span> ${stateData[index].capital}</li>
                        <li><span class="label">Landmass: </span> ${stateData[index].landmass}</li>
                        <li><span class="label">Population: </span> ${stateData[index].population}</li>
                        </ul>
                        <h4>Major industry</h4>
                        <p>${stateData[index].majorindustry}</p>`;

                let container3 = document.getElementById('info');
                container3.replaceChildren();
                $("#info").append(info);

                let symbol = `<h4>Symbols</h4>
                        <ul>
                        <li><span class="symbol">Bird:</span> ${stateData[index].symbols[0].value}</li>
                        <li><span class="symbol">Flower:</span> ${stateData[index].symbols[1].value}</li>
                        <li><span class="symbol">Trees:</span> ${stateData[index].symbols[2].value}</li>
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

                
                let funFact= `
                <h4>Fun Fact</h4>
                <p>${stateData[index].funfact}</p>`;
                let container6 = document.getElementById('funFact');
                container6.replaceChildren();
                $("#funFact").append(funFact);
                
                
         }); 

         $("#old_map").click(function(){
                $(".origin").fadeIn();
                $("#popup").fadeOut();

         });
              
};

$(document).ready(setUp);