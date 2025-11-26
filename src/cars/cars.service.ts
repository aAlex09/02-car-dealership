import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interfaces';

@Injectable()
export class CarsService {

    private cars: Car [] = [
    {
        id: uuid(),
        marca: 'Audi',
        model: 'R8'
    },
        
    {
        id: uuid(),
        marca: 'BMW',
        model: 'M4'
    },
        
    {
        id: uuid(),
        marca: 'Ford',
        model: 'Mustang'
    },
    
    { 
        id: uuid(),
        marca: 'Reanult',
        model: 'Duster'
    }    
    ]
    

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id===id);
        if (!car) throw new NotFoundException(`Car with id '${id}' not found`);
        return car;
    }

}
