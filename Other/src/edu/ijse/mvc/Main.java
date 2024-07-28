
package edu.ijse.mvc;

import edu.ijse.mvc.view.CustomerView;
import edu.ijse.mvc.view.ItemView;

/**
 *
 * @author ASUS
 */
public class Main {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws Exception {
        // TODO code application logic here
        new ItemView().setVisible(true);
        new CustomerView().setVisible(true);
    }
    
}
