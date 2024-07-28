package Day09;

import java.util.Arrays;
import java.util.Scanner;

// Q435 Exercise 13
// add user input details to an array

class Q10 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Input marks (Press -1 to terminate the program) : ");
        int marks = input.nextInt();
        int[] marksArr = new int[0];
        while (marks != -1) {
            // add to array
            int[] temp = new int[marksArr.length + 1];
            for (int i = 0; i < marksArr.length; i++) {
                temp[i] = marksArr[i];
            }

            temp[temp.length - 1] = marks;
            marksArr = temp;
            System.out.println("Input marks (Press -1 to terminate the program) : ");
            marks = input.nextInt();
        }
        System.out.println(Arrays.toString(marksArr));

    }
}

