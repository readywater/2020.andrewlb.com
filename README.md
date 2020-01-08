# 2020.andrewlb.com Blog

## 🚀 Quick start

Based on the Gatsby Starter Blog, and heavily modified. https://github.com/gatsbyjs/gatsby-starter-blog

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

    ```shell
    # create a new Gatsby site using the blog starter
    gatsby new blog https://github.com/readywater/2020.andrewlb.com
    ```

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd blog/
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

See https://github.com/gatsbyjs/gatsby-starter-blog for details

Major differences:

For the top remark header there's the following template.

```
---
title: Title
date: "2020-01-09T23:12:03.284Z"
description: "Description goes here"
image: ./img/imagegoeshere.webp
category: Writing
tags:
  - tag1
  - tag2
  - tag3
  - "2020"
---
```

### Blog Placement

Posts are placed in the Blog Folder and reflect the folder structure of

`/:category/:folder`

Inside folder, you can either have another folder and it'll go down recursively. The blog post itself should be called `index.md`, and within the terminal folder, there should be an `/img` folder with the appropriate control.
