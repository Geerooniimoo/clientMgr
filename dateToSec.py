from datetime import datetime as dt

hour = '19'
date = '6/2/25'

dateOfEvent = dt.strptime(f'{date} {hour}',"%m/%d/%y %H").strftime('%a, %h-%d %I:%M %p')
seconds = int(dt.strptime(f'{date} {hour}','%m/%d/%y %H').timestamp()*1000)

print(f'''
    Date Of Event:  {dateOfEvent}
    Epoch time:     {seconds}
''')