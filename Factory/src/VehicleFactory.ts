import { Bike } from "./Bike";
import { Car } from "./Car";
import { Vehicle } from "./Vehicle";

export class VehicleFactory
{
    public static getInstance(type: string, capacity : number) : Vehicle
    {
        var vehicle : Vehicle = null;

        if(type.match("Bike"))
        {
            vehicle =  new Bike(capacity);
        }
        else if(type.match("Car"))
        {
            vehicle =  new Car(capacity);
        }

        return vehicle;
    }
}