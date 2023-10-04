class Volwels {
    public String reverseVowels(String s) {

        char[] chars = s.toCharArray();
        int start = 0;
        int end = chars.length - 1;

        while (start < end) {
            while (start < end && !isVowel(chars[start])) { // az aval inghadar miravad to hrof sedadar pyda konad
                start++; //  vaghti pyda nakrd mirvad badi
            }
            while (start < end && !isVowel(chars[end])) { // ad akhar miyad ta hrof seda dar pyda kona
                end--; // pyda nakrd miravad badi
            }
            char holdOldVal = chars[start];
            chars[start] = chars[end];
            chars[end] = holdOldVal;
            start++;
            end--;

        }

        return String.valueOf(chars);

    }

    private boolean isVowel(char c) {
        c = Character.toLowerCase(c);
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
}