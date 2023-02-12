
function red(){
    $("h1").css('background-color', 'red')
    console.log("red background")
}
function center(){
    $("h1").css('text-align', 'center')
    console.log("centered")
}
function buttonsEnlarge(){
    $(".button-fade, .button-bg, .button-animate").css('width', '100%')
    console.log("buttons enlarged")
}

$("document").ready(function(){
    console.log("ready!")
    $(".button-fade").click(function(){
        $("h1").fadeToggle()
        console.log("toggle")
    })
    $(".button-bg").click(function(){
        red()
        center()
        buttonsEnlarge()
    })
    $(".button-animate").click(function(){
        $("h1").animate({
            opacity: "0.8",
            height: "400px"
        }, 2000)
        console.log("animate")
    })
})