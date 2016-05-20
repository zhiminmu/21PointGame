<<<<<<< HEAD
<?php
	require_once __DIR__."/Service/AppKernel.php";

	use Service\AppKernel;

	$kernel = AppKernel::getAppKernel();

	$request_url = $_SERVER["REQUEST_URI"];

	$kernel->controler($request_url);
	//echo $kernel->getCount();
	

=======
<?php 

	use Service\User\UserInfoService;
	echo realpath('./Service/User/UserInfoService.php');
	require "./Service/User/UserInfoService.php";
	$user = new UserInfoService();
	// echo realpath('./');
	// echo </br>;
	// $this->show();
	echo "highlight_string(str)";
	echo $_SERVER['PHP_SELF'];
	
>>>>>>> origin/master
