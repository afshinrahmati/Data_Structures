import java.util.LinkedList;

public class Compress {
    private LinkedList<Integer> stack = new LinkedList<Integer>();

    public int Operator(char[] chars) {
        
        
        return 41;
    }

    private void calculate(int n) {
        if (n <= 9) {
            stack.push(n);
        }
        stack.push(n % 10);
        n = n / 10;
        calculate(n);
    }
}
