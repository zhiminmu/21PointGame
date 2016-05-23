<?php
namespace Service\User;
use Service\Db\Mysql;

require_once __DIR__.'/../Db/Mysql.php';

class UserInfoService
{
	private static $instance;
	private $conn;
	private $userInfo=array();

	public function __construct()
	{
		
	}

	/*public static function getInstance()
	{
		if(!(self::$instance instanceof self))
			self::$instance = new self;
		return self::$instance;
	}*/

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

	public function registerUser($playername,$password)
	{
		$mysql = Mysql::getInstance();
		$conn = $mysql->getConnection();
		$sql = "insert into player(playername,password) values('".$playername."','".$password."')";
		mysql_query($sql);
		return mysql_error();
	}
}

