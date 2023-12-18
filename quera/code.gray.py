def gray(l):
    #Base Condition
    if l==1:
        return ['0','1']
    main_codes=gray(l-1)
    #reverse all gray-code in 'main_codes' and put it into 'rev_codes'
    rev_codes=main_codes[::-1]
    for x in range(len(main_codes)):
        #Append '0' to the first of all codes in 'main_codes'
        main_codes[x]='0'+main_codes[x]
        #Append '1' to the first of all codes in 'rev_codes'
        rev_codes[x]='1'+rev_codes[x]
    return main_codes+rev_codes

for x in gray(int(input())):
    print(x)