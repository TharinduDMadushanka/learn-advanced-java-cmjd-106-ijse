/**
 * Polymorphism
 * (Single Interface, Many Forms)
 */

package Day11;

class Vehicle{
    public void park(){
        System.out.println("Vehicle Parking");
    }
}

class Car extends Vehicle{
    public void park(){
        System.out.println("Car Parking");
    }
}

class Bus extends Vehicle{
    public void park(){
        System.out.println("Bus Parking");
    }
}

class Van extends Vehicle{
    public void park(){
        System.out.println("Van Parking");
    }
}
class Q19 {
    public static void main(String[] args) {
        Vehicle[] vehicles = {new Car(), new Bus(), new Van()};
        for (Vehicle vehicle : vehicles) {
            vehicle.park(); // Single Interface, Many Forms
        }
    }
}

