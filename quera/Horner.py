n,x = list(map(int,input().split()))
q = list(map(int,input().split()))
ans = 0

for i in range(0,n+1):
    a = q[i]
    p = x**n
    ans += a * p
    n-=1
print(ans % 1000000007)    