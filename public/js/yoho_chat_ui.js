function onClickApplyNickname() {
	var nickname_edit = $('#nickname-edit');
	var nickname_error = $("#nickname-error");
    var name = nickname_edit.val();
    if ("" == name) {
	    nickname_error.text("请填写昵称。");
	    nickname_error.show();
	    nickname_edit.focus();
        return;
    }
    var name_len = name.length;
    if (name_len < 4 || name_len > 16) {
	    nickname_error.text("请填写正确的昵称，应为4到16个字符。");
	    nickname_error.show();
        return;
    }
    if (name == $.cookie('chat_nickname')) {
	    nickname_error.text("你本来就叫这个。");
	    nickname_error.show();
    }
    changeNickname(name);
    // console.log($.cookie('chat_nickname'));
    $('#login-modal').modal('hide');
}

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
    $('#my-nickname').html($.cookie('chat_nickname'));
}

function setCookie(_nicname) {
    $.cookie('chat_nickname', _nicname);
}