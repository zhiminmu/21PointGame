<?php
namespace Service;

class AppKernel
{
	private static $kernel;

	private function __construct()
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
		if(strcmp($urlpath,"\/"))
		{
			echo file_get_contents("./src/register.html");
		}
		if(strcmp($urlpath,"\/login"))
		{
			echo self::$count;
		}
	}
}
