function enemy(waveNo,result2){

	var hp=1;
	var speed=0;
	var currWaypoint=0;
	var sprite;
	var result=result2;
	var slowSpeed;
	var dmgOT=0;
	var dOTCalled=false;
		
	hp=waveNo*0.75+1;
	speed=waveNo*5+50;
	slowSpeed=speed;
	if(waveNo!=10){
		sprite=game.add.sprite(32,224,'enemy1',0);
		game.physics.enable(sprite, Phaser.Physics.ARCADE);
		sprite.anchor.set(0.5,0.5);
		sprite.scale.set(0.7);		
		sprite.animations.add('enemyWalkUp',[0,1,2,3,4,5,6,7,8],4,false);
		sprite.animations.add('enemyWalkLeft',[9,10,11,12,13,14,15,16,17],4,false);
		sprite.animations.add('enemyWalkDown',[18,19,20,21,22,23,24,25,26],4,false);
		sprite.animations.add('enemyWalkRight',[27,28,29,30,31,32,33,34,35],4,false);
		var tempAnim=sprite.animations.add('enemyDeath',[36,37,38,39,40],4,false);
		tempAnim.killOnComplete=true;
	}else{
		sprite=game.add.sprite(32,224,'enemy2',0);
		game.physics.enable(sprite, Phaser.Physics.ARCADE);
		sprite.anchor.set(0.5,0.5);
		sprite.scale.set(0.7);		
		sprite.animations.add('enemyWalkUp',[0,1,2,3,4,5,6,7,8],4,false);
		sprite.animations.add('enemyWalkLeft',[9,10,11,12,13,14,15,16,17],4,false);
		sprite.animations.add('enemyWalkDown',[18,19,20,21,22,23,24,25,26],4,false);
		sprite.animations.add('enemyWalkRight',[27,28,29,30,31,32,33,34,35],4,false);
		var tempAnim=sprite.animations.add('enemyDeath',[36,37,38,39,40],4,false);
		tempAnim.killOnComplete=true;
		hp+=5;
		speed+=50;
	}

	this.getHP=function (){
		return hp;	
	};
	
	this.minusHP=function (dmg){
		hp-=dmg;	
	};
	this.killSprite=function(){
		sprite.animations.play('enemyDeath');
		sprite.body.velocity.set(0);
		
	};
	this.getSpeed=function(){
		return speed;
	};
	
	this.setSpeed=function (amtSlow){
		slowSpeed= speed*(1-amtSlow);	
	};
	
	this.getPosX=function(){
		return sprite.x;
	};
	
	this.getPosY=function(){
		return sprite.y;
	};
	
	this.getSprite=function(){
		return sprite;
	};

	this.getCurrWaypoint=function(){
		return currWaypoint;
	};
	
	this.dmgOverTime=function (dmg){
		if(dmgOT<dmg)
			dmgOT=dmg;	
	};
	this.updateDmgOT=function(){
		if(!dOTCalled){
			dOTCalled=true;
			var interval = window.setInterval(function() {
				hp-=dmgOT;
			}, 1000);
		}
	};
	
	this.move=function(){
		if(hp>0){
			if(currWaypoint<result.length){
					if((Math.floor(sprite.x/64)==result[currWaypoint].x)&&(Math.floor(sprite.y/64)==result[currWaypoint].y)){
						 currWaypoint++;
						 sprite.body.velocity.set(0);
					}else{
							if(Math.floor((sprite.x-16)/64)<result[currWaypoint].x){
								sprite.body.velocity.x=slowSpeed;
								sprite.animations.play('enemyWalkRight');
							}
							if(Math.floor((sprite.y-16)/64)<result[currWaypoint].y){
								sprite.body.velocity.y=slowSpeed;
								sprite.animations.play('enemyWalkDown');
								}
							if(Math.floor((sprite.x+16)/64)>result[currWaypoint].x){
								sprite.body.velocity.x=-slowSpeed;
								sprite.animations.play('enemyWalkLeft');
							}
							if(Math.floor((sprite.y+16)/64)>result[currWaypoint].y){
								sprite.body.velocity.y=-slowSpeed;
								sprite.animations.play('enemyWalkUp');
							}
						}
					}
			}
		}
}

