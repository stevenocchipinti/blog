# Blog

This is a home for all my blogs in one place, instead of being scattered around a bunch of different platforms where they were oiginally created.

MDX, a couple of custom components and (almost) all images hosted in Cloudinary (hopefully without exceeding the free quota).

## Notes

- Upload files with existing filenames using the CLI like this:

```
export CLOUDINARY_URL=cloudinary://NUMBER:SECRET@NAME

cld uploader upload ./src/content/travel/2019-taiwan-vietnam/assets/IMAGE.jpg folder=2019-taiwan-vietnam use_filename=true unique_filename=false
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
