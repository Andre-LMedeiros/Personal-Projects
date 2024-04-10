from selenium import webdriver
from selenium.webdriver.common.by import By

browser = webdriver.Firefox()
""" browser.get('https://inventwithpython.com') """
""" 
try:
    elem = browser.find_element(By.CLASS_NAME, "cover-thumb")
    print('Found <%s> element with that class name!' %(elem.tag_name))
except:
    print('Was not able to find an element with that name.') """


browser.get('https://www.linkedin.com/in/karencujabante/')

followBtnEl = browser.find_element(By.XPATH, "/html/body/div[5]/div[3]/div/div/div[2]/div/div/main/section[1]/div[2]/div[3]/div/button")
followBtnEl.click()