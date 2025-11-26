let sp = [];
let sc = []

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(245, 230, 255);
//   for (let i = 0; i < sp.length-1; i++) {
// 	noFill();
// 	stroke(255,0,0);
// 	line(sp[i].pos.x,sp[i].pos.y,sp[i+1].pos.x,sp[i+1].pos.y);
	
//   }
for (const [index, particula] of sc.entries()) {
  particula.update();
  particula.displayCirculos();

  if (particula.estaMuerta) {
    sc.splice(index, 1);
  }
}
  for(const [index, particula] of sp.entries()){
	particula.update()
	particula.displayPetalos()

	if(particula.estaMuerta){
		sp.splice(index,1);
	}
  }

  let np = new Particula(mouseX,mouseY);
  let np2 = new Particula(mouseX, mouseY);
  sp.push(np)
  sc.push(np2)
}

function mouseClicked(){
	let np = new Particula(mouseX, mouseY);
	sp.push(np)
	console.log("n particulas: ", sp.length)
}
