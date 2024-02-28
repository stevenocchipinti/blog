# Travel blog

This will eventually be a home for all my travel blogs in one place, instead of
being scattered around a bunch of different platforms today.

## Status: WIP

This is coming along but still needs some work

## Notes

- Upload files with existing filenames using the CLI like this:

```
export CLOUDINARY_URL=cloudinary://NUMBER:SECRET@stevenocchipinti

cld uploader upload ./src/content/travel/2019-taiwan-vietnam/assets/3f69d771d8824ffe992991f4a6139544.jpg folder=2019-taiwan-vietnam use_filename=true unique_filename=false
```

Or with new names, in fish:

```
for i in (find . -name "*.JPG")
  cld uploader upload "$i" folder=2015-taiwan-japan >> log
end
```

- I used this craziness!

```
:bufdo g/!\[/s/.*\/\(.*\)\..*)/\="<Img src=\"" .. system("cat ~\/Downloads\/2015-taiwan-japan\/log | jq -r 'select(.original_filename==\"".submatch(1)."\").public_id' | tr -d '\n'") .. ".jpg\" \/\>"
```
