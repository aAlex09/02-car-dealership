import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { get } from 'http';

@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

/*     @Get()
    getAllCars(){
        return this.carsService.findAll;
    } */

    /* @Get(':id')
    getCarById(@Param('id') id: String){
        console.log({id})
        return this.cars[Number(id)];
    } */


        
    @Get(':id')
    getCardById(@Param('id', ParseIntPipe) id:number){
        console.log({id});

        throw new Error('Auxilioooo!!!');

        return this.carsService.findOneById(id);
    }
}
