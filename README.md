# Travel blog

This will eventually be a home for all my travel blogs in one place, instead of
being scattered around a bunch of different platforms today.

## Status

This is a basic proof-of-concept at this stage and could be improved by:

- Create a component to represent the "route cells" from Volo

- Creating a new content collection for a trip

  - That includes a hero image, dates, etc.
  - Posts could reference this in frontmatter (or folder name?)

- Remove redundant information from md filenames:

  - For example:
    src/content/travel/2010-kuala-lumpur-hong-kong/2010-11-21-kuala-lumpur-and-hong-kong-almost-ready.md
    to be renamed to something like:
    src/content/travel/2010-kuala-lumpur-hong-kong/2010-11-21-almost-ready.md

- Moving all images into a per-trip assets directory, like the Europe trip

  - These would likely need to be reduced in size
  - Currently, most images are hosted on Google with dynamic sizes in the URL
    - This does still work pretty well for the moment though

- Add a lightbox to expand the images when clicked
  - Not sure whether this lightbox should show a larger image or just keep one
    image (around 1000px or so) for both
  - Using an image server like cloudinary would make this easy, need to check if
    Astro can do this processing at build time.
