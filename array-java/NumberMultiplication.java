class NumberMultiplication {

    public int[] productExceptSelf(int[] nums) {
        int operator = 1;
        int[] num = new int[nums.length];
        for (int i = 0; i < nums.length; i++) {
            int t = i + 1;
            int y = i - 1;
            while (t < nums.length || y >= 0) {
                if (i == 0) {
                    operator = operator * nums[t];
                }
                // right
                if (t < nums.length && i != 0) {
                    operator = operator * nums[t];
                }
                // left
                if (y >= 0 && i != 0) {
                    operator = operator * nums[y];
                }
                t++;
                y--;
            }

            num[i] = operator;
            operator = 1;
        }
        return num;
    }
}