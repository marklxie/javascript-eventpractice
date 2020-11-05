$().ready(() => {
    console.log("jQuery is ready");
    console.log("duck duck goose");
    $("button").click(()=>{
            console.log("You clicked it");
    });

    let value = $("input").val();
    console.log(value);
    value = Number(value) + 3;
    $("input").val(value);
});
