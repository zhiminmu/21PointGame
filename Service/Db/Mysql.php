<?php
namespace Service\Db;

class Mysql
{
	private static $mysql;
	private $connected;

	private function __construct()
	{
		$this->connected = mysql_pconnect('localhost:3306','root','root');
		if(!$this->connected)
			die("connected mysql error!");
		else
			mysql_select_db('21pointgame');
	}

	public static function getInstance()
	{
		if(!(self::$mysql instanceof self))
			self::$mysql = new self;
		return self::$mysql;
	}

	public function getConnection()
	{
		return $this->connected;
	}
}