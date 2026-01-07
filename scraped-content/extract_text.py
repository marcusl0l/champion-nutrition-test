#!/usr/bin/env python3
import re
import html

def extract_text_content(html_file, output_file):
    """Extract readable text from HTML"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove script and style tags
    content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    
    # Extract paragraphs
    paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
    
    # Extract headings
    headings = re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', content, re.DOTALL)
    
    # Clean HTML tags and entities
    def clean(text):
        text = re.sub(r'<[^>]+>', '', text)
        text = html.unescape(text)
        text = re.sub(r'\s+', ' ', text).strip()
        return text
    
    output = []
    output.append("=== HEADINGS ===\n")
    for h in headings[:20]:  # First 20 headings
        cleaned = clean(h)
        if cleaned and len(cleaned) > 3:
            output.append(f"- {cleaned}\n")
    
    output.append("\n=== CONTENT PARAGRAPHS ===\n")
    for p in paragraphs[:30]:  # First 30 paragraphs
        cleaned = clean(p)
        if cleaned and len(cleaned) > 20:
            output.append(f"{cleaned}\n\n")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(output)
    
    return len(paragraphs), len(headings)

# Extract from main pages
pages = {
    '/tmp/about-page.html': '/tmp/about_extracted.txt',
    '/tmp/approach-page.html': '/tmp/approach_extracted.txt',
    '/tmp/cat29.html': '/tmp/products_cat29.txt'
}

for input_file, output_file in pages.items():
    try:
        p_count, h_count = extract_text_content(input_file, output_file)
        print(f"✅ {input_file}: {h_count} headings, {p_count} paragraphs")
    except Exception as e:
        print(f"❌ {input_file}: {e}")

print("\nText extracted to /tmp/*_extracted.txt files")
