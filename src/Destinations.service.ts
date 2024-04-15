import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Destination,  } from './destination.interface';
import { UpdateDestinationDto } from './dto/destination.dto';

@Injectable()
export class DestinationsService {
  constructor(@InjectModel('Destination') private readonly destinationModel: Model<Destination>) {}

  async create(destination: Destination): Promise<Destination> {
    const createdDestination = new this.destinationModel(destination);
    return await createdDestination.save();
  }

  async findAll(): Promise<Destination[]> {
    return await this.destinationModel.find().exec();
  }

  async findOne(id: string): Promise<Destination> {
    const destination = await this.destinationModel.findById(id).exec();
    if (!destination) {
      throw new NotFoundException('Destination not found');
    }
    return destination;
  }

  async update(id: string, updateDestinationDto: UpdateDestinationDto): Promise<Destination> {
    const destination = await this.destinationModel.findById(id).exec();
    if (!destination) {
      throw new NotFoundException('Destination not found');
    }

    // Update the destination properties
    if (updateDestinationDto.name) {
      destination.name = updateDestinationDto.name;
    }
    if (updateDestinationDto.description) {
      destination.description = updateDestinationDto.description;
    }
    if (updateDestinationDto.location) {
      destination.location = updateDestinationDto.location;
    }

    return await destination.save();
  }

  async remove(id: string): Promise<Destination> {
    return await this.destinationModel.findByIdAndDelete(id).exec();
  }
}