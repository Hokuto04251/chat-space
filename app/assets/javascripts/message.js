$(function() {

  function buildSendMessageHTML(message) {


    var addImage = message.image ==  null ? "" : `<img src="${message.image}" class="lower-message__image">`;

    var html = `
                <div class="message" data-id="${message.id}" >
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      <p>${message.user_name}</p>
                    </div class="upper-message__date">
                    <div>
                      <p>${message.created_at}</p>
                    </div>
                  </div>

                  <div class="lower-message">
                    <div>
                      <p>${message.content}</p>
                    </div>
                    <div>
                      <p>${addImage}</p>
                    </div>
                  </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);

    $.ajax({
      url: location.href,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){


      var html = buildSendMessageHTML(message);

      $('.messages').append(html);
        // 操作対象のフォーム要素を取得&リセット
        var $form = $(this);
        $("form")[0].reset();
        // submiをクリックできるようにする
      $(".form__submit").prop( "disabled", false );
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){


      alert('メッセージを入力してください');
    })
  })

  // ここから自動更新
  var num = $('.messages').children('.message').length;

  setInterval(reload, 5000);
  function reload(){
    $.ajax({
      type: 'GET',
      url: location.href,
      dataType: 'json'
    })
    .done(function(messages){
      var last_message_id = $('.message').filter(":last").data("id");
      var messageHistoryHTML = '';
      messages.forEach(function(message){
        if(message.id > last_message_id ){
        messageHistoryHTML += buildSendMessageHTML(message);
      }
      });
      $('.messages').append(messageHistoryHTML);
      // // 下までスクロール
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(messages){
      alert('自動更新に失敗しました');
    })
  }
});
