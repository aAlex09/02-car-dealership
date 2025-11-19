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
    },
    {
        id:2,
        marca: 'Ford',
        model: 'Mustang',
    },
    {
        id:3,
        marca: 'Reanult',
        model: 'Duster',
    }
    ]

    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id===id);
        return car;
    }


}
