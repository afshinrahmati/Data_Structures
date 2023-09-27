package array;

public class Array {
    private int[] items;
    private int count;
    public Array(int length) {
        items = new int[length];
    }

    // ***** Insert ****
    public void insert(int item){
        if(items.length == count){
            int[] newArray = new int[count * 2];
            for(int i = 0 ; i < count ; i++){
                newArray[i] = items[i];
            }
            items = newArray;

        }
        
        items[count++] = item;
    }
    // ***** DELETE ****
    public void delete(int index){
        if(index <0 || count < index){
            throw new IllegalArgumentException();
        }
        for(int i = index; i < count ; i++){
            items[i]= items[i+1];
        }
        count--;
    }
    // ***** DELETE ****
    public int indexOf(int number){
        for(int i = 0 ; i< count; i++){
            if(items[i] == number){
                return i;
            }
        }
        return -1;
    }
    public void print() {
        for (int i = 0; i < count; i++) {
            System.out.println("i ==> " + items[i]);
        }
    }
}