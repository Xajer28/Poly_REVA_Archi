from selenium import webdriver
driver = webdriver.Firefox()
driver.get("https://www.linuxpedia.fr/doku.php/flux_radio")
# --------------------------------------------------
# Récupérer les elements de taille h2 (les lettres de classification)
# elts = driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div[2]/div')
# elts_titles=elts.find_elements_by_tag_name("h2")
# for i in range(len(elts_titles)):
#     print(elts_titles[i].text)
elts = driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[2]")
# -------------------------------------------------
#Recupérer les titres de radios
elts_titles = elts.find_elements_by_class_name("col0")
for i in range(len(elts_titles)):
    print(elts_titles[i].text)
#----------------------------------------------------
# Récupérer les liens de flux radios
elts_links = elts.find_elements_by_class_name("col1")
for i in range(len(elts_links)):
    print(elts_links[i].text)

# Mettre en forme
print(len(elts_links))
print(len(elts_titles))

# Fermer le webdriver
driver.close()