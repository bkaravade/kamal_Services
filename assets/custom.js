$(document).ready(function () {
    
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get('type'); // Replace 'key' with your query parameter name
    console.log(paramValue);
    $("#user_div").hide();
    $("#customer_div").hide();
    $("#report_div").hide();
    $("#payments_div").hide();
    if(paramValue == "EmpLyy") {
        $("#user_menu").hide();
        $("#customer_menu").hide();
        $("#payments_menu").hide();
     //   $("#user_menu").hide();
    }
    else if(paramValue == "adnim") {}
    else  {alert("Un-authorised User"); window.location.href='index.html';}


    $("#dashboard_menu").click(function () {
        $("#dashboard_div").show();
        $("#user_div").hide();
        $("#customer_div").hide();
        $("#report_div").hide();
        $("#payments_div").hide();
    });
    $("#user_menu").click(function () {
         $("#user_div").show();
        $("#dashboard_div").hide();
        $("#customer_div").hide();
        $("#report_div").hide();
        $("#payments_div").hide();
    });
    $("#customer_menu").click(function () {
        $("#customer_div").show();

        $("#dashboard_div").hide();
        $("#user_div").hide();
        $("#report_div").hide();
         $("#payments_div").hide();
    });
    $("#report_menu").click(function () {
        $("#report_div").show();

        $("#dashboard_div").hide();
        $("#customer_div").hide();
        $("#user_div").hide();
         $("#payments_div").hide();
    });

     $("#payments_menu").click(function () {
        $("#report_div").hide();

        $("#dashboard_div").hide();
        $("#customer_div").hide();
        $("#user_div").hide();
         $("#payments_div").show();
    });
});


