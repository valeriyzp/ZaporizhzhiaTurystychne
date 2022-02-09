function check_data(){
	var strname=document.forms['contact_form'].name.value;
	var stremail=document.forms['contact_form'].email.value;
	var strmessage=document.forms['contact_form'].message.value;
	var mailerrorsymbols = /[-!#$%^&*()+= ]/;
	
	if(strname.length === 0){
		alert(strmessage+"Поле \"Ім'я\" є обов'язковим!");
		return false;
	}
	if(stremail.length === 0){
		alert("Поле \"Пошта\" є обов'язковим!");
		return false;
	}
	if(stremail.indexOf("@") < 1 || stremail.lastIndexOf(".") < stremail.indexOf("@") || stremail.indexOf("@") != stremail.lastIndexOf("@") || mailerrorsymbols.test(stremail))
	{
		alert("Введіть правильний e-mail!")
		return false;
	}
	if(strmessage.length === 0){
		alert("Поле \"Повідомлення\" є обов'язковим!");
		return false;
	}

	return true;
}

function submit_data(){
	if(check_data()!=true) return false;
	if(confirm("Відправити ваше повідомлення?") != true) return false;

	var message_window = window.open('', 'new_window', 'height=250, width=350, menubar=no, toolbar=no, location=no, status=no, resizeble=no, scrollbars=yes');
	message_window.document.write("<title>Повідомлення</title>");
	message_window.document.write("<body bgcolor=\"#eee\"><h1>Ви ввели такі дані:</h1><p>Ім'я: "+document.forms['contact_form'].name.value+"</p><p>Пошта: "+document.forms['contact_form'].email.value+"</p><p>Повідомлення: "+document.forms['contact_form'].message.value+"</p></body>");
	return true;
}
