$(() =>{
    $("#plus").click(() =>{
        let holdNum = $("#num").val();
        holdNum++;
        $("#num").val(holdNum);
    });

    $("#minus").click(() =>{
        let holdNum = $("#num").val();
        holdNum--;
        $("#num").val(holdNum);
    });
});