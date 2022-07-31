export class Sprite {
    constructor( pSrc, pX=0, pY=0 , pScaleX, pScaleY){
        this.img = new Image();
        this.img.src = pSrc;
        this.x = pX;
        this.y = pY;
        this.scaleX= pScaleX;
        this.scalesY = pScaleY;
    }
    drawSprite(pCtx){
        pCtx.drawImage(this.img, this.x, this.y);
        pCtx.scale(this.scaleX,this.scalesY);
        
    }
}
