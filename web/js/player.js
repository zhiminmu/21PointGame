var Player={
	/**
	 *player.credit  玩家手中的剩余赌注
	 *player.pokerNum  玩家手中的扑克牌数目
	 *player.points  玩家手中扑克牌的点数
	 *player.status  玩家状态
	 *player.poker  玩家手中的扑克牌
	*/


	createNew:function(){
		var player={};
		player.name=null;
		player.bet=0;
		player.jetton=0;
		player.pokers=0;
		// player.playerNum=0;
		player.points=0;
		// player.playMode=0;
		//开始时状态player.status为0；玩家点击play之后直接下赌注（5默认值不可变）此时状态为1；等待所有玩家都下注完成每人发两张牌，此时状态为2；轮到每个玩家做决策hit或者stand此时状态为3表示此玩家已经结束操作；判断当所有玩家状态均为3时，计算玩家输赢。
		player.gameStatus=0;
		player.pokerValue=[];
		player.pokerName=[];
		player.pokerColor=[];
		// player.pokerImgUrl=[];

		return player;
	}
};