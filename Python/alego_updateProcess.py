import webbrowser, sys, pyperclip
from selenium import webdriver


if len(sys.argv) > 1:
    # Get address from command line
    address = ' '.join(sys.argv[1:])
    
else:
    # Get address form clipboard
    address = pyperclip.paste()
    

webbrowser.open(address)
""" browser = webdriver.Firefox() """

browser.get(address)