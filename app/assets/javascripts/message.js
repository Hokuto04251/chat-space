$(function() {
  function buildSendMessageHTML(message) {


    var addImage = message.image ==  null ? "" : `<img src="${message.image}" class="lower-message__image">`;

    var html = `
                <div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">

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
});
