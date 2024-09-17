#Makes an extremely simple clock and outputs it
import time
import sys

hour = time.localtime().tm_hour
min = time.localtime().tm_min
sec = time.localtime().tm_sec
clock = str(hour) + ":" + str(min) + ":" + str(sec)

print(clock)
sys.stdout.flush()