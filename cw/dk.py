def outer(x):
	def contains(l):
		return x * l
	return contains 


contains_15 = outer('cool')

print(contains_15(3))

#print(outer(15)(range(1,20)))

#del(outer)
#print(outer(42))

def make_counter():
	def add():
		return make_counter + 1
	return make_counter

ctr1 = make_counter(
print(ctr1())
