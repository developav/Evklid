const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 100,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // And if we need scrollbar
    scrollbar: {
      hide: true,
    },
  });



  //accordion
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      animate: 500,
      heightStyle: "content"
  });