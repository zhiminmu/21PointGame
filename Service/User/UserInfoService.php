<?php
namespace Service\User;

	if (isset($_POST['loginAction'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];
		
		$db = getConnection();
		$query = "select * from player where playername = ?";
		$stmt = $db->prepare($query);
		$stmt->bind_param("s",$username);
		// $stmt->bind_result($username,$password);
		$stmt->execute();
		$result = $stmt->get_result();
		$resultArr = $result->fetch_assoc();
		if ($password == $resultArr['password']) {
			echo $resultArr['playername']." password: ".$resultArr['password']." id: ".$resultArr['playerid'];
			return "chenggong";
		}else{
			echo "error";
		}
		
	}
	if (isset($_POST['registerAction'])) {
		$username = $_POST['username'];
		$password = $_POST['password'];
		$db = getConnection();
		$query = "select * from player where playername=?";

		$result = checkPlayer($db,$query,$username);
		// $stmt = $db->prepare($query);

		// $stmt->bind_param("s",$username);
		
		// $stmt->execute();
		// $result = $stmt->get_result();

		$resultRow = mysqli_num_rows($result);
		// echo $resultRow;
		if ($resultRow!=0) {
			return "error";
		}else{
			$queryIn = "insert into player(playername,password) values(?,?)";
			$affectRows = insertPlayer($db,$queryIn,$username,$password);

			if ($affectRows>0) {
				return "success";
			}else{
				return "false";
			}
		}
		
	}
	function getConnection(){
		@$db = mysqli_connect('localhost:3306','root','root','21pointgame');
		if (mysqli_connect_errno()) {
			echo "Error:could not connect to database. please try again";
		}
		return $db;
	}

	function checkPlayer($db,$query,$username){
		$stmt = $db->prepare($query);
		$stmt->bind_param("s",$username);
		$stmt->execute();
		$result = $stmt->get_result();
		return $result;
	}
	function insertPlayer($db,$query,$username,$password){
		$stmt = $db->prepare($query);
		$stmt->bind_param("ss",$username,$password);
		$stmt->execute();
		$result = $stmt->affected_rows();
		return $result;
	}
	
		

