n,k = map(int,input().split())
a = list(map(int,input().split()))
b = [0] * n
for i in range(0, n):
    b[i] = a[i] - (i-1)*k
b = sorted(b)
def is_odd(n):
    if n % 2 == 0:
      return (round(n / 2) + 1) - 2
    else:
       return round((n+1)/2) -1
m = is_odd(n)
num = b[m]
ans = 0
for i in range(n):       
    ans += abs(b[i] - num)

print(ans)