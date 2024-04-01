function bullet(positionX,positionY,enemy,tempType){
	
	
	var posX=positionX;
	var posY=positionY;
	var target=enemy;
	var sprite;
	var type= tempType;
	
	sprite=game.add.sprite(posX,posY,'Bullets',0);
	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	sprite.anchor.set(0.5,0.5);
	sprite.scale.set(0.5);
	var tempAnim;
	if(type==0 || type==1 || type==2){
	tempAnim=sprite.animations.add('explode',[0,1,2],10,false);
	tempAnim.killOnComplete=true;
	}
	if(type==3 || type==4 || type==5){
	tempAnim=sprite.animations.add('explode',[3,4,5],10,false);
	tempAnim.killOnComplete=true;
	}
	if(type==6 || type==7 || type==8){
	tempAnim=sprite.animations.add('explode',[6,7,8],10,false);
	tempAnim.killOnComplete=true;
	}
	if(type==9 || type==10 || type==11){
	tempAnim=sprite.animations.add('explode',[9,10,11],10,false);
	tempAnim.killOnComplete=true;
	}
	if(type==12 || type==13 || type==14){
	tempAnim=sprite.animations.add('explode',[12,13,14],10,false);
	tempAnim.killOnComplete=true;
	}
	
	sprite.animations.stop();
	
	this.getType=function(){
		return type;
	};
	
	this.getSprite=function(){
		return sprite;	
	};
	
	this.move=function(){
		if(target.getHP()>0){
			sprite.rotation = game.physics.arcade.moveToObject(sprite, target.getSprite(), 200);
			if(game.physics.arcade.overlap(target.getSprite(),sprite)&&!tempAnim.isPlaying){
				sprite.animations.play('explode');
				switch(type){
					case(0):target.minusHP(1);					
							break;
					case(1):target.minusHP(2);
							break;		
					case(2):target.minusHP(3);
							break;			
					
					case(3):target.minusHP(0.5);
							target.setSpeed(0.8);
							target.getSprite().tint=0x00FFFF;	
							break;	
					case(4):target.minusHP(0.3);
							break;		
					case(5):target.minusHP(0.35);
							break;			
						
					case(6):target.minusHP(0.75);	
							break;		
					case(7):target.minusHP(1);	
							break;		
					case(8):target.minusHP(1.25);
							break;	
							
					case(9):target.minusHP(0.5);	
							break;		
					case(10):target.minusHP(0.6);	
							break;		
					case(11):target.minusHP(0.7);
							break;			
								
					case(12):target.minusHP(7.5);		
							break;		
					case(13):target.minusHP(12.5);	
							break;		
					case(14):target.minusHP(15);		
							break;		
				}
	
				
				return true;
			}
		}else sprite.kill();
	};
	
	
	
}

