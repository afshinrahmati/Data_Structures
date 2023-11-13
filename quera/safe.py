def ramz_is_oky(ramz_digits):
    if ramz_digits["One"] == (ramz_digits["Two"] * 2 - 1) & (ramz_digits["Three"] + ramz_digits ["Five"] == 14) & (ramz_digits["Four"] - 1 == ramz_digits["Two"])  :
        return True
    else:
        return False
    
for ramz in range(0,100000):
    this_ramz = str(ramz).zfill(5)
    ramz_digit = {}
    ramz_digit["One"] = int(this_ramz[0])
    ramz_digit["Two"] = int(this_ramz[1])
    ramz_digit["Three"] = int(this_ramz[2])
    ramz_digit["Four"] = int(this_ramz[3])
    ramz_digit["Five"] = int(this_ramz[4])
    if(ramz_digit["One"] + ramz_digit["Four"] + ramz_digit["Three"] + ramz_digit["Two"]+ramz_digit["Five"] == 30):
        result = ramz_is_oky(ramz_digit)
        if result:
            print(ramz_digit)
            break
    else:
        continue


