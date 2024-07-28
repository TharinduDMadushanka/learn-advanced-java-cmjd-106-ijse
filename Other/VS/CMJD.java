import java.util.Scanner;

class main{
    public static void main(String [] args){
        
        Scanner input =new Scanner(System.in);

        System.out.print("Input an Integer : ");
		int num = scanner.nextInt();
        
		//int sum = 0;

		while(num != 0){
			num=num%10; 
            System.out.print(num);
			num /= 10;
		}

		//System.out.println("Sum of Digits : " + sum);
    }

}

