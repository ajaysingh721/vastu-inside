# Gallery Images

This directory contains project images displayed in the Gallery page.

## How to Add Your Own Project Images

1. **Add Images**: Place your project photos in this directory (`public/images/gallery/`)

   - Supported formats: .jpg, .jpeg, .png, .webp
   - Recommended size: 800x600 pixels or similar aspect ratio
   - Recommended file size: Under 200KB for optimal loading

2. **Update the Gallery Page**: Edit `app/gallery/page.tsx` and modify the `galleryImages` array:

```javascript
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/your-image.jpg", // Update this path
    title: "Your Project Title", // Update project name
    category: "residential", // Options: residential, commercial, construction
    location: "Your Location", // Update location
    description: "Brief description", // Update description
  },
  // Add more projects...
];
```

3. **Categories**: You can filter projects by:
   - `residential` - Homes, apartments, villas
   - `commercial` - Offices, retail spaces, businesses
   - `construction` - New construction projects

## Current Placeholder Images

The current images (project-1.jpg through project-9.jpg) are placeholders. Replace them with your actual project photos by:

1. Deleting or renaming the placeholder images
2. Adding your own images with meaningful names
3. Updating the paths in the gallery page

## Image Optimization Tips

- Use compressed images to improve page load time
- Maintain consistent aspect ratios for better grid layout
- Use descriptive filenames (e.g., `villa-delhi-2024.jpg`)
- Consider using WebP format for smaller file sizes

## Need Help?

Edit the gallery page at: `app/gallery/page.tsx`
