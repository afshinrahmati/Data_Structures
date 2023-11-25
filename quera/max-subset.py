n = int(input())
q = list(map(int,input().split()))
ans = q[0]
maxsum = q[0]
for i in range(2,n):
    maxsum = max(maxsum + q[i], q[i])
    ans = max(ans, maxsum)

print(ans)    