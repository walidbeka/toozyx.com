import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Toozyx",
    short_name: "Toozyx",
    description:
      "Toozyx helps businesses build better operating systems. We study how businesses work, identify bottlenecks, and design technology that improves clarity, control, and growth.",
    start_url: "/en",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3D49A8",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
