$(function() {
  // スクロールイベント
    $(window).scroll(function() {
      // フェードアニメーションを呼び出す
      fadeAnime();
    });
    // フェードアニメーションの設定
    function fadeAnime() {
      // .fadeUpTriggerが付いた要素に対して
      $('.fadeUpTrigger').each(function() {
        // 縦位置を取得し-50pxして、変数targetに代入する
        let target = $(this).offset().top -= 50;
        // スクロール量を取得し、変数scrollに代入する
        let scroll = $(window).scrollTop();
        // 表示画面の高さを取得し、変数windowHeightに代入する
        let windowHeight = $(window).height();
        // 要素の縦位置から表示画面の高さ+200pxを引いた数字よりscrollのほうが大きい場合
        if(scroll > target - windowHeight + 200) {
          // .fadeUpを追加する
          $(this).addClass('fadeUp');
        } else {
          // そうでない場合は.fadeUpを削除する
          $(this).removeClass('fadeUp');
        }
      });
    };
  });

  $(function(){
    $(window).scroll(function(){
     $('.js-trigger').each(function(){
      var scroll = $(window).scrollTop();
      var pos = $(this).offset().top;
      var delay = 400;
      if (scroll > pos - delay){
       $(this).addClass('is-active');
      }
     });
    });
   }) 

   const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');

});



