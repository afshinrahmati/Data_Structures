x,y = list(map(int,input().split()))
nums = []
def isFactor(n,m):
    if m == 0 :
        return n
    return isFactor(m,n%m)
 
result = isFactor(x,y)
print(result)
            
            

