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
				$result = (new UserInfoService())->getUserInfoByName($username);
				$userInfo = mysql_fetch_array($result,MYSQL_BOTH);
				// $userInfo = array('playerid' => $resultArr['playerid'],
				// 	'playername' => $resultArr['playername'],
				// 	'password' => $resultArr['password'],
				// 	'roomid' => $resultArr['roomid'],
				// 	'jetton' => $resultArr['jetton'],
				// 	'losenum' => $resultArr['losenum']);
				if(strcmp($password,$userInfo['password'])==0){
					$successInfo = "login success";
					echo json_encode($successInfo);		
				}else{
					$errInfo = "login error";
					echo json_encode($errInfo);
				}
				
			}

		}

		if(strcmp($urlpath,"/register")==0)
		{
			if (isset($_POST['registerAction'])) 
			{
				$username = $_POST['username'];
				$password = $_POST['password'];
				$userInfo = (new UserInfoService())->getUserInfoByName($username);
				$rows = mysql_num_rows($userInfo);
				if ($rows) {
					$errInfo = "multiple registration";
					echo json_encode($errInfo);
				}	
				// if (strcmp($userInfo['playername'],$username)==0) {
				// 	$errInfo = "multiple registration";
				// 	echo json_encode($errInfo);
				// }
				else{
					$insertRes = (new UserInfoService())->insertPlayer($username,$password);
					// if (strcmp($insertRes,"true")==0) {
					if ($insertRes==true) {
						$successInfo = "insert success";
						echo json_encode($successInfo);
					}else{
						$errInfo = "insert error";
						echo json_encode($errInfo);
					}

				}	
			}

		}

		
	}
}
