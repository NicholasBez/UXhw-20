console.log("file loaded correctly!");

$(document).ready(function() {
    $("#myButton").click(function() {
        alert("Button clicked!");
    })

    $("#caseStudy").click(function() {
        if (confirm("Click ok to view case study")) {
            document.location.href = ("./caseStudy.html")
        }
        
    })
})