import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve } from "path";

const svg = readFileSync(resolve("public/favicon.svg"));

async function generate() {
  // Generate 16x16, 32x32, 48x48 PNGs then combine into ICO
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(
    sizes.map((size) =>
      sharp(svg).resize(size, size).png().toBuffer()
    )
  );

  // ICO file format: header + directory entries + image data
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);     // reserved
  icoHeader.writeUInt16LE(1, 2);     // type: 1 = ICO
  icoHeader.writeUInt16LE(sizes.length, 4); // number of images

  const entries = [];
  const imageData = [];
  let offset = 6 + sizes.length * 16;

  for (let i = 0; i < sizes.length; i++) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(sizes[i], 0);   // width
    entry.writeUInt8(sizes[i], 1);   // height
    entry.writeUInt8(0, 2);          // color palette
    entry.writeUInt8(0, 3);          // reserved
    entry.writeUInt16LE(1, 4);       // color planes
    entry.writeUInt16LE(32, 6);      // bits per pixel
    entry.writeUInt32LE(pngs[i].length, 8); // image size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    imageData.push(pngs[i]);
    offset += pngs[i].length;
  }

  const ico = Buffer.concat([icoHeader, ...entries, ...imageData]);

  const { writeFileSync } = await import("fs");
  writeFileSync(resolve("public/favicon.ico"), ico);
  console.log("Generated public/favicon.ico");
}

generate();
