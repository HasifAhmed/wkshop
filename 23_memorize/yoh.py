def memoized_fib(f):

    memo = []
    def helper(x):
        nonlocal memo
        if len(memo) == 0:
            memo.append(0)
            memo.append(1)
        if x < len(memo):
            return memo[x]
        while x + 1 > len(memo):
            memo.append(memo[-1] + memo[-2])
        return memo[x]
    return helper


@memoized_fib
def fib(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fib(num-1) + fib(num-2)

print(fib(5))
print(fib(40))
