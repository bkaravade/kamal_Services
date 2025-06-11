$(document).ready(function () {

    $("#user_div").hide();
    $("#customer_div").hide();
    $("#report_div").hide();

    $("#dashboard_menu").click(function () {
        $("#dashboard_div").show();
        $("#user_div").hide();
        $("#customer_div").hide();
        $("#report_div").hide();
    });
    $("#user_menu").click(function () {
         $("#user_div").show();
        $("#dashboard_div").hide();
        $("#customer_div").hide();
        $("#report_div").hide();
    });
    $("#customer_menu").click(function () {
        $("#customer_div").show();

        $("#dashboard_div").hide();
        $("#user_div").hide();
        $("#report_div").hide();
    });
    $("#report_menu").click(function () {
        $("#report_div").show();

        $("#dashboard_div").hide();
        $("#customer_div").hide();
        $("#user_div").hide();
    });
});


