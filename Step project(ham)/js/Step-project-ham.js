function filter(evt, cityName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("our-serv-tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("each-tabs");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  


// // ***********************IMAGE FILTERING**********************************


  const listItems = document.querySelectorAll('.our-amaz-content li');
const allimages = document.querySelectorAll('.our-amaz-content .our-amaz-tabs-images .work-images');
 
function toggleActiveClass(active){
    listItems.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allimages.length; i++){
            allimages[i].style.display = 'inline-block';
        }
    }else{
        for(let i = 0; i<allimages.length; i++)
            allimages[i].dataset.class === dataClass ? allimages[i].style.display = 'inline-block' : allimages[i].style.display = 'none';
    }
}
 
for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener('click', function(){
        toggleActiveClass(listItems[i]);
        toggleimages(listItems[i].dataset.class);
    });
}


//**********load more*************** */


 const loadImage = [
  {
      imgSrc: "img/graphic design/graphic-design4.jpg",
      hoverText: 'Hover',
      category: 1
  },
  {
      imgSrc: "img/web design/web-design4.jpg" ,
      hoverText: 'Hover',
      category: 2
  },
  {
      imgSrc: "img/landing page/landing-page4.jpg",
      hoverText: 'Hover',
      category: 3
  },
  {
      imgSrc: "img/wordpress/wordpress4.jpg",
      hoverText: 'Hover',
      category: 4
  },
  {
      imgSrc: "img/graphic design/graphic-design5.jpg",
      hoverText: 'Hover',
      category: 1
  },
  {
      imgSrc: "img/web design/web-design5.jpg",
      hoverText: 'Hover',
      category: 2
  },
  {
      imgSrc: "img/landing page/landing-page5.jpg",
      hoverText: 'Hover',
      category: 3
  },
  {
      imgSrc: "img/wordpress/wordpress5.jpg",
      hoverText: 'Hover',
      category: 4
  },
  {
      imgSrc: "img/graphic design/graphic-design6.jpg",
      hoverText: 'Hover',
      category: 1
  },
  {
      imgSrc: "img/web design/web-design6.jpg",
      hoverText: 'Hover',
      category: 2
  },
  {
      imgSrc:  "img/landing page/landing-page6.jpg",
      hoverText: 'Hover',
      category: 3
  },
  {
      imgSrc: "img/wordpress/wordpress6.jpg",
      hoverText: 'Hover',
      category: 4
  }
];

// Prepare func for load more logic
const loadMore = () => {
  let items = [];

  // Create out new items
  for(let item of loadImage) {
      items.push(`
      <a href = "" class="cont project-item ${item.category}">
      <img src="${item.imgSrc}" alt="graphic-design">
      <div class="project-item--hover">
          <div class="buttons">
              <button><i class="fas fa-link"></i></button>
              <button><i class="fas fa-search searchh"></i></button>
          </div>
          <div class="title">creative design</div>
          <div class="description">Graphic Design</div>
      </div>
  </a>
      `);

  }


  
  // Find containers
  const wrapper = $('.grid-wrapper');
  const inner =  $('.grid');

  // Fix current height
  wrapper.css('height', wrapper.height());  
  // Add new items
  inner.append(items.join(''));
  // Animate to new height
  wrapper.animate({
      height: inner.height()
  }, 1000, ()=> {
      // Restore auto height after animation
      wrapper.css('height', 'auto') 
  })
}



$('.load-more').on('click', loadMore);

$('.categories').on('click', '.category-item', function(e) {
  if (!$(this).hasClass('active')) {

      const wrapper = $('.grid-wrapper');
      const inner =  $('.grid');
      wrapper.css('height', wrapper.height());
      $('.loader').fadeIn(100, ()=> {
          $('.category-item.active').removeClass('active');
          $(this).addClass('active');
          const categoryNum = $(this).attr('data-category');

          if(categoryNum == '0') {                    
              $('.project-item').show();
          } else {
              $('.project-item').hide();
              $('.project-item.category-' + categoryNum).show();
          }

          wrapper.animate({
              height: inner.height()
          }, 600, ()=> {
              // Restore auto height after animation
              wrapper.css('height', 'auto');
              $('.loader').fadeOut(100)
          })
      })  

      
  }
})



//*******************************************SLIDER************************************* */





$(document).ready(function () {
    const prev = $('.wrapper-people .left-arrow');
    const next = $('.wrapper-people .right-arrow');

    $(prev).click(function () {
        const activeComment = $('.wrapper-people .person.active');
        if(activeComment.index() > 1) {
            const profileImg = $(`.wrapper-people .comment.comment${activeComment.index()}`);

            activeComment.removeClass('active').prev().toggleClass('active');
            profileImg.removeClass('active').prev().toggleClass('active');
        }
    });
    $(next).click(function () {
        const activeComment = $('.wrapper-people .person.active');

        if(activeComment.index() < 4){
            const profileImg = $(`.wrapper-people .comment.comment${activeComment.index()}`);

            activeComment.removeClass('active').next().toggleClass('active');
            profileImg.removeClass('active').next().toggleClass('active');
        }
    });
    $('.wrapper-people .tabs > .person').click(function () {
        const currentImg = $(`.wrapper-people .comment.comment${$(this).index()}`);
        const hideImg = $('.wrapper-people .comment.active');

        $('.wrapper-people .tabs > .person.active').removeClass('active');
        hideImg.removeClass('active');
        $(this).toggleClass('active');
        currentImg.toggleClass('active');
    });
});

  
