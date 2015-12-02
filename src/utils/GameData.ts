module utils{
    class GameData {
        static keyOfLocalData = 'game_';
        static localData = {
            score: 0
        };
        static initLocalData(){
            var strDataLocal = egret.localStorage.getItem(this.keyOfLocalData);
            if(strDataLocal){
                this.localData = JSON.parse(strDataLocal);
            }else{
                this.storageLocalData();
            }
        }
        static getLocalData(name:string){
            return this.localData[name];
        }
        static storageLocalData(name?:string,val?:any){
            if(name)
                this.localData[name] = val;
            var strData = JSON.stringify(this.localData);
            egret.localStorage.setItem(this.keyOfLocalData,strData);
        }

    }
}