import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DestinationsService } from './Destinations.service'; 
import { CreateDestinationDto, UpdateDestinationDto } from './dto/destination.dto';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  async findAll() {
    return this.destinationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.destinationsService.findOne(id);
  }

  @Post()
  async create(@Body() createDestinationDto: CreateDestinationDto) {
    return this.destinationsService.create(createDestinationDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDestinationDto: UpdateDestinationDto) {
    return this.destinationsService.update(id, updateDestinationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.destinationsService.remove(id);
  }
}