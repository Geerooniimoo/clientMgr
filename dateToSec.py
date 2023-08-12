from datetime import datetime as dt

hour = '13'
date = '8/10/23'

# epoc seconds
print(int(dt.strptime(f'{date} {hour}','%m/%d/%y %H').timestamp()*1000))