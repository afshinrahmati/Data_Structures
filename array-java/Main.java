package array;

public class Main {
    public static void main(String[] args) {
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

    }
}