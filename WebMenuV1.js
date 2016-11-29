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
	W1.position.set=(0,gh/2); W2.position.set=()
	state=play();
	mainLoop();}
	
	//For above function to work
	//Name all images for website Img1.png, Img2.png etc
	
function mainLoop(){
requestAnimFrame(play);
state();
}

function play(){

	