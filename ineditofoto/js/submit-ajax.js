var $contactForm = $("#contactForm");
var $newsletterForm = $("#newsletterForm");

$contactForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
		url: '//formspree.io/contacto@ineditofoto.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		success: function(data) {
			console.log(data);
      $('.response-message').html('El mensaje ha sido enviado con éxito. Gracias :)');
		},
		error: function(err) {
			console.log(err);
      $('.response-message').html('Ocurrió un error. Por favor intenta nuevamente :/');
		}
	});
});

$newsletterForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
		url: '//formspree.io/contacto@ineditofoto.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		success: function(data) {
			console.log(data);
      $('.response-message-news').html('Te suscribiste con éxito. Gracias :)');
		},
		error: function(err) {
			console.log(err);
      $('.response-message-news').html('Ocurrió un error. Por favor intenta nuevamente :/');
		}
	});
});
