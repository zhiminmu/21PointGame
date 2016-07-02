var Machine = {
	createNew:function(){
		var machine = {};
		machine.bet = 10;
		machine.jetton = 100;
		machine.name = "robot";
		machine.pokerPieces=0;
		machine.points=0;
		machine.playMode=0;
		//开始时状态player.status为0；玩家点击play之后直接下赌注（5默认值不可变）此时状态为1；等待所有玩家都下注完成每人发两张牌，此时状态为2；轮到每个玩家做决策hit或者stand此时状态为3表示此玩家已经结束操作；判断当所有玩家状态均为3时，计算玩家输赢。
		machine.gameStatus=0;
		machine.pokerValue=[];
		machine.pokerName=[];
		machine.pokerColor=[];
		machine.pokerImgUrl=[];
	}
}