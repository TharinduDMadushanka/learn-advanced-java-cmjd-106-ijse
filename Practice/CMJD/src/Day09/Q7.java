package Day09;

//Q429 Exercise 10
// reverse an array

import java.util.Arrays;

class Q7 {

    public static void main(String[] args) {
        int[] ar = {32, 45, 68, 74, 59, 99, 14, 39, 24, 64, 92};
        System.out.println(Arrays.toString(ar)); // [32,45,68,74,59,99,14,39,24,64,92]
        reverse(ar);
        System.out.println(Arrays.toString(ar)); // [92,64,24..................45,32]
    }

    public static void reverse(int[] ar) {
        for (int i = 0, j = ar.length - 1; i < j; i++, j--) {
            int temp = ar[i];
            ar[i] = ar[j];
            ar[j] = temp;
        }
    }

}

