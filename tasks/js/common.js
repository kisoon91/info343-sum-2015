"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('BMb15tkaXZoMUpEfRNzx943OH771Wt7qHRRxO2Mo', 'rc1EtAbdIgJ4wENH9BkxWuYwb8Btb4i8fAilfSgY');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
