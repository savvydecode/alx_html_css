0. Create a new directory css_basic in the repository alx_html_css

Copy into this directory the index.html and tweets.html that you created in the html_basic directory of the previous project:

Create an empty styles.css.

Create the file base.css and set the content of this file (https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/misc/2021/3/969e3ace19a915eee6fa2ed2b2261497b0e45013.css?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20250721%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250721T034018Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=e077349cc31c5e1e9543fe04c8b4eb3de59376d007663a654d42caaccf7dcab1)

In each of your HTML files, add these 2 lines within the <head> tag (do not confuse with the <header> tag!):

<link href="base.css" rel="stylesheet">
<link href="styles.css" rel="stylesheet">

If you refresh your webpages in your browser, they should now look a bit better!

We just told your webpages to use the CSS rules described in those two files, and to apply them to your HTML code.


1. POSITIONING
Even though each element of your webpages now has a different style, you may notice they still are stacked on top of each other, and that’s probably not what you want. CSS brings a few different approaches to positioning that one may use depending on cases.

For this project, we’re going to use CSS Flexbox, a recent set of CSS properties that work with recent browsers.

As a reminder, there are also two container tags playing critical roles here:

<main> contains the area that includes <article> and <aside>.
<body> contains all of them together.
Here are steps to get this layout, which you will have to write as CSS code in the styles.css file:

Both container tags, <body> and <main> must be told that they are containers to flexible boxes: you need to apply the display: flex property to both of them.
However, <body> contains a column of three boxes (<header>, <main> and <footer>), therefore you must apply the flex-direction: column property to <body>; whereas <main> contains a row of 2 boxes (<article> and <aside>), so you must apply the flex-direction: row property to <main>.
Ensure the <main> tag keeps an automatic height and width, by applying the flex: auto property to it.
To wrap up the layout, you want to be sure that your content (article) takes ⅔ of the width of the page, and your aside takes ⅓; you can assign to them the number of boxes they should fill in. This is done by applying the property flex: 2 to <article> (using up 2 boxes), and flex: 1 to <aside> (using up 1 box).
Finally, you want to be sure that the user can scroll within your <article> and your <aside>. You can do this by applying the overflow-y: auto CSS property to both of them.
If you’ve done all of those properly, and your HTML structure is correct, you should get exactly the layout we were trying to get.

Do note that the exact rendering you’re getting may be slightly different depending on your browser (namely, about whether header and footer are fixed or not when the user scrolls), but should always match the layout presented above.