$(document).ready(function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    $('.dot').click(function () {
        var dotIndex = $(this).index() + 1;
        showSlides(dotIndex);
    });

    function showSlides(n) {
        var dots = $(".dot");
        if (n > dots.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = dots.length }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
        slideIndex = n;
    }

    $(".scroll-container").scroll(function() {
        var container = $(this);
        var scrollLeft = container.scrollLeft();
        var containerWidth = container.width();
        var cardWidth = $(".card").outerWidth(true);
        var index = Math.round(scrollLeft / cardWidth);
        showSlides(index + 1);
    });

    // Read More button functionality
    $("#btn1, #btn2, #btn3").click(function () {
        window.open("https://fylehq.com", "_blank");
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform form submission via AJAX
        var form = event.target;
        var data = new FormData(form);

        fetch(form.action, {
            method: form.method,
            body: data
        })
        .then(response => {
            if (response.ok) {
                // Close the contact modal
                $('#contactModal').modal('hide');
                // Show the success modal
                $('#successModal').modal('show');
            } else {
                // Handle errors here
                alert('Error submitting the form.');
            }
        })
        .catch(error => {
            // Handle errors here
            alert('Error submitting the form.');
        });
    });
});