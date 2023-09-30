class Solution {
    public String mergeAlternately(String word1, String word2) {
        // $$$$ Soultion One
        String result = "";
        int minLength = Math.min(word1.length(), word2.length());
        for (int i = 0; i < minLength; i++) {
            result += String.valueOf(word1.charAt(i)) + String.valueOf(word2.charAt(i));
        }
        if (word1.length() > word2.length()) {
            for (int i = minLength; i < word1.length(); i++) {
                result += String.valueOf(word1.charAt(i));
            }
        } else if (word1.length() < word2.length()) {
            for (int i = minLength; i < word2.length(); i++) {
                result += String.valueOf(word2.charAt(i));
            }

        }
        // $$$$ Soultion two
        StringBuilder result1 = new StringBuilder();
        int i = 0;
        while (i < word1.length() || i < word2.length()) {
            if (i < word1.length()) {
                result1.append(word1.charAt(i));
            }
            if (i < word2.length()) {
                result1.append(word2.charAt(i));
            }
            i++;
        }

        // return result;
        return result1.toString();

    }
}