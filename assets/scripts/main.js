let d = new Date;
mo = d.getMonth();
da = d.getDate();
console.log(da);

const month = document.querySelector('#js_month');
const day = document.querySelector('#js_day');
month.textContent = mo+1;
day.textContent = da


// footer-cvがでてきたらcv-button非表示
$(window).scroll(function () {
  $('.js-footer').each(function () {
    var hit = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    var customTop = 100;
    if (typeof $(this).data('js-footer') !== 'undefined') {
      // data-effect="任意の値" が設定されている場合
      customTop = $(this).data('js-footer');
    }
    if (hit + customTop < wHeight + scroll) {
      $('.js-cv-button').addClass("is-hidden");
    } else {
      $('.js-cv-button').removeClass("is-hidden");
		}
  });
});

const ham = $('.js-hamburger-btn');
const nav = $('.js-g-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  ham.toggleClass('open'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('is-active'); // ナビゲーションメニューにactiveクラスを付け外し

});
