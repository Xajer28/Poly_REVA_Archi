from selenium import webdriver
import json

driver = webdriver.Firefox()
driver.get("https://www.linuxpedia.fr/doku.php/flux_radio")
# --------------------------------------------------
# Récupérer les elements de taille h2 (les lettres de classification)
elts_cat = driver.find_element_by_xpath('/html/body/div[1]/div/div[2]/div[2]/div')
elts_name_cat=elts_cat.find_elements_by_tag_name("h2")
# for i in range(len(elts_name_cat)):
#     print(elts_name_cat[i].text)
#------------------------------------------------------------------------------------------
# Recupérer les donnes des tableaux
elts_data = driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[2]")
# -------------------------------------------------
# Recupérer les titres de radios
elts_titles = elts_data.find_elements_by_class_name("col0")
# for i in range(len(elts_titles)):
#     print(elts_titles[i].text)
#----------------------------------------------------
# Récupérer les liens de flux radios
elts_links = elts_data.find_elements_by_class_name("col1")
# for i in range(len(elts_links)):
#     print(elts_links[i].text)

#-------------------------------------------------------
# Mettre en forme (en JSON)
data = {}
data['radios_linuxpedia']= []
for j in range(len(elts_titles)):
    name = elts_titles[j].text
    link = elts_links[j].text
    data['radios_linuxpedia'].append({
        'name': name ,
        'link' : link
    })

name_file = 'radios.json'
with open('./radios_json/'+name_file, 'w') as outfile:
    json.dump(data, outfile)

# Fermer le webdriver
driver.close()