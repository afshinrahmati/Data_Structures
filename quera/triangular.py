n = int(input())
ans = 0
for a in range(1,n):
    for b in range(a,n):
        c = n - a - b
        if a+b > c and b <= c:
            ans = ans +1


print(ans)                