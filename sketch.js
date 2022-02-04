const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;

var solo;
var paredeEsquerda;
var paredeDireita;
var teto;
var bola;

var btn1;
var btn2;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    btn1 = createImg();
    btn1.position();
    btn1.size();
    btn1.mouseClicked();

    btn2 = createImg();
    btn2.position();
    btn2.size();
    btn2.mouseClicked();

    solo = new Parede(200, 390, 400, 20);
    paredeDireita = new Parede(390, 200, 20, 400);
    paredeEsquerda = new Parede(10, 200, 20, 400);
    teto = new Parede(200, 10, 400, 20);

    var bolaProp = {
        restitution: 0.95
    }



    rectMode(CENTER);

}

function draw() {
    background(51);



    solo.show();
    teto.show();
    paredeEsquerda.show();
    paredeDireita.show();
    Engine.update(engine);
}


function hForce() {

}

function vForce() {

}