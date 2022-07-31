export class ImageLoader{
    constructor(){
        this.listPaths = [];
        this.callBack = null;
        this.loadedImageCount = 0; 
        this.listImages = [];
    }
     add(pPathImage){
        
        this.listPaths.push(pPathImage);
    }

    start(pCallBack){
        this.callBack = pCallBack;
        this.listPaths.forEach(el => {
            let img = new Image();
            img.onload = this.imageLoaded.bind(this);
            img.src= el;
            
            this.listImages[el] = img;
        })
    }
    
    getListImages(){
        return this.listImages;
    }

    getTotalImages(){
        console.log('le total des images');
         return this.listPaths.length;
        
        
    }

    getTotalImagesLoaded(){
        console.log('je suis les images qui load au fur et a mesure');
        return this.loadedImageCount;       
    }

    imageLoaded(e){
        this.loadedImageCount++;
        console.log('image charger:',e.target.currentSrc);
        if(this.loadedImageCount == this.listPaths.length){
            console.log('tout est charger,');
            this.callBack();
        }
    }

   
}
