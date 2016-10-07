

function changeNickname(_name) {
	$.cookie('chat_nickname', _name);
}

function needToLogin() {
    if(!$.cookie('chat_nickname'))
        $('#login-modal').modal('show');
    $('#my-nickname').html('');
    $('#my-nickname').html('昵称：'+$.cookie('chat_nickname'));
    $('#message-form-nickname').val($.cookie('chat_nickname'));
}

function onClickLogin() {
    var nickname = $('#nickname-edit').val();
    setCookie(nickname);
    $('#login-form').submit();
    $('#my-nickname').html('');
    // $('#my-nickname').html($.cookie('chat_nickname'));
}

function setCookie(_nicname) {
    $.cookie('chat_nickname', _nicname);
}