// create-destination.dto.ts
export class CreateDestinationDto {
    id:string;
    name: string;
    description: string;
    location: string; // Include the location property
  }
  
  
  
  export class UpdateDestinationDto {
    name: string; // Make the name property required
    description?: string;
    location?: string;
    id: string;
  }