# alexellis/cows

> 400+ ASCII fun ASCII cows

![](https://cloud.githubusercontent.com/assets/170270/13090998/a9cdd6b0-d52b-11e5-83ec-614143c9a3bb.png)

This is a fork of the work done by:

MIT © [Sindre Sorhus](http://sindresorhus.com)

## Using Docker

* Docker does not need Node.js to be installed on your computer.
* You can pick a cow number to see, that's not available in the main repo
* Kind of like [Whalesay](https://docs.docker.com/linux/step_three/)

Plus the ASCII cows assembled by [Sindre Sorhus](http://sindresorhus.com) are really fun.

**Pull the image straight from the Docker Hub:**

```
docker run alexellis2/cows 423
```

**Build the image:**

```
docker build -t cows .
```

**Push the image to your own Hub**

First build the image, then log into the Docker Hub, tag the image with your username, then push.

```
$ docker login
$ docker tag cows cows
```

## Local installation without Docker

```
$ npm init -y
$ npm install --save cows
```

## Usage

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
