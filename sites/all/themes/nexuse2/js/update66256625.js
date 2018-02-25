$(document).ready(function($) {

	//JS main search
	$('#search form').append('<i class="fa fa-search"></i>');
	$('#search form input[type=text]').val('');
	$('#search form input[type=submit]').val('');

	//Breadcrumb
	$('.breadcrumb ul > li:first-child').addClass('home');
	$('.breadcrumb ul > li:first-child a').html('<i class="fa fa-home"></i></a>');

	//Comment
	$('.new-comment form > div > .form-item').addClass('form-element');
	$('.new-comment form .form-item input[type=text]').addClass('box');
	$('.new-comment form .form-item textarea').addClass('box');


});