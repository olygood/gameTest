import {Sprite} from './sprite.js';
import {ImageLoader} from './imageLoader.js'

// VARIABLES-----------------------------------------------
let perso;
let enemy;
let keyRight = false;
let keyLeft =false;
let keyUp = false;
let keyDown = false;
let keySpace = false;
let gameReady = false;
let listSpritesNiv1 = [];
// let mySprite;
let scaleX = 2;
let scaleY= 2; 
// Instance de la class imageLoader.js-----------------
let imageLoader = new ImageLoader();

// FUNCTION---------------------------------------------
 export function aleatoire(min,max){
    return Math.floor(Math.random()* (max-min)) + min;
}
// export function startGame(){
//     console.log('start Game true');
//     listSpritesNiv1 = [];
//     for(let el of Object.values(imageLoader.getListImages())){
//         console.log(el);
//         let mySprite = new Sprite(el);
//         mySprite.x = aleatoire(1,700);
//         mySprite.y = aleatoire(1,600);
//         listSpritesNiv1.push(mySprite);
// }
   
  
   
//         gameReady = true;   
    
//     } 

/* keyBord touche enfoncées--------------------------*/
function toucheEnfoncee(t){
    t.preventDefault();
    if(t.code == 'ArrowRight'){
        keyRight = true;
    }
    if(t.code == 'ArrowLeft'){
        keyLeft = true;
    }
    if (t.code == 'ArrowUp'){
        keyUp = true;
    }
    if  (t.code == 'ArrowDown'){
        keyDown = true;
    }
    if(t.code == 'Space'){
        keySpace = true;
    }
    console.log(t)
}
/* keyBord touche relachées--------------------------*/
function toucheRelachee(t){
    t.preventDefault();
    if(t.code == 'ArrowRight'){
        keyRight = false;
    }
    if(t.code == 'ArrowLeft'){
        keyLeft = false;
    }
    if (t.code == 'ArrowUp'){
        keyUp = false;
    }
    if  (t.code == 'ArrowDown'){
        keyDown = false;
    }
    if(t.code == 'Space'){
        keySpace = false;
    }
    console.log(t)
}
// LOAD--------------------------------------------------------
export function load(){
   
    document.addEventListener('keydown', toucheEnfoncee, false);
    document.addEventListener('keyup', toucheRelachee, false);
    perso = new Sprite('images/tile_0265.png', 10, 10);
    enemy = new Sprite('images/tile_0323.png',10, 100);
    imageLoader.add('images/player.png');
    imageLoader.add('images/enemyred.png');

    // toute les chemin de toutes les images--------------------
    // imageLoader.add('./images/transparent/tile_0381.png');
    // imageLoader.add('./images/transparent/tile_0381.png');
    // imageLoader.add('./images/transparent/tile_0382.png');
    // imageLoader.add('./images/transparent/tile_0383.png');
    // imageLoader.add('./images/transparent/tile_0384.png');
    // imageLoader.add('./images/transparent/tile_0385.png');
    // imageLoader.add('./images/transparent/tile_0386.png');
    // imageLoader.add('./images/transparent/tile_0387.png');
    // imageLoader.add('./images/transparent/tile_0388.png');
    // imageLoader.add('./images/transparent/tile_0389.png');
    // imageLoader.add('./images/transparent/tile_0390.png');
    // imageLoader.add('./images/transparent/tile_0391.png');
    // imageLoader.add('./images/transparent/tile_0392.png');
    // imageLoader.add('./images/transparent/tile_0393.png');
    // imageLoader.add('./images/transparent/tile_0394.png');
    // imageLoader.add('./images/transparent/tile_0395.png');
    // imageLoader.add('./images/transparent/tile_0396.png');
    // imageLoader.add('./images/transparent/tile_0397.png');
    // imageLoader.add('./images/transparent/tile_0398.png');
    // imageLoader.add('./images/transparent/tile_0399.png');
    
    // imageLoader.start(startGame);
   
}
   

// UPDATE-----------------------------------------------------------
export function update(pDeltaTime){
   if(keyRight){
    perso.x += 5;
   }
   if(keyLeft){
    perso.x -= 5;
   }
   if(keyUp){
    perso.y -=5;
   }
   if(keyDown){
    perso.y += 5;
   }
   if(keySpace){
    perso.y -= 10;
    
   }
   if(!gameReady){
    return;
   }

   //suite du code si la variable gameready est true…ou prêt…
}
// DRAW------------------------------------------------------------------------
export function draw(pCtx){
    perso.drawSprite(pCtx);
    enemy.drawSprite(pCtx);
    if(!gameReady){
        return;
       }
//     listSpritesNiv1.forEach(sprite => {
//         sprite.drawSprite(pCtx);
//         // mySprite.drawSprite(pCtx);
// });
   
}