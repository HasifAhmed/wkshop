'''
Team TMNT
Derek Chan, Hasif Ahmed
SoftDev2 pd08
K17 --
2019-04-12
'''

def union(a,b):
    return [i for i in a + setDif(b,a)]

def inter(a, b):
    return[i for i in a for j in b if i == j]

def setDif(a,b):
    return [i for i in a if i not in b]

def symDif(a,b):
    return setDif(a,b) + setDif(b,a)

def cartProd(a,b):
    return [{i,j} for i in a for j in b]

print(union([1,2,5], [2,3,4]))
print("\n")
print(setDif([1,2,3], [2,3,4]))
print("\n")
print(symDif([1,2,3], [2,3,4]))
print("\n")
print(inter([1,2,3], [2,3,4]))
print("\n")
print(cartProd([1,2], ["red","white"]))
