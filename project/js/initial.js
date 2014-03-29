
//HOME PAGE - hides the sign in form,the overlay, the arrow, and the search results
// ===============	

	$('#form_register').hide();
	$('.overlay').hide();
	// ('#fields img[src$="arrow.png"], #universities img[src$="arrow.png"], #states img[src$="arrow.png"]').hide();
	$('#engineering').hide();
	$('#dialog-confirm').hide();
	$('#dialog_membership').hide();
	$('.overlay_dialog').hide();
// 	$('#jobs').accordion();
	
// ADMIN PAGE
// 	==========
	$('#profile_gear ul').hide();
	$('#second_gear').hide();
	
	$('#jobs_folder ul').hide();
	$('#second_folder').hide();		
		
//onload function wraps all JS and jQuery
// ===============
$(window).load(function(){


//HOME PAGE - animates the social network icons on hover
//================================
$('#facebook, #google_plus, #linkedin').hover(function(){
	$(this).animate({left: -5}, 700);
	}, 
		function(){
			$(this).animate({left: -30}, 500);
});

$('#twitter').hover(function(){
	$(this).animate({left: -5}, 700);
	}, 
		function(){
			$(this).animate({left: -30.5}, 500);
});


//ALL PAGES WITH SIGH IN BUTTON - displays the sign in form and the overlay on click, and hides them both when click happens on the overlay
// ===============
$('#sign_in').click(function(){
	$('#form_register').slideDown("slow");
	$('.overlay').fadeIn();
});
	
$('.overlay').click(function(){
	$('#form_register').slideUp("normal");
	$('.overlay').fadeOut();	
});

//HOME PAGE - sets z-indexes to the divs so they are slided above each other when animated
// ===============
$(function(){
	$(document).css("z-index", "1");
	$('#fields').css("z-index","1");
	$('#universities').css("z-index","2");
	$('#states').css("z-index","3");
	$('#fields').css("position","relative");
	$('#universities').css("position","relative");
	$('#states').css("position","relative");
});


// HOME PAGE SEARCH
// ================

$('#submit_hp').click(function(e){
	e.preventDefault();
	
	$keyword = $('#key_word').val();
	$location = $('#location').val();
	$('#section_one').css('display','block');
	$('#sidebar').css('display','block');
	
	if($keyword== ''){
		alert("This search generated no results. Please enter a keyword");
		$keyword= $('#key_word').val('');//clears the input field
		$location=$('#location').val('');//clears the input fields
		console.log('if statement 1');
	} else if($keyword.toLowerCase()!== 'engineering'){
		alert("This search generated no results. Please enter a different keyword(hint: engineering)" +":)");
		$keyword= $('#key_word').val('');
		$location=$('#location').val('');
		console.log('if statement 1');
	} else if($keyword.toLowerCase()=="engineering" && $location.toLowerCase()=="florida"){
		$('#section_one').css('z-index','1');
		$('#engineering').slideDown();
		$('html, body').animate({scrollTop: $('#section3').offset().top},1800);
		// $('#jobs').accordion();
		$keyword= $('#key_word').val('');
		$location=$('#location').val('');
		console.log('if statement 2');
	} else if($keyword.toLowerCase()== "engineering" && $location== ""){
		// $('#jobs').accordion();
		$('#section_one').css({zIndex:'1', paddingTop:'20px'});
		$('#engineering').slideDown();
		$('html, body').animate({scrollTop: $('#section3').offset().top},1800);
		$keyword= $('#key_word').val('');
		$location=$('#location').val('');
	}	
});//closes the click function ($('#submit_hp').click(function(e))
//===============


//hover on divs field, university, effects - added on the WSP project
// =================
$('#fields, #universities, #states').hover(
  function(){
    $(this).css("background-color","rgb(255,185,95)");
	// $(this).find("img[src$='arrow.png']").fadeTo(300, 1);
  }
  	,function(){
  		$(this).css("background-color","rgb(243,163,73)");
  		// $(this).find("img[src$='arrow.png']").fadeTo(300, 0);
  	});

//HOME PAGE - sets the hover state of the divs - has to check the clickIndex of the circles because I am changing the color of the circles on click and the hover and click need to be combined together
//================
// $('#fields, #universities, #states').hover(
//   function() {
//     $(this).css("background-color","rgb(255,185,95)");
//   }
//   
//   	,function() {
//   	
//   if(indexFieldClick%2!==0){
// 		$('#fields').css("background-color","rgb(255,185,95)");
// 	} else { $('#fields').css("background-color","rgb(243,163,73)");
// 	};
//   		
//   if(indexUniversityClick%2!==0){
// 	$('#universities').css("background-color","rgb(255,185,95)");
// 	} else { $('#universities').css("background-color","rgb(243,163,73)");
// 	};
// 	
// 	if(indexStatesClick%2!==0){
// 	$('#states').css("background-color","rgb(255,185,95)");
// 	} else {$('#states').css("background-color","rgb(243,163,73)");
// 	};
// 
//   }
// );

//sets opacity of the hidden divs to 0
// ===============
// $('.hidden_div1').css("opacity","0");
// $('.hidden_div2').css("opacity","0");
// $('.hidden_div3').css("opacity","0");


//functions that move the fields div
// ===============
function fields_first_click(){
	$('#fields').animate({left: -220}, 2000);
	$('.hidden_div1').fadeTo(2000, 1);
	$('#fields').css("background-color","rgb(255,185,95)");
// 	$('#fields img[src$="arrow.png"]').fadeTo(1500, 1);
		
//the code below calls the functions that "close" the divs "university" and "state", and resets the clickIndex of those functions to 0. This means that when the user clicks on a div and there is any other div opened, the div that is open will close. If the click is and odd number, it will call the function that opens the div. If the click is an even number, it will call the function that closes the div. By changing the index to 0, we are re-setting the function to the divs initial state, which is closed. Thus, the function that opens the div will be called on the next click. Another way to solve this problem would be by incrementing the index by 1 (clickIndex++) instead of re-setting it to 0. The result would be the same.
//==============		
		 
		if(indexUniversityClick!==0 && indexUniversityClick%2!==0)
			{
				universities_second_click(); 
				indexUniversityClick=0;
			};	
		
		  
		if(indexStatesClick!==0 && indexStatesClick%2!==0)
			{
				states_second_click();
				indexStatesClick=0;
			};	
		
};

function fields_second_click(){
	$('#fields').animate({left: 0}, 2000);
	$('.hidden_div1').fadeTo(2200, 0);
	// $('#fields img[src$="arrow.png"]').fadeTo(1500, 0);
	
//this function takes care of the color transition when the circle comes back to its original place
//=============
	var interval = setInterval(function(){colorTranstion()}, 100);
		
//test with current colors
//=================
		var x=255;
		var y=185;
		var z= 95;
		
//function that that changes colors
//=================
		var colorTranstion = function(){
		var color="rgb"+"("+""+x+","+y+","+z+""+")";
		$('#fields').css("background",color);
		x--;
		y--;
		z--;

//sets x to 243 in case it gets smaller than 243 - this is necessary because x is lowered only by 12 (255 to 243) and the other variables are lowered by 22 (185 to 163, and 95 to 73). I need to stop x from getting lower before I stop y and z from getting lower.
//=================
		if(x==242){
			x=243;
		};
		
		if(y==162 && z==72){
	
			clearInterval(interval);
							
			};
		console.log(color);
		};//end function colorTransition	
			
};//end function fields_second_click
//=========

indexFieldClick=0;

function clickFields(){
	 if(indexFieldClick%2==0){
		fields_first_click();
}	 else{
		fields_second_click(); 
}
	 indexFieldClick++;
};

//calls function
//==============
// $('#fields').click(function(){
// 	clickFields();
// });

//functions that move the university div
// ===============
function universities_first_click(){
	$('#universities').animate({left: -240}, 2000);
	$('.hidden_div2').fadeTo(2000, 1);
	$('#universities').css("background-color","rgb(255,185,95)");
// 	$('#universities img[src$="arrow.png"]').fadeTo(1500, 1);
				
//functions that close the other divs (only )if they are open
//=================		
		if(indexFieldClick!==0 && indexFieldClick%2!==0)
			{
				fields_second_click();  
				indexFieldClick=0;
			}	
		
		  
		if(indexStatesClick!==0 && indexStatesClick%2!==0)
			{
				states_second_click();
				indexStatesClick=0;
			}	
};

function universities_second_click(){
	$('#universities').animate({left: 0}, 2000);
	$('.hidden_div2').fadeTo(2200, 0);	
	// $('#universities img[src$="arrow.png"]').fadeTo(1500, 0);
	
//this function takes care of the color transition when the circle comes back to its original place
//=============
	var interval = setInterval(function(){colorTranstion()}, 100);
		
//variables that hold the rgb values for the colors
//=================
	var x=255;
	var y=185;
	var z= 95;
	
//variables that hold the rgb values for the colors
//=================
	var colorTranstion = function(){
	var color="rgb"+"("+""+x+","+y+","+z+""+")";
	$('#universities').css("background",color);
	x--;
	y--;
	z--;

//sets x to 243 in case it gets smaller than 243 - this is necessary because x is lowered only by 12 (255 to 443) and the other variables are lowered by 22 (185 to 163, and 95 t0 73). I need to stop x from getting lower before I stop y and z from getting lower.
//=================
	if(x==242){
		x=243;
	};
	
	if(y==162 && z==72){

		clearInterval(interval);
						
		};
	console.log(color);
	};//end function colorTransition	
	
};//end function universities_second_click
//=============

indexUniversityClick=0;

function clickUniversity(){
	if(indexUniversityClick%2==0){
		universities_first_click ();
} 	else {
		universities_second_click(); 
}
	indexUniversityClick++;
};

//calls function
//=============

// $('#universities').click(function(){
// 	clickUniversity();
// });

//functions that move the State div
// ===============
function states_first_click(){
	$('#states').animate({left: -240}, 2000);
	$('.hidden_div3').fadeTo(2000, 1);
	$('#states').css("background-color","rgb(255,185,95)");
	// $('#states img[src$="arrow.png"]').fadeTo(1500, 1);	

//functions that close the other divs (only )if they are open
//================
		 
		if(indexFieldClick!==0 && indexFieldClick%2!==0)
			{
				fields_second_click(); 
				indexFieldClick=0;
			}	
		
		 
		if(indexUniversityClick!==0 && indexUniversityClick%2!==0)
			{
				universities_second_click (); 
				indexUniversityClick=0;
			}		
};

function states_second_click(){
	$('#states').animate({left: 0}, 2000);
	$('.hidden_div3').fadeTo(2200, 0);
	// $('#states img[src$="arrow.png"]').fadeTo(1500, 0);	
	
//this function takes care of the color transition when the circle comes back to its original place
//=============
	var interval = setInterval(function(){colorTranstion()}, 100);
	     
//variables that hold the rgb values for the colors
//=================
	var x=255;
	var y=185;
	var z= 95;
	
//function that changes colors
//=================
	var colorTranstion = function(){
	var color="rgb"+"("+""+x+","+y+","+z+""+")";
	$('#states').css("background",color);
	x--;
	y--;
	z--;
	
//sets x to 243 in case it gets smaller than 243 - this is necessary because x is lowered only by 12 (255 to 443) and the other variables are lowered by 22 (185 to 163, and 95 t0 73). I need to stop x from getting lower before I stop y and z from getting lower.
//=================
	if(x==242){
		x=243;
	};
	
	if(y==162 && z==72){

		clearInterval(interval);
						
		};
	console.log(color);
	};	//end function colorTransition
	
};//end function states_second_click
//==============

indexStatesClick=0;

function clickStates(){
	if(indexStatesClick%2==0){
		states_first_click();
		
} else {
		states_second_click(); 		
}
	indexStatesClick++;
};

//calls function
//=============
// $('#states').click(function(){
// 	clickStates();
// });

//function that displays the search results and moves the screen down
//=============
$('#btn_test').click(function(e){
	e.preventDefault();
	var field = $('#searchByField').val();
	if(field === "Engineering"){
		$('#resources').hide();
		$('#resources_heading').hide();
		$('#engineering').fadeIn(1000);
		$('#jobs').accordion();
		$('html').animate({scrollTop: $('#engineering').offset().top},1800); //function that moves the screen down when the search is performed
	} else {
		alert('No results');
	}
});


//functions that opens the dialog and overlay; take to the sign up page when user clicks "yes" in the dialog box; and fades out the dialog and overlay if user clicks "not now"
//=============

$('.save_job_hp').click(function(){
	$('.overlay_dialog').fadeIn();
	$('#dialog_membership').fadeIn().draggable();
});

$('#become_member').click(function(){
	window.location.assign('form.html');
});

$('#no_membership').click(function(){
	$('.overlay_dialog').fadeOut();
	$('#dialog_membership').fadeOut();	
});



//ADMIN PAGE 
//function that displays the hidden ul li on clicking the gear
//================
$('#first_gear').mouseover(function(){
	$('#first_gear').hide();
	$('#second_gear').show().css('cursor','pointer').click(function(){
		$('#gear ul').fadeIn(500,function(){
			$('#gear ul').hover(function(){
				$('#gear ul').css('display','block');
				$('#second_gear').show();
			}, function(){
				$('#gear ul').fadeOut(500);
				$('#second_gear').hide();
			});
		});
	});	
});

$('#second_gear').mouseout(function(){
	$('#second_gear').hide();
	$('#first_gear').show();
	$('#gear ul').hide();
});


//function that displays the hidden ul li on clicking the folder
//================
$('#first_folder').mouseover(function(){
	$('#first_folder').hide();
	$('#second_folder').show().css('cursor','pointer').click(function(){
		$('#folder ul').fadeIn(500,function(){
			$('#folder ul').hover(function(){
				$('#folder ul').css('display','block');
				$('#second_folder').show();
			}, function(){
				$('#folder ul').fadeOut(500);
				$('#second_folder').hide();
			});
		});
	});	
});

$('#second_folder').mouseout(function(){
	$('#second_folder').hide();
	$('#first_folder').show();
	$('#folder ul').hide();
});


$('#admin_welcome').hover(function(){
	$('#admin_welcome').css({zIndex:'2', background: 'rgba(21, 97, 156, .3)'});
		}, function(){
		$('#admin_welcome').css({zIndex:'0', background: 'rgba(21, 97, 156, 0)'});
});


//edit in place - allows changes to the welcome message 
//=============

//creates the input field and hides the welcome message (happens on click of the welcome message)
	$('#admin_welcome').click(function(){
		var welcome_msg = $(this).text();
		$('#admin_welcome').after('<input class="editinplace" placeholder="' + ' '+ welcome_msg + '"></input>');
		$('#admin_welcome').hide();
		$('.editinplace').css({width:'343px', height: '45px', fontSize: '3em', fontStyle:'oblique',border:'.5px solid rgb(21,97,156)', boxShadow:'0 0 4px rgb(21,97,156)',display:'block', margin:'0 auto 12px', color:'rgb(21,97,156)'});

//allows users to input new text and submit on pressing key 'enter'
		$('.editinplace').keyup(function(e){
			console.log(e.which);
			if(e.which =='13'){
				if($('.editinplace').val().length==0){
					$('#admin_welcome').text($('#admin_welcome').text());
					$('#admin_welcome').show();
					$('.editinplace').remove();	
				} else{
						$('#admin_welcome').text('');
						$('#admin_welcome').text($('.editinplace').val());
						$('#admin_welcome').show();
						$('.editinplace').remove();	
				  }
			return false;	
			}
		});// closes the $('.editinplace').keyup(function(e)

//allows users to input new text and submit on click (click must happen inside the input field)		
		$('.editinplace').click(function(e){
			console.log(e.which);
			if($('.editinplace').val().length!=0){
				$('#admin_welcome').text($('.editinplace').val());
				$('#admin_welcome').show();
				$('.editinplace').remove();	
			}
			return false;	
		}); // closes the $('.editinplace').click(function(e)
		
	}); // closes the $('#admin_welcome').click(function()


//this function displays the search engine and sidebar on the admin page (on click)
//================

var indexToggle=1;
$('#search').click(function(e){	
	e.preventDefault();
	if(indexToggle%2!=0){
		$('html,body').animate({scrollTop: $('footer').offset().top},1300);
		
		if(indexToggle>1){
			$('#middle_column').html('<p id="p_middleColumn">Perform a search and save jobs to this area. Jobs will automatically be saved to your "Saved Jobs" main tab</p>');
		}
		$('#section_one, #sidebar').slideDown(1300);
		
		
		// 	var y = $(window).scrollTop();  //current y position on the page
		// 	$(window).scrollTop(y+150);
		
	} else {
		$('#section_one, #sidebar').slideUp(1300, function(){
			$('#print_results').html('');
			$('#middle_column').html('');
		});
		$('html, body').animate({scrollTop: $('#profile_gear').offset().top},1500);
		//window.location.replace("#welcome_section");
	}
	indexToggle++;
});

$('#close_search').click(function(){
	$('html, body').animate({scrollTop: $('#profile_gear').offset().top},1500);
	$('#section_one, #sidebar').slideUp(1500, function(){
		$('#print_results').html('');
		$('#middle_column').html('');
	});
	indexToggle++;
});
	
//function that grabs the input value in the registration form and appends on the admin welcome message
//================

var username = $('#login').val();


//ajax call for the login
//=============

$('#register_submit').click(function(){
	window.location.assign("admin.html");
});
$('#form_submit').click(function(){
	window.location.assign("admin.html");
});

$('#saved_jobs_li').click(function(){
	window.location.assign("saved_jobs.html");
});

$('#logout').click(function(){
	window.location.assign("index.html");
});

$('#profile').click(function(){
	window.location.assign("admin.html");
});

$('#terms_of_use').click(function(){
	window.location.assign("terms.html");
});

$('#dashboard_index').click(function(){
	window.location.assign("index.html");
});


/*



$('#register_submit').click(function(e){
	e.preventDefault();
	var user = $('#login_name').val();
	var password = $('#password').val();
	
	$.ajax({
		url:'xhr/login.php',
		data:{
	 		username: user,
	 		password: password
	 	},
		type:'post',
		dataType: 'json',
		success: function(result){
		   if(result.error){
		    alert('data not retrieved :(');
		   } else {
		   	console.log('works');
			console.log(result.user.id);
			window.location.assign("admin.html");
		   }
			
		}, 
	});//closes the ajax call
	
});//closes the on click function
*/

//ajax call for the logout
//===================

$('#logout').click(function(){
	$.get('xhr/logout.php', function(){
		window.location.assign("index.html");
	});
});


//ajax call for the registration page (form)
//==================

/*
$('#form_submit').click(function(e){
	e.preventDefault();
	var username = $('#login').val();
	var password = $('#form_password').val();
	var email = $('#email').val();
	// $('#admin_welcome').text('Welcome ' + username);

	$.ajax({
		url:'xhr/register.php',
		data:{
	 		username: username,
	 		password: password,
	 		email: email
	 	},
		type:'post',
		dataType: 'json',
		success: function(result){
		   if(result.error){
		    alert('data not retrieved :(');
		    console.log(result.error);
		   } else {
		   	console.log('works');
			console.log(result);
			window.location.assign("admin.html");
			// $('#admin_welcome').text('Welcome ' + username);
			console.log(welcome);
		   }
			
		}, 
	});//closes the ajax call
	
});//closes the on click function

*/
//ajax call for job search on admin page
//==================

$('#submit').click(function(e){
	e.preventDefault();
	
	$keyword = $('#key_word').val();
	$location = $('#location').val();
	$('#section_one').css('display','block');
	$('#sidebar').css('display','block');
	
	if($keyword== ''){
		$('#print_results').html('<h2>This search generated no results. Please enter a keyword</h2>').css("color","#0C6298").hide().fadeIn();
		$keyword= $('#key_word').val('');//clears the input field
		$location=$('#location').val('');//clears the input fields
		console.log('if statement 1');
	} else if($keyword.toLowerCase()!== 'engineering'){
		$('#print_results').html('<h2>This search generated no results. Please enter a different keyword (hint: engineering) :)</h2>').css("color","#0C6298").hide().fadeIn();
		$keyword= $('#key_word').val('');
		$location=$('#location').val('');
		console.log('if statement 1');
	} else if($keyword.toLowerCase()=="engineering" && $location.toLowerCase()=="florida"){
		$('#print_results').load('results_page.html').hide().fadeIn();
		$('.full_result').css('background','blue');
		$keyword= $('#key_word').val('');
		$location=$('#location').val('');
		console.log('if statement 2');
	} else if($keyword.toLowerCase()== "engineering" && $location== ""){
		$('#print_results').load('results_page.html', function(){	
			$('.save_job').each(function(){		
				$(this).click(function(){


//this function clones the job div to the sidebar. "$clone" stores the value of the cloned job div and the styles I gave to it. Cloning happens on click of each "save job" span .(this) --see function above
//===============
					

//compares the cloned div with the divs that are already stored in the sidebar. If the cloned div already exists in the the sidebar, pop up a message letting the user know they already saved the job, and cancel the cloning.
//===============
					$//on click, match the clicked element with every h3 on the side bar.
					//grab each element on the sidebar and match with the clicked element
					
			var jobsH3=$(this).parents('.full_result').find('h3').text();
			
			var clone = $(this).parents('.full_result').clone().css({width:'300px', margin: '10px 13px', background:'rgb(247, 247, 247)'});
			
			clone.find('h3').css({marginTop:'10px', color:'rgb(11,97,156)'});
			
			var middleColumnInnerDiv=$('#middle_column').find('.full_result').find('h3').text();
				
			var middleColumnFullJobs=$('#middle_column .full_result h3');
			
			var middleColumnJobsDiv=$('#middle_column .full_result');
			
					
			var middleColumn=$('#middle_column').find('h3').text();
			
				if(jobsH3===middleColumn) {
					alert('You already saved this job');
		   				} else {
						clone.appendTo('#middle_column').hide().fadeIn(750);
		  		 };
		
		
		
			
			//var middleColumnInnerDiv=$('#middle_column').find('.full_result').find('h3').text();//this is saving all h3 texts as the "save job is clicked." I need to traverse it and find only the h3 that matches my selection on the right hand div
				
				 console.log('0- this is the cloned div h3: '+clone);
				 console.log('1- this is the h3: '+jobsH3);
				// console.log('2- this is the middle column: '+ this);
				 console.log('3- this is the text in the middle column: ' + middleColumn);	
				 console.log('4- this is the middle column inner div: ' + middleColumnInnerDiv);
				 console.log('5- this is the length of the middle column inner div: ' + middleColumnInnerDiv.length);
				 console.log('6- this is the middleColumnFullJobs: ' + middleColumnFullJobs);
				console.log('7- this is the number of #middle_column .full_result h3 outside the ok click: '+ middleColumnFullJobs.length);

	
// $(this).parents('.full_result').find('h3').each(function(){
// // 				if ($(middleColumnInnerDiv:contains(jobsH3)){
// // 					alert('You already saved this job');	
// // 						} else {
// // 					clone.appendTo('#middle_column').hide().fadeIn(750);
// // 				}
// // 					
// // 			});
			
					
//finds the h3 inside the $clone and styles it 
//===============
					clone.find('h3').css({fontSize:'1.5em', textAlign:'left', marginLeft:'0'});
					
//finds the span for university name inside the $clone and styles it 
//===============
					clone.find('h3 span').css({fontSize:'.8em', textAlign:'left', marginLeft:'0', color:'black', fontWeight:'normal', display:'block', width:'100%'});
					 
//In the job div cloned to the sidebar the code below replaces the text "save job" for img "trash_can2", styles it, and stores the value in $delete_link, which will be used later
//===============
					var delete_link = clone.find('.save_job').text('').html('<img src=images/trash_can2.png>').css({marginLeft:'110px', cursor:'pointer'});
					
//when all that happens, the jobs are cloned to the sidebar with new style. The line below gets rid of the h3 that appeared on the sidebar, whose text says "you have no saved jobs"
//===============
					$('#p_middleColumn').css('display','none');
				
//this function will delete the job saved on the sidebar on click
//===============
					delete_link.click(function(e){	
						var del = this;
						e.stopPropagation();			
						$('#dialog-confirm').fadeIn(400).css('z-index','6');
						$('#dialog-confirm').draggable();
						$('.overlay_one').fadeIn(400);

//cancels out the delete on the dialog box
//====================
						$('#cancel').click(function(){
							$('.overlay_one').fadeOut(200);		

// Problem: when i clicked "delete" in the dialogue box, the job wouldn't be deleted, which was good. But if I clicked "cancel" for a job and then clicked "ok" to cancel a different job, the job for which I had previously clicked "cancel" would be deleted as well. The code I had was simply $('#dialog-confirm').fadeOut(200);

//Solution: the line below removes the dialogue box when "cancel" is clicked. This action zeroes out the value that would be stored in the "var del" above (meaning that on the click on the "ok" button in the dialogue box, "this"--consequently "var del"-- would refer to all "var delete_link"(which represents the trash can) that were ever clicked, even the ones whose delete action was cancelled out in the dialogue box). In other words, "var del" would not refer only to "this" particular action anymore, but also to all actions that had happend before (meaning the function triggered on all clicks on the trash can--the delete_link.click(function(){})). 

//Removing the dialogue box was a necessary step to make sure that users can click "cancel" in the dialogue box as many times as they want and when they click "ok" in the dialogue box (to finally delete a particular job), that click will not delete all the jobs that the user previously chose to delete (click on the trash can) but changed their mind and clicked "cancel" in the dialogue box. 

//In other words, every time users click "cancel", they are re-setting the "var del = this" to store only the value of that particular click that happened on the trash can, not the ones from before, which means that every time the trash can icon is clicked the function starts fresh and no previous value will be found in that variable. Following the .remove() I had to append the dialogue box, otherwise it would not appear when the trash can was clicked again (since the dialogue was removed, it had to be re-appended). Then I fade it out so it disappears from the screen when button "cancel" is clicked.
//=====================
							
							$('#dialog-confirm').remove().appendTo('#section_one').fadeOut(200);
						});
						
//confirms the deletion of the job
//===============
						$('#ok').click(function(){
							// console.log('works');
							$(del).parents('.full_result').remove();
							$('#dialog-confirm').fadeOut(200);
							$('.overlay_one').fadeOut(200);
							console.log('8- this is the number of #middle_column .full_result h3 inside the ok click: '+ middleColumnFullJobs.length);
							
							var results = $('#middle_column').has('.full_result');
							if(results.length==0 ){
								$('#p_middleColumn').css('display','block');
							}
						}); //closes the ('#ok').click function();	
					});//closes the delete_link .each function
			});//closes the inner .click() function - (the click on the "save job", not the click on the submit button)
		});	//closes the .each() function
	}).hide().fadeIn('slow');// the "})" in this line closes the .load() function
		 $keyword= $('#key_word').val('');
		 $location=$('#location').val('');
		console.log('if statement 3');
	} else if($keyword.toLowerCase()== "engineering" && $location!== "florida"){
		$('#print_results').html('<h2>This search generated no results. Please try a different location (hint: florida) :)</h2>').css("color","#0C6298").hide().fadeIn();
		$keyword= $('#key_word').val('');
		 $location=$('#location').val('');
		console.log('if statement 4');
	} else if($keyword!== "engineering" && $location== "florida" ){
		$('#print_results').html('<h2>This search generated no results. Please try again</h2>').css("color","#0C6298").hide().fadeIn();
		 $keyword= $('#key_word').val('');
		 $location=$('#location').val('');
		console.log('if statement 5')
	} else if($keyword!== "engineering" || $location!== "florida" ) {
		$('#print_results').html('<h2>This search generated no results. Please try again</h2>').css("color","#0C6298").hide().fadeIn();
		 $keyword= $('#key_word').val('');
		 $location=$('#location').val('');
		console.log('if statement 6');
	} 
		
});//closes the click function ($('#submit').click(function(e))-line 431 (or near it)
//===============

});//closes window on load - END DOCUMENT
//===============









	
			


