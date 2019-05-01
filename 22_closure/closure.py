def repeat(x):
    def nest(n):
        return x * n
    return nest


def make_counter():
    z=0
    def adder():
        nonlocal z
        z+=1
        make_counter.z=z
        return z
    return adder

def access():
    return make_counter.x
