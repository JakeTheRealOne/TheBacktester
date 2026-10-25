import random
import csv

def to_json(year, month, day, open, close, high, low):
    return (f'  "{year}-{month}-{day}": {{\n    "open": {open},\n    "close": {close},\n    "high": {high},\n    "low": {low}\n  }},\n')

def gen():
    output = ["{\n"]
    with open('tests/HistoricalData_1792967832362.csv', newline='') as csvfile:
        spamreader = csv.DictReader(csvfile, delimiter=',')
        for row in spamreader:
            year = row["Date"][6:]
            month = row["Date"][0:2]
            day = row["Date"][3:5]
            output.append(to_json(year, month, day, float(row["Open"][1:]), float(row["Close/Last"][1:]), float(row["High"][1:]), float(row["Low"][1:])))
    output.append('}\n')
    with open('tests/ohlc.json', mode='a+') as outputfile:
        for row in output:
            outputfile.write(row)

gen()