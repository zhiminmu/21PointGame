function operation($mode){
	
	
	if ($mode==1) {
		//需要用到全局变量用对象保存
		// var oper ={

		// 	$pointer = 0;
		// }
		// $player =instancePlayer();
		// $player.name = sessionStorage.getItem("playerName");
		// $machine = instancePlayer();
		// $card = instanceCard();
		// for (var i = 0; i < 2; i++) {
		// 	perflop($player,$card);
		// 	//判断如果是玩家自己的牌就将两张都显示出来
		// 	// if (true) {}

		// }
		// for (var i = 0; i < 2; i++) {
		// 	perflop($machine,$card);
		// }
		var battle = Battle1.createNew();


		
		
	}
	else if (mode==2) {

	}
	
}
//发牌
function perflop($player,$card){
	// $pointer = sessionStorage.getItem("pointer")==null?0:sessionStorage.getItem("pointer");
	$player.pokerColor.push($card.color[$card.pointer]);
	$player.points+=$card.value[$card.pointer];
	$player.pokerValue.push($card.value[$card.pointer]);
	$player.pokerName.push($card.name[$card.pointer]);
	$player.pokerImgUrl.push($card.ImgUrl[$card.pointer]);
	
	// addImg($card.ImgUrl[$pointer],);
	// sessionStorage.setItem(JSON.stringfy($player));
	// sessionStorage.setItem("pointer",$pointer++);
	// return $player;
	$player.pokers++;
	$card.pointer++;
}

// function addImg (imgUrl,posX,posY){
//       var img=new image();
//       img.src=imgUrl;
//       param.context.drawImage(img,posX,posY);//location(x,y) is needed to change
// };
// function addDefaultImg (posX,posY){
//       var img=new image();
//       img.src="default_img.jpg";
//       param.context.drawImage(img,posX,posY);
// };

function instancePlayer(){
	$.getScript("player.js",function(){
		$player = Player.createNew();
		return $player;
	});
};

function instanceCard(){
	$getScript("card.js",function(){
		$card = Card.createNew();
		return $card;
	})
};

var Battle1 ={
	createNew: function(){
		var battle1 = {};
		battle1.pointer = 0;
		battle1.player = instancePlayer();
		battle1.player.name = sessionStorage.getItem("playerName");
		battle1.machine = instancePlayer();
		battle1.player.bet = 
		$card = instanceCard();

		for (var i = 0; i < 2; i++) {
			perflop(battle1.player,$card);
			var img = $("<img src="+$card.ImgUrl[$card.pointer]+"/>");
			$(".player ").append(img);
			//判断如果是玩家自己的牌就将两张都显示出来
			// if (true) {}

		}
		for (var i = 0; i < 2; i++) {
			perflop($machine,$card);
		}

		battle1.img = function()
		return battle1;
	},
	defaultImg: function(play){
		var defaultImg = $("<img src='../imgs/anpai.jpg'>");
		$("."+play+).append(defaultImg);
	}

	realImg: function(imgUrl,play){
		var realImg = $("<img src = '../imgs/'"+imgUrl">");
		$("."+play+).append(realImg);
	}

}

