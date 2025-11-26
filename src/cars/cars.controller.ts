import { Controller, Get, Param, ParseUUIDPipe, Body, Post, Patch, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { get } from 'http';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
    
    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    /* @Get(':id')
    getCarById(@Param('id') id: String){
        console.log({id})
        return this.cars[Number(id)];
    } */


        
    @Get(':id')
    getCardById(@Param('id', new ParseUUIDPipe()) id: string){
        console.log({id});
        return this.carsService.findOneById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createCar(@Body() createCarDto: CreateCarDto){
       return createCarDto;
    }

    @Patch(':id')
    updateCar(@Body() body:any){
       return body;
    }

    @Delete(':id')
    deleteCar(@Param('id', new ParseUUIDPipe()) id:number){
       return {
        method: 'delete',
        id
       };
    }


}
