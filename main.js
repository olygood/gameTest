import {draw, load, update, aleatoire} from './game.js';
import {ImageLoader} from './imageLoader.js';

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

let interval;
let lastUpdate = 0;
let fps = 0;

function showFps(){
    ctx.fillStyle= 'White';
    ctx.font ='normal 16pt Arial';
    ctx.fillText(Math.floor(fps) + '  fps',600,20);
    
    
}
function run(time){
    
        requestAnimationFrame(run)
        
        let dt = ( time  - lastUpdate ) /1000;
        //  condition if dt pour limiter a 60fps60fps
        // if(dt< (1/60)-0.001 ){
        //     return;
        // }

        fps = 1/dt;
        lastUpdate = time;
        update(dt);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw(ctx);
       showFps();
}

function init(){
    load();
    requestAnimationFrame(run)
   
}
init();

