#!/usr/bin/env python3
import re
import html
from pathlib import Path

def clean_text(text):
    """Clean HTML entities and extra whitespace"""
    text = html.unescape(text)
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    return text

def extract_products(html_content):
    """Extract product information from HTML"""
    products = []
    
    # Look for WooCommerce product entries
    product_pattern = r'<h2[^>]*class="[^"]*woocommerce-loop-product__title[^"]*"[^>]*>(.*?)</h2>'
    titles = re.findall(product_pattern, html_content, re.DOTALL)
    
    # Look for prices
    price_pattern = r'<span class="[^"]*woocommerce-Price-amount[^"]*"[^>]*>.*?(\$[\d,]+\.?\d*)</span>'
    prices = re.findall(price_pattern, html_content)
    
    # Look for product images
    image_pattern = r'<img[^>]*src="(https://championnutrition\.net\.nz/wp-content/uploads/[^"]+)"[^>]*>'
    images = re.findall(image_pattern, html_content)
    
    for i, title in enumerate(titles):
        title_clean = clean_text(re.sub(r'<[^>]+>', '', title))
        product = {
            'title': title_clean,
            'price': prices[i] if i < len(prices) else 'Price TBD',
            'image': images[i] if i < len(images) else ''
        }
        products.append(product)
    
    return products

# Process files
files = {
    '/tmp/cat29.html': 'Category 29',
    '/tmp/cat30.html': 'Category 30', 
    '/tmp/cat31.html': 'Category 31'
}

all_products = []
for filepath, category in files.items():
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            products = extract_products(content)
            for p in products:
                p['category'] = category
                all_products.append(p)
    except FileNotFoundError:
        print(f"File not found: {filepath}")

# Save to file
output = []
output.append("# Scraped Products from Champion Nutrition\n")
output.append(f"Total products found: {len(all_products)}\n\n")

for i, product in enumerate(all_products, 1):
    output.append(f"## Product {i}: {product['title']}\n")
    output.append(f"- **Price:** {product['price']}\n")
    output.append(f"- **Category:** {product['category']}\n")
    output.append(f"- **Image:** {product['image']}\n\n")

with open('/tmp/products_scraped.md', 'w') as f:
    f.writelines(output)

print(f"Extracted {len(all_products)} products")
print("Saved to /tmp/products_scraped.md")
