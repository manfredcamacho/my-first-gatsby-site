const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`${process.cwd()}/src/images/**/*.{png,jpg,jpeg}`);
const MAX_WIDTH = 1800;
const QUALITY = 70;

if (matches.length === 0) {
  console.log("No images to optimize");
  return;
} else {
  console.log(`Found ${matches.length} images in directory`);
}
Promise.all(
  matches.map(async (match) => {
    const stream = sharp(match);
    const info = await stream.metadata();

    if (info.width < MAX_WIDTH) {
      return;
    }
    console.log("Optimizing", match);

    const optimizedName = match.replace(
      /(\..[png|jpgjpeg]+)$/,
      (match, ext) => `-optimized${ext}`
    );

    await stream
      .resize(MAX_WIDTH)
      .jpeg({ quality: QUALITY })
      .toFile(optimizedName);

    return fs.rename(optimizedName, match);
  })
);
