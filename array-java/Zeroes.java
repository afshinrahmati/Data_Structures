import java.util.Arrays;

public class Zeroes {

    public Void moveZeroes(int[] nums) {

        int t = 0;
        int count = 0;
        for (int num : nums) {
            if (num != 0) {
                nums[t] = num;
                t++;
            } else {
                count++;
            }
        }
        for (int i = t; i < nums.length; i++) {
            nums[i] = 0;
        }
        System.out.println(count + "$$" + t + "%%" + Arrays.toString(nums) + nums.length);
        return null;

    }
}
