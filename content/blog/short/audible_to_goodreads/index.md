---
title: Import your Audible Library to Goodreads
date: “2020-02-07T23:00:00.000Z”
description: “I read a lot and I listen to a lot. Consuming an audio book isn’t the same as reading one, but I wanted to get an overview of it anyway. This is how I imported my audible library to Goodreads.”
image: ./img/you-are-what-you-read.jpg
category: short
tags:
  - code
  - reading
  - audible
  - organizing
---

![](./img/you-are-what-you-read.jpg)
_Photo by [Mohammad Metri](https://unsplash.com/@mohammadmetri?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) _

I wrote a rudimentary python script to bulk import your Audible library to Goodreads. I’ll caveat with a statement: this is still pretty manual, but it automates the parts that are most time consuming. Overall, it shouldn’t take more than 5min to get your whole audible library into Goodreads. Then maybe just re-run the process every few months.

[You can view the script here](https://gist.github.com/readywater/b71c11428a151654474cdb673756319e)

## Get Your Audible Data

It procedurally builds off of another script that [exports your audible library](https://www.themodernnomad.com/audible-statistics-extractor/) , which is required to get it working. To run this script, [visit your audible library](https://www.audible.com/lib?purchaseDateFilter=all&programFilter=all&sortBy=PURCHASE_DATE.dsc&pageSize=50) and run the script on each page by hitting `command-option J` to open your console (in Chrome and most other browsers), and run this script (which is just a minified version of the [one linked above](https://www.static-18.themodernnomad.com/wp-content/uploads/2019/01/Audible-ScreenScraperJanuary2019.txt)):

```
var includeImage=!1,includeShows=!1,convertToMinutes=function(t){var e=t.match(/.*?(\d+)\s*?h.*?/);return 60*(null!=e?parseInt(e[1]):0)+(null!=(e=t.match(/.*?(\d+)\s*?m.*?/))?parseInt(e[1]):0)},headerRow=[$(document.createTextNode("Title")),$(document.createTextNode("Author")),$(document.createTextNode("Minutes")),$(document.createTextNode("Buy Date")),$(document.createTextNode("Rating")),$(document.createTextNode("Performance")),$(document.createTextNode("Story")),$(document.createTextNode("Time Left"))];includeImage&&headerRow.unshift($(document.createTextNode("Image")));var tableArray=[headerRow],getAuthor=function(t){var e=t.find("td:nth-of-type(3) .bc-list a");if(e.length>1){var n=t.find("td:nth-of-type(3) .bc-list").text().replace(/\s+/g," ").trim(),a="/search?searchAuthor="+encodeURIComponent(n);e=$('<a href="'+a+'">'+n+"</a>")}return e};function tableCreate(t,e){var n=document.createElement("table");n.style.width="70%",n.border="1";for(var a=0;a<e.length;++a)for(var o=n.insertRow(),r=0;r<e[a].length;++r){var d=o.insertCell();e[a][r].each(function(){$(this).clone().appendTo(d)})}t.appendChild(n)}jQuery('tr[class*="adbl-library-row"]').each(function(t){var e=$(this);if(includeShows||"View all episodes"!=e.find("td:nth-of-type(2) .bc-list-item:nth-of-type(2)").text().trim()){var n=e.find("td:nth-of-type(1) img").clone().attr("width","90"),a=[e.find("td:nth-of-type(2) .bc-list-item:nth-of-type(1)").contents(),getAuthor(e),$(document.createTextNode(convertToMinutes(e.find("td:nth-of-type(4)").text()))),$(document.createTextNode(e.find("td:nth-of-type(5)").text())),$(document.createTextNode(e.find("*[data-star-count]:first").attr("data-star-count"))),$(document.createTextNode(e.find("*[data-star-count]:eq(1)").attr("data-star-count"))),$(document.createTextNode(e.find("*[data-star-count]:eq(2)").attr("data-star-count"))),$(document.createTextNode(convertToMinutes(e.find("td:nth-of-type(1) .bc-col:nth-of-type(1) .bc-row:nth-of-type(3) ").text().trim().split("\n")[0])))];includeImage&&a.unshift(n),tableArray.push(a)}}),tableCreate($("body").empty()[0],tableArray);
```

This will grab your library and turn the page into an html table. You can then easily select all on this table and paste it into google sheets or excel. Make sure to remove the repeated header data, but keep the top line.

You need to do this **for each page** of the library, so if you have 50+ books, simply go through each. Save the output; you can keep the file in an excel format or export to CSV.

## Convert the Data into a Goodreads Format

From here, you’ll want to run [the python script](https://gist.github.com/readywater/b71c11428a151654474cdb673756319e). Save the file to whatever directly you’ve stored your audible spreadsheet and open your terminal. On Mac, do this by typing `command space` and writing `terminal` in the spotlight search.

Before running the script, you’ll want to change two things. Open then python script and change line 17: `df = pd.read_excel(r’/path/to/the/saved/excel.xlsx’)` to the path to your file and line 35: `df.to_csv(r’/path/to/export/audible-goodreads-import.csv’)` to your export CSV format.

Then simply run `py audible-goodreads-import.py` in terminal, and you should get a file output with the CSV.

From there, simply [go to your goodread account’s import page](https://www.goodreads.com/review/import) and follow the import instructions.

It will import and update current read status, ratings, correct ISBN, and add it to an “audible” bookshelf.

## Next steps

Hopefully this serves to compliment other solutions out there, or as a starting point for someone who wants to put together a better solution for non-technical folk.

If you encounter bugs or improve the script somehow, please leave a comment below or in the [GitHub gist](https://gist.github.com/readywater/b71c11428a151654474cdb673756319e). If this works out for folk, I might put together something a bit more automated and a bit more user friendly eventually, but for a quick script thrown together while watching [Next in Fashion](https://www.netflix.com/dk-en/title/81026300), this works nicely.
