//Web Menu for Showcase
//Animation sys in Javascript
game.addAsset('LB.png');	//Slide around on B Bkgd;
game.addAsset('W.png');
for (var i=1,i<6,i++){
var W[i] = new game.Sprite('W.png');}
var imgFrames = new Array('');//ALL IMGS FOR WEBSITE
setup();

function setup(){
	for (var i=0,i<32,i++){			//Img 6x6 grid
		game.addAsset('Img[i].png');//Make var if necessary
		imgFrames[i]=new game.Sprite('Img[i].png');}
		
	//Less typing write gw as 
	var gw = game.System.Width; var gh = game.System.Height;
	W1.position.set=(0,gh/2); W2.position.set=(gw/4,gh/2);
	W3.position.x = (gw/4)*2; W3.psoition.y = gh/2;
	var msg = new Text("Mad Mouse Media!",
	{font: "32px sans-serif", fill: "black"});
	//msg.position.set(,);
	msg.position.x=W3.position.x;
	msg.position.y=W3.position.y;
	state=play();
	mainLoop();}
	
	//For above function to work
	//Name all images for website Img1.png, Img2.png etc
function wait(p1){
console.log('before');
//Only setTimeOut avoids freezing
setTimeout(function(){
//return();
console.log('after');},p1);
//var r = p1*2;
//return(r); //if necessary
}	

function mainLoop(){
//Loop this function 60 times per second
  requestAnimationFrame(gameLoop);
//Update the current game state
  state();
//Render the stage
  renderer.render(stage);
}

//Use console.log to report ('msg string',vars,etc)
//var arr = [1, 2, 3];console.log(arr.length, this);

function play(){
	W1.addTo(this.stage);W2.addTo(this.stage);
	W3.addTo(this.stage);msg.addTo(this.stage);
	wait(10000);	//Calls wait funct, return here???
	console.log('Return after wait successful!');
	msg.visible = false;
	msg.addTo(this.stage);
	
	//TODO Check return script before continuing
	//Check ScaleToWindow lib by kitty for Mobile support
	
	

	