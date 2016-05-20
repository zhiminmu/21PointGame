<?php
namespace Service;

class Mysql
{
	private static $conn;

	private function __construct()
	{
		self::$conn = mysql_connect();
	}
}