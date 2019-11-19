from selenium import webdriver
driver = webdriver.Firefox()
driver.get("https://www.linuxpedia.fr/doku.php/flux_radio")
# Récupérer les elements de taille h2
elts = driver.find_element_by_xpath('//*[@id="chiffres"]')
# Les afficher
print(elts.text)

driver.close()
