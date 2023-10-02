import java.util.ArrayList;
import java.util.List;

class Candies {
    public List<Boolean> KidsWithCandies(int[] candies, int extraCandies) {
        int max = largeN(candies);
        ArrayList<Boolean> list = new ArrayList<>();

        for (int i = 0; i < candies.length; i++) {
            int n = candies[i] + extraCandies;
            if (n >= max) {
                list.add(true);
            } else {
                list.add(false);
            }
        }
        return list;

    }

    private int largeN(int[] n) {
        int max = n[0];
        for (int i = 0; i < n.length; i++) {
            if (n[i] > max) {
                max = n[i];
            }
        }
        return max;
    }
}