class Pool extends egret.Bitmap{
    private static cacheDict:Object = {};
    /**生产*/
    public static produce(textureName:string):Pool{
        if(this.cacheDict[textureName]==null){
            this.cacheDict[textureName] = [];
        }
        var dict:Pool[] = this.cacheDict[textureName];
        var water:Pool;
        if(dict.length>0) {
            water = dict.pop();
        } else {
            water = new Pool(textureName);
        }
        //water.textureName = textureName;
        return water;
    }
    /**回收*/
    public static reclaim(water:Pool,textureName:string):void{
        if(this.cacheDict[textureName]==null)
            this.cacheDict[textureName] = [];
        var dict:Pool[] = this.cacheDict[textureName];
        if(dict.indexOf(water)==-1){
            dict.push(water);
        }
    }

    //public textureName:string;

    public constructor(textureName:string) {
        super(RES.getRes(textureName));
    }
}