public class Subsequence {
    public boolean isSubsequence(String s, String t) {
        int first = s.length();
        int end = t.length();

        int i = 0, j = 0;
        while (i < first && j < end) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
            }
            j++;

        };
        
        return i == first ? true : false;

    }
}
