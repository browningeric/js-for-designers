(function($){
	$(function() {
    initCard();
    initEvents();
		initFocus();
	});
  function initCard() {
    var cards = '';
    for ( var i = 0; i < 16; i++ ) {
      cards += tmpl('tmpl_card', {});
    }
    $('ul.cards').html(cards);
  }
  function initEvents() {
    $('.arrange .large').on('click', function() {
      console.log('wahoo!');
    });
  }
  function initFocus() {
    $('.search input').focus();
  }
})(jQuery);
