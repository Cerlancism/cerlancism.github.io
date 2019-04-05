function tower(tempInt,posX,posY){
	
	var towerType = tempInt;	
	var sprite;
	
	var fireRate = 1000;
	var nextFire = 0;
	

	updateFireRate();
	
	
	sprite = game.add.sprite(posX,posY,'Towers',towerType);
	game.physics.enable(sprite, Phaser.Physics.ARCADE);
	
	function updateFireRate(){
		switch(towerType){
			case(0):fireRate=1000;
					break;
			case(1):fireRate=800;
					break;		
			case(2):fireRate=700;
					break;			
			
			case(3):fireRate=1500;	
					break;	
			case(4):fireRate=1250;	
					break;		
			case(5):fireRate=1100;	
					break;			
				
			case(6):fireRate=500;		
					break;		
			case(7):fireRate=300;		
					break;		
			case(8):fireRate=200;	
					break;			
						
			case(9):fireRate=1500;		
					break;		
			case(10):fireRate=1250;		
					break;		
			case(11):fireRate=1100;		
					break;	
						
			case(12):fireRate=500;		
					break;		
			case(13):fireRate=375;		
					break;		
			case(14):fireRate=250;		
					break;		
	}
	};
	
	this.getType=function (){
		return towerType;	
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
	this.fireBullet=function(){
	if (game.time.now > nextFire)
    	{
       		 nextFire = game.time.now + fireRate;
			 return true;
		}else return false;
		
	}

	this.upgradeTower=function(){
			towerType++;
			sprite.frame=towerType;			
			updateFireRate();		
	};


}

