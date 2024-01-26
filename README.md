# Travel blog

This will eventually be a home for all my travel blogs in one place, instead of
being scattered around a bunch of different platforms today.

## Status: WIP

This is a basic proof-of-concept at this stage and could be improved by:

- Moving all images into a per-trip assets directory, like the Europe trip

  - These would likely need to be reduced in size
  - Currently, most images are hosted on Google with dynamic sizes in the URL
    - This does still work pretty well for the moment though

- Add a lightbox to expand the images when clicked
  - Not sure whether this lightbox should show a larger image or just keep one
    image (around 1000px or so) for both
  - Using an image server like cloudinary would make this easy, need to check if
    Astro can do this processing at build time.
