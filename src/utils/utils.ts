
module utils {


    export function dragToPosition(objMove) {
        var tipPos = new egret.TextField();
        this.setProperties(tipPos,{
            x: objMove.x,
            y: objMove.y,
            text: '' + parseInt(objMove.x) + ',' + parseInt(objMove.y),
            size: 25,
            textColor: 0x000000,
            stroke: 2,
            strokeColor: 0x00ff00
        });
        objMove.parent.addChild(tipPos);
        //objMove.touchEnabled = true;
        //objMove.addEventListener(egret.TouchEvent.TOUCH_MOVE,(evt:egret.TouchEvent)=>{
        //    objMove.x += (evt.stageX-objMove.parent.x-objMove.x);
        //    objMove.y += (evt.stageY-objMove.parent.y-objMove.y);
        //    tipPos.x = objMove.x;tipPos.y = objMove.y;
        //    tipPos.text = ''+parseInt(objMove.x)+' & '+parseInt(objMove.y);
        //    console.log(''+parseInt(objMove.x)+'---'+parseInt(objMove.y))
        //},this);

        window["debugObj"] = objMove.parent;
        window["keyDebug_8"] = function () {
            objMove.y -= 2;
            tipPos.x = objMove.x;
            tipPos.y = objMove.y;
            tipPos.text = '' + parseInt(objMove.x) + ' & ' + parseInt(objMove.y);
            console.log('' + parseInt(objMove.x) + '---' + parseInt(objMove.y));
        };
        window["keyDebug_6"] = function () {
            objMove.x += 2;
            tipPos.x = objMove.x;
            tipPos.y = objMove.y;
            tipPos.text = '' + parseInt(objMove.x) + ' & ' + parseInt(objMove.y);
            console.log('' + parseInt(objMove.x) + '---' + parseInt(objMove.y));
        };
        window["keyDebug_2"] = function () {
            objMove.y += 2;
            tipPos.x = objMove.x;
            tipPos.y = objMove.y;
            tipPos.text = '' + parseInt(objMove.x) + ' & ' + parseInt(objMove.y);
            console.log('' + parseInt(objMove.x) + '---' + parseInt(objMove.y));
        };
        window["keyDebug_4"] = function () {
            objMove.x -= 2;
            tipPos.x = objMove.x;
            tipPos.y = objMove.y;
            tipPos.text = '' + parseInt(objMove.x) + ' & ' + parseInt(objMove.y);
            console.log('' + parseInt(objMove.x) + '---' + parseInt(objMove.y));
        };
    }

    /**
     * 几何计算类 ******************************************************************************************************
     **/
    /** 计算两点距离 **/
    export function distPoint(obj1, obj2) {
        return Math.sqrt((obj1.x - obj2.x) * (obj1.x - obj2.x) + (obj1.y - obj2.y) * (obj1.y - obj2.y));
    }

    /** 基于矩形的碰撞检测 **/
    export function hitTestRectRect(objRect1:egret.DisplayObject, objRect2:egret.DisplayObject):boolean {
        var rect1:egret.Rectangle = objRect1.getBounds();
        var rect2:egret.Rectangle = objRect2.getBounds();
        rect1.x = objRect1.x;// - objRect1.width*objRect1.anchorOffsetX;
        rect1.y = objRect1.y;// - objRect1.height*objRect1.anchorOffsetY;
        rect2.x = objRect2.x;// - objRect2.width*objRect2.anchorOffsetX;
        rect2.y = objRect2.y;// - objRect2.height*objRect2.anchorOffsetY;
        return rect1.intersects(rect2);
    }

    export function hitTestRoundRound(objR1, objR2) {//:boolean
        if (this.distPoint(objR1, objR2) < objR1.width / 2 + objR2.width / 2)
            return true;
        else
            return false;
    }

    export function hitTestRectRound() {

    }


    /**
     * 数组操作类 ******************************************************************************************************
     */

    /** 循环右移数组 **/
    export function loopRight(arr:any) {
        var ele = arr.pop();
        arr.unshift(ele);
        return arr;
    }

    /** 循环左移数组 **/
    export function loopLeft(arr:any) {
        var ele = arr.shift();
        arr.push(ele);
        return arr;
    }

    /**  */
    export function inArr(arr, element:number):boolean {
        var isIn:boolean = false;
        for (var i in arr) {
            if (arr[i] == element) {
                isIn = true;
                break;
            }
        }
        //egret.log(isIn)
        return isIn;
    }

    /**
     * 字符串操作类 ******************************************************************************************************
     */
    //返回由分隔符分开组成的数组的第几个字符子串
    export function getStrSplit(iStr:string, tagSeperator:string, ind:number) {
        var strArr = iStr.split(tagSeperator);
        return strArr[ind];
    }

    //返回第一个标识符之前的字符子串
    export function getStrHead(iStr:string, tagSeperate:string) {
        return iStr.substring(0, iStr.indexOf(tagSeperate));
    }

    //返回最后一个标识符之后的字符子串
    export function getStrRear(iStr:string, tagSeperate:string) {
        return iStr.substring(iStr.lastIndexOf(tagSeperate) + 1);
    }

    //返回两个标识符之间的字符子串
    export function getStrCenter(iStr:string, tagSeperate:string) {
        return iStr.substring(iStr.indexOf(tagSeperate) + 1, iStr.lastIndexOf(tagSeperate));
    }

    /**
     * 正则表达式类
     */
    /** 搜索匹配并好的数组元素*/
    export function matchArr(arr:any, exp:string) {
//        var
    }

    /**
     * 网络类
     */
    export function setReq(url:string) {
        var loader = new egret.URLLoader();
        var urlReq = new egret.URLRequest();
        urlReq.url = url;
        loader.load(urlReq);
        return loader;
    }

    /**
     * 处理对象类 ******************************************************************************************************
     */
    export function setProperties(obj:any, objProperty, objAnchor?) {
        for (var i in objProperty) {
            obj[i] = objProperty[i];
        }
    }

    export function setAnchor(obj:any, aX:number, aY:number) {
        obj.anchorOffsetX = obj.width * aX;
        obj.anchorOffsetY = obj.height * aY;
    }

    export function remObjByName(Container:any, Name:string) {
        Container.removeChild(Container.getChildByName(Name));
    }

    /**
     * 创建新对象类 ******************************************************************************************************
     */
    export function newMC(obj, container?:egret.DisplayObjectContainer):egret.MovieClip {
        var data = RES.getRes(obj.jsonData);
        var texture = RES.getRes(obj.textureData);
        var mcDataFactory = new egret.MovieClipDataFactory(data, texture);
        var newChild:egret.MovieClip = new egret.MovieClip(mcDataFactory.generateMovieClipData(obj.mcName));
        if (container)
            container.addChild(newChild);
        return newChild;
    }

    export function drawShape(obj, objDraw, container?:egret.DisplayObjectContainer) {
        var newChild = obj.objType == 'Sprite' ? new egret.Sprite() : new egret.Shape();
        delete obj.objType;
        if (objDraw.thickness)
            newChild.graphics.lineStyle(objDraw.thickness, objDraw.colorLine);
        if (obj.drawType) {
            if (objDraw.alpha) {
                newChild.graphics.beginFill(objDraw.colorFill, objDraw.alpha);
            }
            switch (obj.drawType) {
                //case 'arc':
                //    newChild.graphics.drawArc( objDraw.x, objDraw.y, objDraw.radius, objDraw.startAngle, objDraw.endAngle, objDraw.anticlockwise );
                //    break;
                case 'circle':
                    newChild.graphics.drawCircle(objDraw.x, objDraw.y, objDraw.radius);
                    break;
                case 'ellipse':
                    newChild.graphics.drawEllipse(objDraw.x, objDraw.y, objDraw.width, objDraw.height);
                    break;
                case 'rect':
                    newChild.graphics.drawRect(objDraw.x, objDraw.y, objDraw.width, objDraw.height);
                    break;
                case 'roundRect':
                    newChild.graphics.drawRoundRect(objDraw.x, objDraw.y, objDraw.width, objDraw.height, objDraw.ellipseWidth, objDraw.ellipseHeight);
            }
            if (objDraw.alpha)
                newChild.graphics.endFill();
            delete obj.drawType;
        } else if (obj.lineType) {
            if (objDraw.x0)
                newChild.graphics.moveTo(objDraw.x0, objDraw.y0);
            switch (obj.lineType) {
                case 'cubicCurve':
                    newChild.graphics.cubicCurveTo(objDraw.controlX1, objDraw.controlY1, objDraw.controlX2, objDraw.controlY2, objDraw.anchorX, objDraw.anchorY);
                    break;
                case 'cubic':
                    newChild.graphics.curveTo(objDraw.controlX, objDraw.controlY, objDraw.anchorX, objDraw.anchorY);
                    break;
                case 'line':
                    newChild.graphics.lineTo(objDraw.x, objDraw.y);
            }
            delete obj.lineType;
        }
        for (var i in obj) {
            newChild[i] = obj[i];
        }
        if (container)
            container.addChild(newChild);
//        var sp = new egret.Sprite();//todo 渐变颜色的图形的绘制
//        var m = new egret.Matrix();
//        m.createGradientBox(500,40,0,0,0);
//        sp.graphics.beginGradientFill(egret.GradientType.LINEAR,[0xff0000,0x00ff00,0x0000ff],[0.3,0.7,1],[80,170,255],m);
//        sp.graphics.drawRect(200,200,500,40);
//        sp.graphics.endFill();
//        this.addChild(sp);
        return newChild;
    }

    export function addChildren(container:any, arr) {
        for (var i in arr) {
            container.addChild(arr[i]);
        }
    }

    export function remChildren(container:any, arr) {
        for (var i = 0; i < arr.length; i++) {
            container.removeChild(arr[i]);
        }
    }


}


/*

     //防止掉帧产生位置变化差
     var nowTime:number = egret.getTimer();
     var fps:number = 1000/(nowTime-this._lastTimeMain);
     var speedOffset:number = 60/fps;

     //URLLoader和URLRequest的使用
     private startLoad():void {
         //创建 URLLoader 对象
         var loader:egret.URLLoader = new egret.URLLoader();
         //设置加载方式为纹理
         loader.dataFormat = egret.URLLoaderDataFormat.TEXTURE;
         //添加加载完成侦听
         loader.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
         //添加加载失败侦听
         loader.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onLoadError, this);
         var url:string = "resource/assets/egret_icon.png";
         var request:egret.URLRequest = new egret.URLRequest(url);
         //开始加载
         loader.load(request);
     }

     private onLoadComplete(event:egret.Event):void {
         console.log("onLoadComplete");
         var loader:egret.URLLoader = <egret.URLLoader>event.target;
         //获取加载到的纹理对象
         var texture:egret.Texture = <egret.Texture>loader.data;
         console.log(texture);
     }

     private onLoadError():void {
        console.log("onLoadError");
     }

 //////////////////////////////////////////   Timer   /////////////////////////////////////////////////

     var timeDelay:egret.Timer = new egret.Timer(10);
     timeDelay.addEventListener(egret.TimerEvent.TIMER,function(){
     this.btnBegin.scaleX = this.btnBegin.scaleY = this.btnBegin.scaleY - 0.1;
     //当缩放到0.8级别时停止缩放，跳到游戏开始界面
     if(this.btnBegin.scaleY==0.8){
     timeDelay.stop();
     this.tapBtnBegin();
     }
     },this);
     timeDelay.start();

     timerDelay.stop();

     timerDelay.delay = 900;

 //////////////////////////////////////////   Tween   /////////////////////////////////////////////////

     var tw = egret.Tween.get(event.target);
     tw.to({'scaleX':0.9,'scaleY':0.9},20);

     egret.Tween.removeAllTweens()


 */
