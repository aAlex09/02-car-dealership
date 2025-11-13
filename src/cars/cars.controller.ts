import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    
    private cars = ['Audi', 'Mercho', 'BMW'];

    @Get()
    getAllCars(){
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: String){
        console.log({id})
        return this.cars[Number(id)];
    }

}
