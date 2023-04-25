
const process = (data) => {
        
const info = data[0].states;

console.log(data[0].states);

info.forEach((state) => {
    let allStates=" ";

    let addState =
    `<div class="col m-2 p-4"><h2><i class="bi bi-heart-arrow"></i>${state.name}</h2>`;
    allStates +=addState

    console.log(addState);
    $(".row").append(allStates);

    //style
    $("h2").css("color","#A0522D")
            .css("font-family","fantasy");

    $("h5").css("color","brown");

    $("h6").css("color","#008B8B")

    $(".tag").css("font-size", "22px")
            .css("font-style","italic")
            .css("font-family","cursive")
            .css("color","#008080")
            .css("text-align","center");

    $("span").css("color","brown");

    $("li").css("list-style-type","1F44D");

    $(".col").css("background-color","#F4A460")
            .css("opacity","0.8")
            .css("border", "dashed 3px black")
            .css("border-radius", "5px");
    $("img").css("weight", "100px")
            .css("height","80px")
            .css("position","relative")
            .css("margin-left","40%");
});
};
const getData = () => {
$.ajax({
    type: "GET",
    // ""
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

$(document).ready(getData);