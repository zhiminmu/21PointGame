<?php
namespace Service;

class Mysql
{
	private static $mysql;
	private $connected;

	private function __construct()
	{
		$this->connected = mysql_connect();
	}
}