# Travel blog

This will eventually be a home for all my travel blogs in one place, instead of
being scattered around a bunch of different platforms today.

## Status: WIP

This is coming along but still needs some work

## Approach

- Start with the latest blog
- Upload all photos to Cloudinary
- Make sure lightbox works
- Repeat for all other blogs

## Issues

- [x] The lightbox doesn't work after a client side transition
  - This was fixed by using the "astro:page-load" event for the script
- [x] The expanded lightbox is cropping the photos
  - This happens if the image URL doesn't have a `.jpg` extension, even though it's being delivered as a webp
- [ ] The folders on Cloudinary do not match the trip slugs (and should)
- [ ] I think there is a CLS issue when the images load :/

## Notes

- Upload files with the CLI like this:

```
export CLOUDINARY_URL=cloudinary://NUMBER:SECRET@stevenocchipinti

cld uploader upload ./src/content/travel/2019-taiwan-vietnam/assets/3f69d771d8824ffe992991f4a6139544.jpg folder=2019-taiwan-vietnam use_filename=true unique_filename=false
```

- This craziness!

```
:g/!\[/s/.*\/\(.*\)\..*)/\="<Img src=\"" .. system("cat ~\/Downloads\/2015-taiwan-japan\/log | jq -r 'select(.original_filename==\"".submatch(1)."\").public_id' | tr -d '\n'") .. ".jpg\" \/\>"
```
