$(() =>{

    //styleChange();
    $("#plus").click(() =>{
        let holdNum = $("#num").val();
        holdNum++;
        $("#num").val(holdNum);
        styleChange();
    });

    $("#minus").click(() =>{
        let holdNum = $("#num").val();
        holdNum--;
        $("#num").val(holdNum);
        styleChange();
    });
    $( "#num" ).change(function() {
        styleChange();
      });
    const styleChange =() =>{
        let holdNum = $("#num").val();
        if(holdNum % 2 == 0){
            $("#num").css("color", "red");
        }
        else{
            $("#num").css("color", "black");
        }

        if(holdNum % 3 == 0){
            $("#num").css("font-weight", "bold");
        }
        else{
            $("#num").css("font-weight", "normal");
        }

        if(holdNum % 5 == 0){
            $("#num").css("font-style", "italic");
        }        
        else{
            $("#num").css("font-style", "normal");
        }
    }
    
});