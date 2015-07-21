# SMOOF Starter Kit

This should get you up and running with frontend development at least, though you
could probably use this as a NodeJS starter kit too.

- Bootstrap
- Less
- Browserify

Vagrant is optional. You really just need node `>0.10.x` installed.

The provisioner used in `vagrant provision` is https://github.com/skinofstars/ansible-provisioner
you'll need to set the path to that in `vagrant.yml`. This gives you Ruby and Mongo.

To get started

`npm install`

`npm run srv`

Less and JS can be found in the `/client` folder. HTML is in `/public`
