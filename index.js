'use strict';

function displaySignup(){
    $('.submit-form').append(
        `<form class='login-form>
            <label for 'email'>Email</label>
            <input type='text' name='email' id='email'>
            <label for 'username'>Username</label>
            <input type='text' name='username' id='username'>
            <label for 'password'>Password</label>
            <input type='text' name='password' id='password'>
            <label for 'password2'>Confirm Password</label>
            <input type='text' name='password2' id='password2'>
            <button type='submit'>Create Account</button>
        </form>`
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
    $(".submit").on('click', '.login-btn',function(event){
        $('.submit-form').empty();
        displayLogin();
    });
    $(".submit").on('click', '.signup-btn',function(event){
        $('.submit-form').empty();
        displaySignup();
    });

}
$(handleButtons());