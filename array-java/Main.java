
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // String b = new Solution().mergeAlternately("HIwe", "oby");
        // System.out.println(b);
        String gcdOfStrings = new gcdOfStrings().gString("ABABAB", "ABAB");
        System.out.println(gcdOfStrings);
        Array numbers = new Array(3);
        numbers.insert(0);
        numbers.insert(10);
        numbers.insert(30);
        numbers.insert(70);
        numbers.print();
        System.out.println("***************");
        numbers.delete(1);
        numbers.print();
        System.out.println("***************");
        System.out.println(numbers.indexOf(400)); // -1
        // **ARRAYLIST */

        ArrayList<Integer> list = new ArrayList<>();
        list.add(8);
        list.add(80);
        list.add(1008);
        list.add(84);
        list.remove(0);
        System.out.println(list);

    }
}