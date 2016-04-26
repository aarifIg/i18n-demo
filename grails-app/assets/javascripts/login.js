$(document).ready(function () {
    $("#loginForm").on('submit', function () {
        if ($("#loginForm").valid()) {
            $("#loginForm").submit()
        }
    });
    $("#loginForm").validate({
        rules: {
            "userName": "required",
            "password": "required"
        },
        messages: {
            "userName": "Please enter userName",
            "password": "Please enter password"
        },

        errorPlacement: function (error, element) {
            $(element).addClass('error');
        },
        invalidHandler: function (event, validator) {
            showValidationModal(validator);
        }
    });
});

function showSuccessModal(msg) {
    $(".successContent").empty();
    $(".successContent").html(msg);
    $("#successModal").modal('show');
}

function showValidationModal(validator) {
    var str = "";
    if (1 == validator.errorList.length) {
        str = validator.errorList[0].message;
    } else {
        str += "<ul>";
        for (var i = 0; i < validator.errorList.length; i++) {
            str += "<li>" + validator.errorList[i].message + "</li>";
        }
        str += "</ul>";
    }
    showSuccessModal(str);
}
