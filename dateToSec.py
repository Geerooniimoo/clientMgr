from datetime import datetime as dt

hour = '11'
date = '7/29/23'

# epoc seconds
print(int(dt.strptime(f'{date} {hour}','%m/%d/%y %H').timestamp()*1000))