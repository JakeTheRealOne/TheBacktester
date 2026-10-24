import random

def gen():
  price = 128.0
  for i in range(1, 58):
    month = i // 31
    day = i % 31
    close = price + random.gauss(0, 10)
    high = max(price, close) + random.choice([0, 0, 2, 4])
    low = min(price, close) - random.choice([0, 0, 2, 4])
    print(f'  "2026-0{month+1}-{str(day).zfill(2)}": {{\n    "open": {round(price, 2)},\n    "close": {round(close, 2)},\n    "high": {high},\n    "low": {low}\n  }},')
    price = close
    

gen()