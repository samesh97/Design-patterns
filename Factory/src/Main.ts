import { VehicleFactory } from './VehicleFactory';

export class Main
{
    public static main() : void
    {
        var bike = VehicleFactory.getInstance("Bike",110);
        var car = VehicleFactory.getInstance("Car",1500);
    }
}