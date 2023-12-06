console.log;

$(document).ready(function () {
    $(".project-item").hover(
        function () {
            $(this).animate({ opacity: 1 }, 300);
            $(this).css("background-color", "#0a3c66");
        },
        function () {
            $(this).animate({ opacity: 0.6 }, 300);
            $(this).css("background-color", "#092c4c");
        }
    );
});
