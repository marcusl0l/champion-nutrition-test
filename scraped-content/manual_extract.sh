#!/bin/bash
echo "=== EXTRACTING IMAGES FROM SITE ==="
grep -oP 'https://championnutrition\.net\.nz/wp-content/uploads/[^"]+\.(jpg|jpeg|png|webp)' /tmp/cat*.html /tmp/about-page.html /tmp/products-page.html 2>/dev/null | sort -u > /tmp/image_urls.txt
echo "Found $(wc -l < /tmp/image_urls.txt) unique images"

echo -e "\n=== SAMPLE IMAGES ==="
head -20 /tmp/image_urls.txt
