class gcdOfStrings {
    public String gString(String str1, String str2) {
        if (!(str1 + str2).equals(str2 + str1))
            return "";
        int gcd = gcd(str1.length(), str2.length());
        return str1.substring(0, gcd);
    }

    private int gcd(int a, int b) {
        System.out.println(a);
        return b == 0 ? a : gcd(b, a % b);
    }
}
