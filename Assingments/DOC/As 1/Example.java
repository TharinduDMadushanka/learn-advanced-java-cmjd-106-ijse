class Example{
	public static void main(String args[]){
		System.out.println(9223372036854775807L); // Legal
		//System.out.println(9223372036854775808L); // Illegal 

		System.out.println(9223372036854775808F); // Legal, "F", 'F', -> Float
		System.out.println(9223372036854775808D); // Legal, "D", 'D', -> Double
	}
}
