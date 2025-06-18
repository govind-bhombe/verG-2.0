# 1. Let us say your expense for every month are listed below,
# 	1. January -  2200
#  	2. February - 2350
#     3. March - 2600
#     4. April - 2130
#     5. May - 2190
#
# Create a list to store these monthly expenses and using that find out,
# 1. In Feb, how many dollars you spent extra compare to January?

exp = [2200,2350,2600,2130,2190]
print("Total dollars you spent extra in Feb compare to January is :",exp[1]-exp[0])

# 2. Find out your total expense in first quarter (first three months) of the year.
print("Total ecpense in first quater is:",(exp[0]+exp[1]+exp[2]))

# 3. Find out if you spent exactly 2000 dollars in any month
print("Did I spent 2000$ in any month? ", 2000 in exp)

# 4. June month just finished and your expense is 1980 dollar. Add this item to our monthly expense list
exp.append(1980)
print(exp)

# 5. You returned an item that you bought in a month of April and
# got a refund of 200$. Make a correction to your monthly expense list
print("200$ refund got for cancellation item somonthly expense is :",(exp[3]-200))
exp[3]=exp[3]-200
print(exp)