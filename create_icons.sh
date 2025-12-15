#!/bin/bash

# Create a simple SVG icon for Vastu Inside
cat > /tmp/vastu-icon.svg << 'SVGEOF'
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#e88a00"/>
  <text x="256" y="320" font-size="240" text-anchor="middle" fill="white">🏠</text>
</svg>
SVGEOF

# Create placeholder PNG files (we'll use a simple approach)
# Since we can't easily convert SVG to PNG without additional tools,
# let's create minimal PNGs using ImageMagick if available, otherwise create placeholders
for size in 72 96 128 144 152 192 384 512; do
  if command -v convert &> /dev/null; then
    convert -size ${size}x${size} -background "#e88a00" -fill white -gravity center -pointsize $((size/2)) label:"🏠" public/icons/icon-${size}x${size}.png 2>/dev/null || echo "Icon placeholder ${size}x${size}" > public/icons/icon-${size}x${size}.png
  else
    # Create a placeholder text file that indicates the size
    echo "Vastu Inside Icon ${size}x${size}" > public/icons/icon-${size}x${size}.png
  fi
done

echo "Icon placeholders created"
