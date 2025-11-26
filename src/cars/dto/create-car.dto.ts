import { IsString } from 'class-validator';

export class CreateCarDto {

    @IsString()
    readonly Modelo: string;

    @IsString()
    readonly Model: string;
}
