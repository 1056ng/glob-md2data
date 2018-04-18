# glob-md2data
convert md into object data

## How To Use

### structure

```
root
└── models
    └── blogs
        ├── apple.md
        └── grape.md
        └── kiwi.md
        └── lemon.md
```

### apple.md

```
---
title: Apple is good
author: Jonathan Ive
date: 2018-04-15
tags:
  - food
  - fashion
---

# Apple is good

Apple is good for human.
```

### javascript

```
const globMd2data = require('glob-md2data');

const models = await globMd2data('root/models');
console.log(models);
```

### output

```
{
  blogs: [
    {
      id: "apple",
      title: "Apple is good",
      date: "2018-04-15T00:00:00",
      tags: [
        "food",
        "fashion"
      ],
      body: "# Apple is good....."
    },
    {
      id: "grape",
      ...
    }
  ]
}
```

## License

[MIT](https://github.com/1056ng/glob-md2data/blob/master/LICENSE)
