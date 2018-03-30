$(document).ready( function() {


var credentials = ['sophia', 'gokart'];

// when user clicks on 'sign in' button check what he entered in the foelds, if true - send to the homepage, if falls - show the message)

function checkCredentials () {
	var userLogin = $('#login').val();
	var userPassword = $('#password').val();
	var correctLogin = credentials[0];
	var correctPassword = credentials[1];
	if (userLogin == correctLogin & userPassword == correctPassword) {
		window.location = "homepage.html";
	} else {
		alert("Please enter valid credentials.")
	}
};	

$("#sign_in_button").on("click", checkCredentials);

// LCD - update the user record page, button

$(".right-save-button").append("<button>Update</button>");
$(".right-save-button").on("click", 'button', function() {
	location.reload();
})


// show the pop-up when a user clicks on SOPHIA on the homepage
// add 2 new jQuery variables for the username and password fields
var $login = $("#username");
var $password = $("#password");

// show overlay when user clicks on Sophia
$("#askCredentials").on("click", function() {
	$("#overlay").show();
	/*console.log("success"); */
})

// hide the overlay

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $("#overlay").hide();
    }
});

$(".close-icon").on("click", function() {
	$("#overlay").hide();
});

// check login and password
function isLoginValid() {
	return $login.val() == credentials[0];
}

function isPasswordValid() {
	return $password.val() === credentials[1];
}

function canSubmit() {
	return isLoginValid() && isPasswordValid();
}

$("#submit").on("click", function(e) {
	e.preventDefault();
	if (canSubmit()) {
		window.location = "sophia.html";
	}
		
	})

// expand-collapse touchstone details on click

$(".expand").on("click", function(e) {
	e.preventDefault();
    var $link = $(this),
	    $expandedBlock = $link.parents('.columns').next('.expand-details');
	$expandedBlock.slideToggle(500, function() {
	   $link.text( function() {
	   	return $expandedBlock.is(":visible") ? "Collapse" : "Expand";
	   });
	});

	/* эта строчка отвечает за скрол страницы вверх */
	/* $("body").animate({ scrollTop: ($(".expand-details").offset().top) }, 200); */
});

}) //the end of document.ready function

// Concepts - add Key Terms

var $key_points = $("<div class='key_point_field'><ul><li><input type='text'><a class='remove-link' href='#'>Remove</a></li></ul></div>");
/* var $remove_link = $("<a class='remove-link' href='#'>Remove</a>");
$key_points.append($remove_link); */

$("#key_points_button").on("click", function(e) {
    e.preventDefault();
	/* $("#key_points_list").clone($key_points); */
	$key_points.clone().appendTo("#key_points_list");
	counter = counter+1;
})

$("#key_points_list").on("click", ".remove-link", function(e) {
	e.preventDefault();
	$(this).parent().remove(); /* Я использую parent() так как у элемента .remove-link он только один и я хочу удалить
	и элемент, и его родителя, если бы он был более вложеным, <div><span><a>... , и нужно было бы удалить <div>,
	то нужно было бы написать $(this).parents('div').remove(). Eсли у двух элементов общий родитель, но они на разных
	уровнях, то $(this).parents('patent-name').find('class/element').remove() */
})

// добавление shared facts

// drag&drop for challenge 2.0

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  });

$("#sortable li").mouseover(function() {
	$(".edit_challenge_concept", $(this)).show();
}).mouseout(function() {
	$(".edit_challenge_concept", $(this)).hide();
});

$("#sortable li").on("click", ".edit_challenge_concept", function(e) {
	e.preventDefault();
	var $li = $(this).parent();
	$li.hide();
	$li.next(".edit_challenge_concept_name").show();
	console.log("go");
});

$("#sortable li").on("click", ".cancel_edit_challenge_concept", function(e) {
	e.preventDefault();
	var $li = $(this).parent();
	$li.hide();
	$li.prev().show();
	console.log("go");
});


















	
