
function chatBodyToBottom() {
    var chat_body = $('.chat-body');
    var height = chat_body.prop("scrollHeight");
    chat_body.prop('scrollTop', height);
}

function onClickLogin() {
    var nickname = $('#nickname-edit').val();
    var password = $('#password-edit').val();
    // setCookie(nickname);
    $.ajax({
        url: '/loginAction',
        type: 'post',
        dataType: 'json',
        data: {
            nickname: nickname,
            password: password 
        }
    })
    .done(function(loginJson) {
        if(loginJson.state == 'success') {
           hadLogin(nickname);
           history.go(0);
        }
        console.log(loginJson);
        $('#nickname-error').show();
        $('#nickname-error span').html('');
        $('#nickname-error span').append(loginJson.loginErrMsg);
        needToLogin();
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
    // $('#login-form').submit();
    // $('#my-nickname').html('');
    // $('#my-nickname').html($.cookie('chat_nickname'));
}

function hadLogin(_nicname) {
    $.cookie('chat_nickname', _nicname);
    $('#login-modal').modal('hide');
    $('#my-nickname').html('昵称：'+$.cookie('chat_nickname'));
}

function needToLogin() {
    if(!$.cookie('chat_nickname'))
       $('#login-modal').modal('show');
    $('#my-nickname').html('昵称：'+$.cookie('chat_nickname'));
    // $('#my-nickname').html('');
    // $('#my-nickname').html('昵称：'+$.cookie('chat_nickname'));
    // $('#message-form-nickname').val($.cookie('chat_nickname'));
}
$('#input-edit').keydown(function(e){
    if(e.keyCode==13){
        onClickSendMessage();
    }
});

function onClickSendMessage() {
    if ('' == $.cookie('chat_nickname') || null == $.cookie('chat_nickname')) {
        return $('#login-modal').modal('show');
    }
    var edit = $("#input-edit");
    var content = edit.val();
    edit.focus();
    if ("" == content) {
        return;
    }
    $.ajax({
        url: '/leaveMessageAction',
        type: 'POST',
        dataType: 'json',
        data: {
            nickname: $.cookie('chat_nickname'),
            comment: content,
            create_at: getLocalHMS()
        },
    })
    .done(function() {
        console.log("success");
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
    
    say(content);
    edit.val("");
}

function addMessage(_name, _time, _content) {
    var msg_list = $(".chat-body");
    // _time = _time.slice(0,24);
    // _content = QxEmotion.Parse(_content);
    msg_list.append(
            '<div class="clearfix msg-wrap"><div class="msg-head">' +
            '<span class="label label-info pull-left">' +
            '<span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;' + _name + '</span>' +
            '<span class="msg-time label label-default pull-left">' +
            '<span class="glyphicon glyphicon-time"></span>&nbsp;&nbsp;' + _time + '</span>' +
            '</div><div class="msg-content">' + _content + '</div></div>'
    );
    chatBodyToBottom();
}