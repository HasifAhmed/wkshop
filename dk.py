def outer(x):
	def contains(l):
		return x in l
	return contains

contains_15 = outer(15)

print(contains_15(range(1,20)))

#print(outer(15)(range(1,20)))

del(outer)
print(outer(42))
