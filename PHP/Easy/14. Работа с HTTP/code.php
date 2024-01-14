<?
// $method = $_SERVER['REQUEST_METHOD']; // Узнать метод HTTP запроса
// echo $_SERVER['HTTP_HOST'];
// echo $_SERVER['HTTP_ACCEPT_ENCODING'];
// $arr = getallheaders(); // получить массив всех заголовков (работает не со всеми серверами)
// <?php
// 	session_start();
	
// 	if (!empty($_POST)) {
// 		if (валидация формы) {
// 			// сохраняем в базу
			
// 			$_SESSION['flash'] = 'форма успешно сохранена';
// 			header('Location: form.php');
// 			die();
// 		} else {
// 			$_SESSION['flash'] = 'форма не прошла валидацию';
// 		}
// 	}
	
// 	if (isset($_SESSION['flash'])) {
// 		echo $_SESSION['flash'];
// 		unset($_SESSION['flash']);
// 	}
