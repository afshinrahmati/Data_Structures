n = int(input())
q = list(map(int,input().split()))

for i in range(0,n):
    for j in range(i+1,n):
        if(q[i] > q[j]):
            [q[i],q[j]] = [q[j],q[i]]



for i in range(n):
    print(q[i])            