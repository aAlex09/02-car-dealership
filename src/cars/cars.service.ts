import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [{
        id:0,
        marca: 'Audi', 
        model: 'R8', 
    },
    {
        id:1,
        marca: 'BMW',
        model: 'M4',
    }];

}
