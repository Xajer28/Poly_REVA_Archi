# -*- coding: utf-8 -*-
import scrapy
from selenium import webdriver

class RadioSpyderSpider(scrapy.Spider):
    name = 'radio-spyder'
    allowed_domains = ['linuxpedia.fr']
    start_urls = ['http://www.linuxpedia.fr/doku.php/flux_radio/']

    def __init__(self):
        self.driver = webdriver.Firefox()

    def parse(self, response):
        # # Print what the spider is doing
        # print(response.url)

        self.driver.get(response.url)
        elts = self.driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[2]")
        # -------------------------------------------------
        #Recupérer les titres de radios
        elts_titles = elts.find_elements_by_class_name("col0")
        # for i in range(len(elts_titles)):
        #     print(elts_titles[i].text)
        
        #----------------------------------------------------
        # Récupérer les liens de flux radios
        elts_links = elts.find_elements_by_class_name("col1")
        # for i in range(len(elts_links)):
        #     print(elts_links[i].text)

        # Integrer dans le JSON
        for i in range(len(elts_links)):
            yield {
                'name' : elts_titles[i].text,
                'link' : elts_links[i].text
            }


        self.driver.close()
