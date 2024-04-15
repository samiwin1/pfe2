import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import MongooseModule
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './Destinations.service'; 
import mongoose from 'mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ 
      name: 'Destination', 
      schema: new mongoose.Schema({ // Define the schema inline
        name: String,
        description: String,
        location: String
      })
    }]) 
  ],
  controllers: [DestinationsController],
  providers: [DestinationsService]
})
export class DestinationsModule {}