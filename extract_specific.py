from pypdf import PdfReader
import sys

def extract_pages(pdf_path, start_page=1, end_page=8):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for i in range(start_page, end_page):
            if i < len(reader.pages):
                text += f"--- PAGE {i+1} ---\n"
                text += reader.pages[i].extract_text() + "\n\n"
        return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    print(extract_pages("public/content/PFE_AFILAL.pdf"))
