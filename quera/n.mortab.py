"""
In The Name Of God
"""

def f(n, x, A):
    """
    Recursively generates all permutations of numbers from 1 to n and prints them
    """
    if x == n:  # exit condition
        print(*A)  # print A
        return
    for i in range(1, n+1):
        A[x] = i  # set value of A[x] and call f(n, x+1) to set values of A[x+1], ... A[n-1]
        f(n, x+1, A)

if __name__ == "__main__":
    n = int(input())
    A = [0] * n
    f(n, 0, A)