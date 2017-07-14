(function($){
  var avatarColor = [];
	var cardData = [];
  $(function() {
    initCardDetails();
    initCard();
    initEvents();
		initFocus();
	});
  function initCard() {
    var cards = '';
    for ( var i = 0; i < 16; i++ ) {
      var cardDetails = {
        "avatarColor" : cardData[i].avatarColor,
        "id" : i,
        "imgColor" : cardData[i].imgColor,
        "likes" : cardData[i].likes,
        "username" : cardData[i].username,
        "views" : cardData[i].views
      }
      cards += tmpl('tmpl_card', cardDetails);
    }
    $('ul.cards').html(cards);
  }
  function initCardDetails() {
    for ( var i = 0; i <  16; i++ ) {
      cardData.push({
        "avatarColor" : "#fcc",
        "id" : i,
        "imgColor" : "#663399",
        "likes" : "312",
        "username" : "DesignPro",
        "views" : "1501"
      });
      
    }
  }
  function initEvents() {
    var large = $('.arrange .large');
    var main = $('section.main');
    var small = $('.arrange .small');
    large.on('click', function() {
      main.toggleClass('big');
      $(this).addClass('active');
      small.removeClass('active');

    });
    small.on('click', function() {
      main.toggleClass('big');
      large.removeClass('active');
      $(this).addClass('active');
    });
    console.log($('section.main').hasClass('big'));
    console.log($('.arrange .small').hasClass('active'));
  }
  function initFocus() {
    $('.search input').focus();
  }
  //
})(jQuery);
