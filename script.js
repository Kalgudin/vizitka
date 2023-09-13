$(function(){
	// 20:00  20/05/21
	var object_mass=[
	['url(img/jpg1.jpg)','https://kalgudin.github.io/vizitka/','vizitka'],
	['url(img/jpg2.jpg)','http://mpdis.ru/','mpdis.ru'],
	['url(img/jpg3.jpg)','https://kalgudin.github.io/vizitka/','vizitka'],
	['url(img/jpg4.jpg)','http://mpdis.ru/','mpdis.ru'],
	['url(img/jpg5.jpg)','https://kalgudin.github.io/vizitka/','vizitka'],
	['url(img/jpg6.jpg)','http://mpdis.ru/','mpdis.ru']
	];

	$('.my-works__sliding_button-right').click(function(){
		
		$('.my-works__sliding_prew-block').css({'background-image': object_mass[1][0]});
		$('.my-works__sliding_prew-block').html('<a href="'+object_mass[1][1]+'">'+object_mass[1][2]+'</a>');
		
		$('.my-works__sliding_main-block').css({'background-image': object_mass[2][0]});
		$('.my-works__sliding_main-block').html('<a href="'+object_mass[2][1]+'">'+object_mass[2][2]+'</a>');

		$('.my-works__sliding_past-block').css({'background-image': object_mass[3][0]});
		$('.my-works__sliding_past-block').html('<a href="'+object_mass[3][1]+'">'+object_mass[3][2]+'</a>');
		
		var elem = object_mass.shift();
		object_mass.push(elem);
		
	});
	$('.my-works__sliding_button-left').click(function(){

		var elem = object_mass.pop();
		object_mass.unshift(elem);

		$('.my-works__sliding_prew-block').css({'background-image': object_mass[0][0]});
		$('.my-works__sliding_prew-block').html('<a href="'+object_mass[0][1]+'">'+object_mass[0][2]+'</a>');
		
		$('.my-works__sliding_main-block').css({'background-image': object_mass[1][0]});
		$('.my-works__sliding_main-block').html('<a href="'+object_mass[1][1]+'">'+object_mass[1][2]+'</a>');

		$('.my-works__sliding_past-block').css({'background-image': object_mass[2][0]});
		$('.my-works__sliding_past-block').html('<a href="'+object_mass[2][1]+'">'+object_mass[2][2]+'</a>');
	});

	jQuery('.my-works__sliding').swipe({
	 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
         console.log(direction);
         if (direction == 'left'){

            $('.my-works__sliding_prew-block').css({'background-image': object_mass[1][0]});
            $('.my-works__sliding_prew-block').html('<a href="'+object_mass[1][1]+'">'+object_mass[1][2]+'</a>');

            $('.my-works__sliding_main-block').css({'background-image': object_mass[2][0]});
            $('.my-works__sliding_main-block').html('<a href="'+object_mass[2][1]+'">'+object_mass[2][2]+'</a>');

            $('.my-works__sliding_past-block').css({'background-image': object_mass[3][0]});
            $('.my-works__sliding_past-block').html('<a href="'+object_mass[3][1]+'">'+object_mass[3][2]+'</a>');

            var elem = object_mass.shift();
            object_mass.push(elem);
         };

         if (direction == 'right'){

            var elem = object_mass.pop();
            object_mass.unshift(elem);

            $('.my-works__sliding_prew-block').css({'background-image': object_mass[0][0]});
            $('.my-works__sliding_prew-block').html('<a href="'+object_mass[0][1]+'">'+object_mass[0][2]+'</a>');

            $('.my-works__sliding_main-block').css({'background-image': object_mass[1][0]});
            $('.my-works__sliding_main-block').html('<a href="'+object_mass[1][1]+'">'+object_mass[1][2]+'</a>');

            $('.my-works__sliding_past-block').css({'background-image': object_mass[2][0]});
            $('.my-works__sliding_past-block').html('<a href="'+object_mass[2][1]+'">'+object_mass[2][2]+'</a>');

         };
	 }
	});

})