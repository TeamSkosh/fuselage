# [Fuselage](https://teamskosh.github.io/fuselage)

![Fuselage Illustration](http://fuselage.skosh.io/img/fuselage-drawing.svg)

Fuselage is a sass-based, mobile-first front-end framework aimed at developer productivity and structural composability. With a sensible grid, refreshing typographic defaults, and nifty features, it's a great starting point for almost any project.

## Quickstart

Install via [bower](http://bower.io/) or [npm](https://www.npmjs.com/package/fuselage)

```sh
# bower
$ bower install fuselage
```

```sh
$ npm install fuselage
```

## Browser Compatibility

- IE 9+
- Chrome
- Firefox
- Safari

## Contributing

Make sure you have npm installed. `brew install node` if you don't.

```sh
$ which npm
# /path/to/npm
```

Install the project dependencies

```sh
# in the project root
$ npm install
```

Run the project

```sh
$ gulp serve
```

Fork the project and create a feature branch.

```sh
$ git checkout -b my-cool-feature
```

Develop your feature or bugfix. All code should have a *four space* indentation. Then proceed to commit your changes. Use *present tense*, and close the corresponding issue (if applicable).

```sh
$ git commit -m 'Add some feature. Fix #123.'
```

Push to your fork.

```sh
$ git push origin my-feature
```

Create a new pull request and stay tuned for either feedback or the green light. Thanks for helping :+1:

## Configured Gulp Tasks

| Task | Description |
| ---- | ----------- |
| `gulp` | Build styles. |
| `gulp serve` | Build styles, watch for changes, and start the development server (with livereload). |
