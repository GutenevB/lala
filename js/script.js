/**
 * Created by serfcompany-b on 18.04.16.
 */
/**Плавный скрол*/
$(document).ready(function(){
    $("#nav, #nav-footer, #more").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -120;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    var elems = form.elements;

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, 'Your name?');
    }

    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        showError(elems.email.parentNode, ' Your email?');
    }

    resetError(elems.phone.parentNode);
    if (!elems.phone.value) {
        showError(elems.phone.parentNode, ' Your phone number?');
    }
    resetError(elems.other.parentNode);
    if (!elems.other.value) {
        showError(elems.other.parentNode, ' No message');
    }


}