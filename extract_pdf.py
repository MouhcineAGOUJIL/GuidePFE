from pypdf import PdfReader
import sys

def extract_text(pdf_path):
    try:
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n\n"
        return text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    # Guide PFE Parte 1
    print("--- GUIDE PFE PARTIE 1 ---")
    print(extract_text("public/content/Guide PFE Partie 1.pdf"))
