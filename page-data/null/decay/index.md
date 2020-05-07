---
title: Import your Audible Library to Goodreads
date: "2020-02-07T22:12:03.284Z"
description: "I read a lot and I listen to a lot. Consuming an audio book isn’t the same as reading one, but I wanted to get an overview of it anyway. This is how I imported my audible library to Goodreads."
image: ./img/you-are-what-you-read.jpg
category: short
published: true
tags:
  - code
  - reading
  - audible
  - organizing
---

![](./img/you-are-what-you-read.jpg)
Photo by [Mohammad Metri](https://unsplash.com/@mohammadmetri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

I wrote a rudimentary python script to bulk import your Audible library to Goodreads. I’ll caveat with a statement: this is still pretty manual, but it automates the parts that are most time consuming. Overall, it shouldn’t take more than 5min to get your whole audible library into Goodreads. Then maybe just re-run the process every few months.

[You can view the script here](https://gist.github.com/readywater/b71c11428a151654474cdb673756319e)

## Get Your Audible Data

It procedurally builds off of another script that [exports your audible library](https://www.themodernnomad.com/audible-statistics-extractor/) , which is required to get it working. To run this script, [visit your audible library](https://www.audible.com/lib?purchaseDateFilter=all&programFilter=all&sortBy=PURCHASE_DATE.dsc&pageSize=50) and run the script on each page by hitting `command-option J` to open your console (in Chrome and most other browsers), and run this script (which is just a minified version of the [one linked above](https://www.static-18.themodernnomad.com/wp-content/uploads/2019/01/Audible-ScreenScraperJanuary2019.txt))

[Link to script](https://gist.githubusercontent.com/readywater/b71c11428a151654474cdb673756319e/raw/02f4e875aa1e55986c6e08a9dffd818bd7d92163/minified_audible_table_generator.js)

This will grab your library and turn the page into an html table. You can then easily select all on this table and paste it into google sheets or excel. Make sure to remove the repeated header data, but keep the top line.

You need to do this **for each page** of the library, so if you have 50+ books, simply go through each. Save the output; you can keep the file in an excel format or export to CSV.

## Convert the Data into a Goodreads Format

From here, you’ll want to run [the python script](https://gist.github.com/readywater/b71c11428a151654474cdb673756319e). Save the file to whatever directly you’ve stored your audible spreadsheet and open your terminal. On Mac, do this by typing `command space` and writing `terminal` in the spotlight search.

```python
import pandas as pd
from isbntools.app import *

df = pd.read_excel(r'/path/to/the/saved/excel.xlsx')

# Fetch ISBN from title and author using isbn tools
df['isbn'] = df.apply(lambda x : isbn_from_words(x.Title + " " + x.Author), axis=1 )
# Convert Dates
df["Buy Date"] = pd.to_datetime(df["Buy Date"], format="%m-%d-%y", exact=False).dt.strftime('%Y-%m-%d')
#df["Buy Date"] = df["Buy Date"]
# Add to audible
df["Bookshelves"] = "audible"
# Map the Date Read to the Buy Date as a loose proxy
df["Date Read"] = df.apply(lambda x: x["Buy Date"] if x["Time Left"] < 30 else None, axis=1)
# This doesn't actually register, but the export that Goodreads provides is Exclusive Shelf for the read status
df["Exclusive Shelf"] = df.apply(lambda x: "read" if x["Time Left"] < 30 else "currently-reading" if x["Time Left"]/x["Minutes"] < .8 else "to-read", axis=1)
# So I fix it by just appending the status to Bookshelves depending on read status. i.e. if less than 30min left, it's read. If you've listened to more than 20% of it, it's Currently Reading
df["Bookshelves"] = df.apply(lambda x: x["Bookshelves"] + " " + "read" if x["Time Left"] < 30 else x["Bookshelves"] + " " + "currently-reading" if x["Time Left"]/x["Minutes"] < .8 else x["Bookshelves"] + " " + "to-read", axis=1)
# Rename Buy Date to Date Added
df.rename(columns={"Buy Date" : "Date Added"},inplace = True)

df.to_csv(r'/path/to/export/audible-goodreads-import.csv')
print ("Done")
```

Before running the script, you’ll want to change two things. Open then python script and change line 17: `df = pd.read_excel(r’/path/to/the/saved/excel.xlsx’)` to the path to your file and line 35: `df.to_csv(r’/path/to/export/audible-goodreads-import.csv’)` to your export CSV format.

Then simply run `py audible-goodreads-import.py` in terminal, and you should get a file output with the CSV.

From there, simply [go to your goodread account’s import page](https://www.goodreads.com/review/import) and follow the import instructions.

It will import and update current read status, ratings, correct ISBN, and add it to an “audible” bookshelf.

## Next steps

Hopefully this serves to compliment other solutions out there, or as a starting point for someone who wants to put together a better solution for non-technical folk.

If you encounter bugs or improve the script somehow, please leave a comment below or in the [GitHub gist](https://gist.github.com/readywater/b71c11428a151654474cdb673756319e). If this works out for folk, I might put together something a bit more automated and a bit more user friendly eventually, but for a quick script thrown together while watching [Next in Fashion](https://www.netflix.com/dk-en/title/81026300), this works nicely.
