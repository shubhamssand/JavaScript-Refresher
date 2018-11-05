class volume{
    constructor(length,breadth,height){
        this.length=length;
        this.breadth=breadth;
        this.height=height;
    }

    static compareVolume(v1,v2){
        var v1=v1.length*v1.breadth*v1.height;
        var v2=v2.length*v2.breadth*v2.height;

        if(v1>v2){
            return v1;
        }
        else{
            return v2;
        }
    }

}

const volume1=new volume(10,20,10);
const volume2=new volume(5,10,5);

console.log(volume.compareVolume(volume1,volume2));