class Particula {
    constructor(_x, _y) {
        this.pos = createVector(_x,_y) ;

        this.vel = p5.Vector.random2D();
        this.vel.setMag(random(0.5,2))
        this.tVida = int(random(100, 300))
        this.tVidaInicial = this.tVida
        this.estaMuerta = false;
        this.diam = random(10,30);
        this.gravedad = createVector(0,0,98);
        this.velAngular = random(-0.01, 0.1);

        this.c = color(random(200, 250), random(100, 150), random(150, 255));
        console.log("Hola estoy viva")

    }

    update(){  
        if(!this.estaMuerta){
            this.vel.add(this.gravedad);
            this.vel.normalize();
            this.vel.rotate(this.velAngular);
            this.tVida -= 1;
            this.pos.add(this.vel);
            
        }
        if(this.tVida <= 0 && !this.estaMuerta) {
            console.log("ahhhhhhh! gokuuuuu * explota *")
            this.estaMuerta= true;
        }
    }
    display(){
        // fill(this.c);
        // noStroke();

        // this.fDiam= map(this.tVida, this.tVidaInicial, 0, this.diam, 0);


        // circle(this.pos.x, this.pos.y, this.fDiam);
     fill(this.c);
     noStroke();

     this.fDiam = map(this.tVida, this.tVidaInicial, 0, this.tVidaInicial, 0);
     this.fDiam = map(this.tVida, this.tVidaInicial, 0, this.diam, 0);
     let d = this.fDiam;

     push();
     translate(this.pos.x, this.pos.y);
     rotate(this.vel.heading() / 2); // da sensación de vuelo suave

     beginShape();
     vertex(0, -d * 0.6); // punta superior estrecha
     bezierVertex(
       d * 0.5,
       -d * 0.4, // curva superior derecha
       d * 0.6,
       d * 0.3, // eje derecho
       0,
       d * 0.6 // base ancha
     );
     bezierVertex(
       -d * 0.6,
       d * 0.3, // eje izquierdo
       -d * 0.5,
       -d * 0.4, // curva superior izquierda
       0,
       -d * 0.6 // vuelve a la punta
     );
     endShape(CLOSE);

     pop();   
    }
}