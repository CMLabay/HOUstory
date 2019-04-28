'use strict';

function displaySignup(){
    $('.submit-form').append(
        `
            <input type='text' name='password2' id='password2' placeholder='confirm password'>
            <button type='submit'>Create Account</button>
        `
    );
}
function displayLogin(){
    $('.submit-form').append(
        `<form class='login-form>
            <label for 'username'>Username</label>
            <input type='text' name='username' id='username'>
            <label for 'password'>Password</label>
            <input type='text' name='password' id='password'>
            <button type='submit'>Login!</button>
        </form>`
    );
}
function handleButtons(){
    $(".login").on('click', '.login-btn',function(event){
        $('.submit-form').empty();
        displayLogin();
    });
    $(".login").on('click', '.signup-btn',function(event){
        $('.submit-form').empty();
        displaySignup();
    });

}
$(handleButtons());
