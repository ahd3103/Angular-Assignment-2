import { FormControl } from "@angular/forms";

export interface IimageArray{
id:number;
imgUrl:string;
imgCapt:string;
}

export interface Iimage{
    id: FormControl<null>;
    imgUrl:FormControl<string | null>;
    imgCapt:FormControl<string | null>;
    }
