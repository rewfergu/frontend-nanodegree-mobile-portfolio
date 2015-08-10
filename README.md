## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

Files used for development are located in the /dev folder, files in the root folder are minified with gulp.

A working demo can be found at this link: [http://rewfergu.github.io/frontend-nanodegree-mobile-portfolio/](http://rewfergu.github.io/frontend-nanodegree-mobile-portfolio/)

###Optimizations for index.html
1. Moved scripts in the header down to the footer.
2. Used Typekit's Web Font Loader to asynchronously load fonts (There is a slight FOUT as Open Sans loads and type transitions from sans-serif, but I don't mind it.)
3. Added "async" attribute to external js resource calls
4. Added media="print" attribute to print stylesheet
5. Added inline styles to head of document
7. Optimized images
6. Minified code

###Optimizations for pizza.html
1. Optimized floating pizza animation on scroll by saving the scrollTop value outside of the loop
2. Reduced the number of document.querySelector and document.querySelectorAll calls by storing the info in variables
