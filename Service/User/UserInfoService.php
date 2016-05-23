<?php
namespace Service\User;
use Service\Db\Mysql;

require_once __DIR__.'/../Db/Mysql.php';

class UserInfoService
{
	private $conn;
	private $userInfo=array();

	public function getUserInfoByName($playername)
	{
		$mysql = Mysql::getInstance();
		$conn = $mysql->getConnection();
		$query = "select * from player where playername='".$playername."'";
		$result = mysql_query($query);
		$resultArr = mysql_fetch_array($result,MYSQL_BOTH);
		$this->userInfo = array('playerid' => $resultArr['playerid'],
			'playername' => $playername,
			'password' => $resultArr['password'],
			'roomid' => $resultArr['roomid'],
			'jetton' => $resultArr['jetton'],
			'losenum' => $resultArr['losenum']);
		return $this->userInfo;
	}


}
		

