# fl0h

[![GitHub version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/davidkuyk/fl0h)
[![License](https://img.shields.io/github/license/davidkuyk/fl0h.svg)](https://github.com/davidkuyk/fl0h/blob/main/LICENSE)

A minimalistic todo app.

## Table of Contents

- [fl0h](#fl0h)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
  - [Future Feature Ideas](#future-feature-ideas)
  - [Installation](#installation)
  - [Scaffolding](#scaffolding)
  - [Bugs](#bugs)
  - [Author](#author)
  - [License](#license)

## Background

Yes, yes, the todo app is a cliche beginner programmer project. There are a million of them out there. However, I want to make fl0h a project I continue to work on as I grow professionally. I use a todo list every day. I've rotated from app to app over the years, but none of them quite fit what I'm looking for. I want my todo app to be minimalistic but complete. That's what I want to accomplish with fl0h. I look forward to the day when I will use fl0h as my primary todo app.

As of now, fl0h is a one-page todo app built with the MERN stack. You can add, edit, and delete tasks from the same page. Each task has a description, distance (from today to the due date), date, and category. The list is automatically sorted by date in ascending order so your most urgent tasks are on top.

## Future Feature Ideas

- Add user login functionality
- Add "deadline" column
- Add "recurring" column, then a loop button that, when clicked, automatically moves the task ahead in the list by the number of days (from today) in the recurring column
- Email reminders

## Installation

[Click here](http://fl0h.herokuapp.com/) to go to the site. Or, if you want to clone this repository, open your terminal and type:

```sh
$ git clone https://github.com/davidkuyk/fl0h.git
$ cd fl0h
```

## Scaffolding

```text
fl0h
├── public
│   └── style.css
├── views
    └── index.ejs
├── server.js
├── package.json
├── package-lock.json
├── Procfile
├── LICENSE
└── README.md
```

## Bugs

If you have questions, feature requests or a bug you want to report, please click [here](https://github.com/davidkuyk/fl0h/issues) to open an issue.

## Author

- [**David Kuyk**](https://davidkuyk.github.io/)

## License

Copyright (c) 2021 David Kuyk.

Usage is provided under the MIT License. See [LICENSE](https://github.com/davidkuyk/fl0h/blob/main/LICENSE) for the full details.
