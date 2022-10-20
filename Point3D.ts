import {Point2D} from "./Point2D";

export class Point3D extends Point2D {
    protected z:number;
    constructor(x:number,y:number,z:number) {
        super(x,y);
        this.z = z;
    }
    setZ(z:number):void {
        this.z=z;
    }
    getZ():number{
        return this.z;
    }
    setXYZ(x:number,y:number,z:number):void {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getXYZ():object {
        return {
            x:this.x,
            y:this.y,
            z:this.z
        }
    }

};