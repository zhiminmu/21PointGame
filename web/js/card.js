var Card={

	pointer:0,

	/**
	 *  首先生成1-52不重复随机数
	 *  然后将其放到数组中去
	 *  发牌阶段从数组中依次读取
	 *
	 */
	 genRandom:function (){
	 	var randArr=[];
	 	for (var j = 0; j <52; j++) {
	 		var rand=Math.floor(Math.random()*52);
			for(var i = 0 ; i < randArr.length; i++){ 
          		if(randArr[i] == rand){ 
               		break;
          		}
			};
			randArr.push(rand);
	 	}
	 	return randArr;
	 },

	/**
	*  计算扑克牌的颜色
	*  @rand   为传入的随机数
	*	花色	   表示含义
	*	color	花色
	*	spade	黑桃♠️
	*	heart	红桃♥️
	*	club	梅花♣️
	*	diamond	方片♦️
	*/
	cacColor:function(rand){
		var color=[];
		for (var i = 0; i < rand.length; i++) {
			switch(Math.floor(rand[i]/13)){
				case 0:  color[i]='spade'; break;
				case 1:  color[i]='heart'; break;
				case 2:  color[i]='club'; break;
				case 3:  color[i]='diamond'; break;
			}
		}
		return color;
	},

	/**
	*  计算扑克牌的名字
	*  @rand   为传入的随机数
	*	名字	   表示含义
	*	ace	    A
	*	king	K
	*	queen	Q
	*	jack	J
	*	two	    2
	*	three	3
	*	four	4
	*	five	5
	*	six	    6
	*	seven	7
	*	eight	8
	*	nine	9
	*	ten	    10
	*/
	cacName:function(rand){
		var name=[];
		for (var i = 0; i < rand.length; i++) {
			switch(rand[i]%13){
					case 0: name[i]='king';break;
					case 1: name[i]= 'ace';break;
					case 2: name[i]= 'two';break;
					case 3: name[i]= 'three';break;
					case 4: name[i]= 'four';break;
					case 5: name[i]= 'five';break;
					case 6: name[i]= 'six'; break;
					case 7: name[i]= 'seven'; break;
					case 8: name[i]='eight'; break;
					case 9:  name[i]='nine'; break;
					case 11:  name[i]='jack'; break;
					case 12:  name[i]='queen'; break;
				}
		}
		
				return name;
	},

	/**
	*  计算扑克牌的值
	*  @rand   为传入的随机数
	*/
	cacValue:function(rand){
		var value=[];
		for (var i = 0; i < rand.length; i++) {
			switch(rand[i]%13){
					case 0: value[i]=10; break;
					case 1: value[i]=1;break;
					case 2: value[i]=2;break;
					case 3: value[i]=3; break;
					case 4: value[i]=4;break;
					case 5: value[i]=5;break;
					case 6: value[i]=6;break;
					case 7: value[i]=7;break;
					case 8: value[i]=8; break;
					case 9: value[i]=9;break;
					case 10: value[i]=10; break; 
					case 11: value[i]=10; break;
					case 12: value[i]=10; break;
				}		}
		
				return value;
	},

	cacImgUrl:function(color,name){
		var imgUrl=[];
		for (var i = 0; i < color.length; i++) {
			imgUrl[i]=color[i]+"_"+name[i]+".jpg";
		}
		return imgUrl;
	},



	/**
	*  类的构造函数
	*  
	*/
	createNew:function(){
		
		var card={};
		card.random=Card.genRandom.apply(this);
		card.color=Card.cacColor.apply(this,[card.random]);
		card.name=Card.cacName.apply(this,[card.random]);
		card.value=Card.cacValue.apply(this,[card.random]);
		card.imgUrl=Card.cacImgUrl.apply(this,[card.color,card.name]);	
		return card;
	}
};