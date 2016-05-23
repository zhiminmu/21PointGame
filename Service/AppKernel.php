<?php
namespace Service;
use Service\Db\Mysql;
use Service\User\UserInfoService;
require_once __DIR__.'/User/UserInfoService.php';
class AppKernel
{
	private static $kernel;

	public function __construct()
	{

	}

	public static function getAppKernel()
	{
		if(!(self::$kernel instanceof self))
			self::$kernel = new self;
		return self::$kernel;
	}

	public function controler($urlpath)
	{
		if(strcmp($urlpath,"/")==0)
		{
			echo file_get_contents("./src/index.html");
		}
		
		if(strcmp($urlpath,"/login")==0)
		{
			if (isset($_POST['loginAction'])) 
			{
				$username = $_POST['username'];
				$password = $_POST['password'];
				$userInfo = (new UserInfoService())->getUserInfoByName($username);
				if(strcmp($password,$userInfo['password'])==0)
					echo "login sussuce!";		
			}
		}
		
	}
}
