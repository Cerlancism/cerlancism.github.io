function trap(tempInt,posX,posY){
	
	var trapType = tempInt;	
	var sprite;
	
	
	
	sprite = game.add.sprite(posX,posY,'Traps',trapType);
	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	
	sprite.scale.set(0.7);
	sprite.anchor.set(-0.2);
	switch(trapType){
		case(0):sprite.animations.add('trap',[0,1,2,3],4,true);
				break;
		case(4):sprite.animations.add('trap',[4,5,6,7],4,true);
				break;
		case(8):sprite.animations.add('trap',[8,9,10,11],4,true);
				break;
		case(12):sprite.animations.add('trap',[12,13,14,15],4,true);
				break;
		case(16):sprite.animations.add('trap',[16,17,18,19],4,true);
				break;
		}
	sprite.animations.play('trap');

	this.getType=function (){
		return trapType;	
	};
	
	this.getPosX=function (){
		return sprite.x;	
	};
	this.getPosY=function (){
		return sprite.y;	
	};
	this.getSprite=function(){
		return sprite;
	};
	

}

