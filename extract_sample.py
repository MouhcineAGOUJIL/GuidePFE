from pypdf import PdfReader
import sys

def extract_first_pages(pdf_path, max_pages=15):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for i, page in enumerate(reader.pages):
            if i >= max_pages:
                break
            text += f"--- PAGE {i+1} ---\n"
            text += page.extract_text() + "\n\n"
        return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    print(extract_first_pages("public/content/PFE_AFILAL.pdf"))
