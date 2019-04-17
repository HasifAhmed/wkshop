# Xiaojie(Aaron) Li, Hasif Ahmed
# Softdev2 pd8
# K18 -- PPFTLCW
# 2019-04-15


def triples(n):
    return [ (a,b,c) for a in range(2, n + 1) for b in range(a, n + 1) for c in range(b, n + 1) if ( a * a ) + ( b * b ) == (c * c)]


def quicksort(list):
    pivot = list[0]
    small = quicksort([x for x in list[1:] if x < pivot])
    big = quicksort([x for x in list[1:] if x >= pivot])
    return small + [pivot] + big


triples(17)
quicksort([9,10,21212,1,2,3])
