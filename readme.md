# alexellis/cows-docker

> 400+ ASCII fun ASCII cows

![](https://cloud.githubusercontent.com/assets/170270/13090998/a9cdd6b0-d52b-11e5-83ec-614143c9a3bb.png)

This is a fork of the work done by:

MIT © [Sindre Sorhus](http://sindresorhus.com)

## Using Docker

* Docker does not need Node.js to be installed on your computer.
* Pass the cow number between 1-423 that you want to view.
* Kind of like [Whalesay](https://docs.docker.com/linux/step_three/)

Plus the ASCII cows assembled by [Sindre Sorhus](http://sindresorhus.com) are really fun.

**Run the image straight from the Docker Hub:**

If this is the first run, then Docker will `pull` the image from [the Hub](https://hub.docker.com/r/alexellis2/cows/).

```
$ docker run alexellis2/cows 423
               (__)
(__)           (oo)
(oo)      ______\/
-\/    /|      |
| |   * |______|
| |        ||
---        --
Cow Computer
```

**Build the image:**

```
docker build -t cows .
```

**Push the image to your own Hub**

First build the image, then log into the Docker Hub, tag the image with your username, then push.

```
$ docker login
$ docker tag cows some_username/cows
$ docker push some_username/cows
```

## Local installation without Docker

```
$ git clone https://github.com/alexellis/cows-docker
$ npm install
```

## Usage without Docker

```
$ node ./show_cow.js 0
Enter cow number between [1-423]

$ node ./show_cow.js 423
               (__)
(__)           (oo)
(oo)      ______\/
-\/    /|      |
| |   * |______|
| |        ||
---        --
Cow Computer
```

## As an npm module

Start a blank project:

```
$ mkdir myproject
$ cd myproject
$ npm init -y
```

Then install the `showcows` module:

```
$ npm install --save showcows
$ var cows = require('showcows');
$ console.log(cows(1))

(__)
(__)           (oo)
(oo)      ______\/
-\/    /|      |
| |   * |______|
| |        ||
---        --
Cow Computer
```

## Contributing

If you'd like to contribute cow ASCII please head over to [sindresorhus/cows][https://github.com/sindresorhus/cows] and raise a PR with him.

I'm open to contributions to this repository - if you'd like to add an cows-based express.js web-server etc, then please send an PR.

Contributing ideas:

* Express.js RESTFUL api to give back numbered / random cows
* docker-compose file
* .travis.yml build

## License

MIT © [Alex Ellis](http://alexelis.io)

This is a fork of the work done by:

MIT © [Sindre Sorhus](http://sindresorhus.com)
