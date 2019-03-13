$(function() {

  var search_list = $('#user-search-result');

  function appendUser(user) {
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${user.user_name}</p>
      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.user_name}">追加</a>
    </div>
    `
    search_list.append(html);
  }

  function appendNoUser(user) {
    var html = `
    <div class="chat-group-user clearfix">
      <p class="chat-group-user__name">${ user }</p>
    </div>`
    search_list.append(html);
  }


  function appendClickedUser(id,name){
    var html = `
    <div class='chat-group-user clearfix js-chat-member' id='chat-group-user-${id}'>
      <input name='group[user_ids][]' type='hidden' value='${id}'>
      <p class='chat-group-user__name'>${name}</p>
      <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
    </div>`
return html
  }


  $('#user-search-field').on('keyup',function(){
    var input = $('#user-search-field').val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $('#user-search-result').empty();
      if ( users.length !== 0) {
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else {
        appendNoUser("一致するユーザーは存在しません");
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');

    });
  });

    // 追加ボタンを押した場合の処理
    $(document).on('click', '.user-search-add', function(){
      // クリックしたユーザーを取得
      var id = $(this).data('userId');
      var user_name = $(this).data('userName');
      var insertHTML = appendClickedUser(id,user_name);

      // チャットメンバーの方にユーザーを追加する
      $('#talk-member').append(insertHTML);
      // 検索結果の方からユーザーを消す
      $(this).parent().remove();
    });

    // 削除ボタンを押した場合の処理
    $(document).on('click','.user-search-remove', function(){
      $(this).parent().remove();
    });

  });






