n = int(input())
sequence =sorted(list(map(int,input().split()))) 
m = round(n/2)
def is_odd(n):
    if n % 2 == 0:
      return (round(n / 2) + 1) - 2
    else:
       return round((n+1)/2) -1

m = is_odd(n)
num = sequence[m]
ans = 0
for i in range(n):       
    ans += abs(sequence[i] - num)

print(num," ",ans)