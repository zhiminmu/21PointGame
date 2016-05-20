<?php
	require_once __DIR__."/Service/AppKernel.php";

	use Service\AppKernel;

	$kernel = AppKernel::getAppKernel();

	$request_url = $_SERVER["REQUEST_URI"];

	$kernel->controler($request_url);
	//echo $kernel->getCount();
	

