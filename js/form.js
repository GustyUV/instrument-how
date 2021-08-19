const nameRequired = document.querySelector('#name');
	const invalidName = document.querySelector('#invalidName');

	function name(){
		if(nameRequired.value === ""){
			nameRequired.classList.add("is-invalid");
			invalidName.classList.remove("d-none");
			nameRequired.style.borderColor = '#dc3545';
		}
		else{
			nameRequired.classList.remove("is-invalid");
			invalidName.classList.add("d-none");
			nameRequired.style.borderColor = '#8ddece';
		}
	};

	nameRequired.addEventListener('blur', name);
	nameRequired.addEventListener('keyup', name);

	const emailRequired = document.querySelector('#email');
	const invalidEmail = document.querySelector('#emailRequired');
	const invalidEmail2 = document.querySelector('#invalidEmail')
	var emailPat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

	function email(){
		if(emailRequired.value === ""){
			emailRequired.classList.add("is-invalid");
			invalidEmail.classList.remove("d-none");
			emailRequired.style.borderColor = '#dc3545';
		}
		else{
			emailRequired.classList.remove("is-invalid");
			invalidEmail.classList.add("d-none");
			emailRequired.style.borderColor = '#8ddece';
		}

		if(emailPat.test(emailRequired.value)){
			emailRequired.classList.remove("is-invalid");
			invalidEmail2.classList.add("d-none");
			emailRequired.style.borderColor = '#8ddece';
		}
		else{
			emailRequired.classList.add("is-invalid");
			invalidEmail2.classList.remove("d-none");
			emailRequired.style.borderColor = '#dc3545';
		}
	};

	emailRequired.addEventListener('blur', email);
	emailRequired.addEventListener('keyup', email);

	const phoneRequired = document.querySelector('#phone');
	const invalidPhone = document.querySelector('#invalidPhone');

	function phone(){
		if(phoneRequired.value === ""){
			phoneRequired.classList.add("is-invalid");
			invalidPhone.classList.remove("d-none");
			phoneRequired.style.borderColor = '#dc3545';
		}
		else{
			phoneRequired.classList.remove("is-invalid");
			invalidPhone.classList.add("d-none");
			phoneRequired.style.borderColor = '#8ddece';
		}
	};

	phoneRequired.addEventListener('blur', phone);
	phoneRequired.addEventListener('keyup', phone);

	const messageRequired = document.querySelector('#message');
	const invalidMessage = document.querySelector('#invalidMessage');

	function message(){
		if(messageRequired.value === ""){
			messageRequired.classList.add("is-invalid");
			invalidMessage.classList.remove("d-none");
			messageRequired.style.borderColor = '#dc3545';
		}
		else{
			messageRequired.classList.remove("is-invalid");
			invalidMessage.classList.add("d-none");
			messageRequired.style.borderColor = '#8ddece';
		}
	};

	messageRequired.addEventListener('blur', message);
	messageRequired.addEventListener('keyup', message);