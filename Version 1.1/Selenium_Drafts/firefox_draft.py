from selenium import webdriver
driver = webdriver.Firefox()
driver.get("https://www.linuxpedia.fr/doku.php/flux_radio")
# Récupérer les elements de taille h2
elts = driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div[2]/div')
# Les afficher
print(elts.text)
# Fermer le webdriver
driver.close()
