class Global{

    public static StatusCollector = {
        NULL:''
        ,BTN_BEGIN:'A'
        ,BTN_SINGLE:'Aa'
        ,BTN_DOUBLE:'Ab'
        ,PANEL_HELP:'B'
        ,STATUS_READY_PLAY:'C'
        ,STATUS_PLAYING:'D'
        ,PANEL_PAUSE:'E'
        ,PANEL_EXIT:'F'
        ,PANEL_GAMEOVER:'G'
        ,PANEL_ANIMAL:'H'
        ,BTN_UNLOCKLEVEL:'I'
        ,PANEL_TOOLS:'J'
        ,PANEL_PHOTOS:'K'
        ,PANEL_AD:'L'
        ,PANEL_FLY:'panel_fly'
        ,BOARD_REBORN:'board_reborn'
        ,BOARD_VIDEOAD:'board_viedoad'
    };
    public static Direction = {
        UP:'up',
        DOWN:'down',
        LEFT:'left',
        RIGHT:'right'
    };
    public static keyStatus:string ='';
    public static playModel:string;

    public static HIGHEST_SCORE_TAG:string = 'wuxianxiangshang_c';
    public static LEVEL_TAG:string = 'levelTag_1';//记录
    public static ANIMAL_TAG:string = 'animalTag_1';
    public static GOLD_SUM_NAME:string = 'goldSum_1';
    public static DIAMOND_SUM_NAME:string = 'diamondSum_1';
    //public static levelPlaying:number = 0;
    public static rolePlaying:number = 0;

    public static CLIENT = 'WEB';//WEB,'AND
    public static HAS_AD:boolean = false;
    public static adData;
    public static _adArr = [];
    public static canShowAdBeforeReplay:boolean = true;
    public static ALPHA_UNFOCUS:number = 0.6;
    /** 舞台数据 */
    public static STAGE_WIDTH:number;
    public static STAGE_HEIGHT:number;
    // 单双人模式: 1/2
    /*public static PEOPLE_MODEL:number=1;*/
    public static playTwoInOneCtrl:boolean = false;

    public static photo1_index:number;
    public static photo2_index:number;
    /** 音效控制 */
    public static musicSwitch:string = 'ON';
    /*public static musicBgm:egret.Sound;
    public static musicEnd;*/

    public static whoDie;
//    public static SOUND_ARR = {'bgm':RES.getRes('bgm'),end:RES.getRes('end')};

    public static initialGlobalData(w:number,h:number){
        Global.STAGE_WIDTH = w;
        Global.STAGE_HEIGHT = h;
        this.initialMusic();
        if(Global.CLIENT=='WEB'||!Global.HAS_AD){
            Global.adData = '[{"picture":"http:\/\/meiriq-static.b0.upaiyun.com\/gameslibrary\/storage\/uploads\/20151015\/c88db4ef.png","channel":"znds","link":"http:\/\/meiriq-static.b0.upaiyun.com\/static\/TV\/ad_1.0\/penguin_v1.1.1_2015-10-07_advertise.apk","summary":"chaping1","name":"com.meiriq.game.androidtv. penguin"},{"picture":"http:\/\/meiriq-static.b0.upaiyun.com\/gameslibrary\/storage\/uploads\/20151015\/dfcc6f29.png","channel":"znds","link":"http:\/\/meiriq-static.b0.upaiyun.com\/static\/TV\/ad_1.0\/third_app\/dangbeishichang.apk","summary":"tuijian1","name":"com.tv.zhuangjibibei"},{"picture":"http:\/\/meiriq-static.b0.upaiyun.com\/gameslibrary\/storage\/uploads\/20151015\/41d2ecf9.png","channel":"znds","link":"http:\/\/meiriq-static.b0.upaiyun.com\/static\/TV\/ad_1.0\/PandaOne_v1.0.1_2015-10-07_advertise.apk","summary":"tuijian2","name":"com.meiriq.game.androidtv.pandaone"},{"picture":"http:\/\/meiriq-static.b0.upaiyun.com\/gameslibrary\/storage\/uploads\/20151015\/df7466be.png","channel":"znds","link":"http:\/\/meiriq-static.b0.upaiyun.com\/static\/TV\/ad_1.0\/flashingman_v1.0.1_2015-10-07_advertise.apk","summary":"tuijian3","name":null}]';
            Global.adData = JSON.parse(Global.adData);
        }
        if(!egret.localStorage.getItem(Global.HIGHEST_SCORE_TAG)){
            egret.localStorage.setItem(Global.HIGHEST_SCORE_TAG,'0');
            egret.localStorage.setItem(Global.GOLD_SUM_NAME,'0');
            egret.localStorage.setItem(Global.DIAMOND_SUM_NAME,'0');
            egret.localStorage.setItem(Global.ANIMAL_TAG,'1&0&0');
        }
    }
    public static initialMusic(){
//        if(Global.CLIENT=='WEB'){
//            Global.musicBgm = RES.getRes('bgm');
//        }
        Global.playBgmMusic();
    }
    public static playBgmMusic(){
        if (Global.CLIENT=='WEB'){
            console.log('play-music');
//            Global.musicBgm.play(true);
        }else{
            egret.ExternalInterface.call( "android_openSound", "bgm,true" );
        }
    }
    public static setWhoDie(p:number){//双人模式下 [1,2]
        Global.whoDie = p;
    }
    public static getWhoDie(){
        return Global.whoDie;
//        if(TopPanel.score1==TopPanel.score2){
//            return 3;
//        }else if(TopPanel.score1>TopPanel.score2){
//            return 2;
//        }else
//            return 1;
    }
    public static stopBgmMusic(){
        if (Global.CLIENT=='WEB'){
            console.log('pause-music');
//            Global.musicBgm.pause();
        }else{
            egret.ExternalInterface.call( "android_closeSound", "bgm" );
        }
    }
}