n_q = input()
value_n_q = n_q.split()

n = int(value_n_q[0])  # Convert n to an integer
q = int(value_n_q[1])  # Convert q to an integer

val_seq = input()
sequence = [int(i) for i in val_seq.split()]  # Convert sequence to a list of integers

vals = []

for y in range(q):
    t = int(input())
    result = 0
    for i in sequence:
        if int(i) < t:z
            result += 1
    print(result)

