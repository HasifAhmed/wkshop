'''
Hasif Ahmed
'''
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMBERS = "0123456789"
SPECIAL = ".?!&#,;:-_*"

def meets_min(password):
    converted = [1 if x in LC_LETTERS
                else 2 if x in UC_LETTERS
                else 3 if x in NUMBERS
                else 0
                for x in password]

    if converted.count(1)>0 and converted.count(2)>0 and converted.count(3)>0:
        return True
    return False

def pass_power(password):
    converted = [1 if x in LC_LETTERS
                else 2 if x in UC_LETTERS
                else 3 if x in NUMBERS
                else 4 if x in SPECIAL
                else 0
                for x in password]
    #print(converted)
    if not(meets_min(password)):
        return 0
    power = 0
    power+=converted.count(1) if converted.count(1)<3 else 3
    power+=converted.count(2) if converted.count(2)<3 else 3
    power+=converted.count(3) if converted.count(3)<3 else 3
    if converted.count(4)>0: power+=1
    return power

def main():
    p0 = "0aBcD12"
    p1 = "ABcasdfVAbasd12"
    p2 = "??????bRuH!11!"
    print(meets_min(p0))
    print(pass_power(p0))
    print(pass_power(p1))
    print(pass_power(p2))


#main()
