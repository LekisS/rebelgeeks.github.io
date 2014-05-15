rebelgeeks.github.io
====================

If you want to be added to the site, fork it, add yourself to the `index.html` file and submit a PR. Fill in the `.rider` div with all your details.

```html
<div class="col-lg-3 rider">
  <a href="LINK TO TWITTER, BLOG, GITHUB, WHATEVER">
    <img src="https://github.com/GITHUB_USERNAME.png" data-src-bike="LINK_TO_BIKE_IMAGE_PNG_JPG" />
    <h4>YOUR NAME</h4>
    <p>YOUR LOCATION</p>
  </a>
</div>
```

This site is a work in progress. GitHub pages was the easist way to get it up and running. Once the community grows I think it would be awesome to expand this into a directory of people along with posting meetups and rides.

This site is setup with Jekyll and GitHub pages. https://help.github.com/articles/using-jekyll-with-pages

    bundle install
    bundle exec jekyll serve --watch

The site will be running on `http://localhost:4000` and you can edit the static files and the site will reload the changes.