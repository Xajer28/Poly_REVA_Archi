# -*- coding: utf-8 -*-
import scrapy


class RadioSpyderSpider(scrapy.Spider):
    name = 'radio-spyder'
    allowed_domains = ['https://www.linuxpedia.fr/doku.php/flux_radio']
    start_urls = ['http://https://www.linuxpedia.fr/doku.php/flux_radio/']

    def parse(self, response):
        # Print what the spider is doing
        print(response.url)
         # Get all the <a> tags
        h2_selectors = response.xpath("//h2")
        #Print all h1
        # Loop on each tag
        for selector in h2_selectors:
            yield {
                'name' : selector
            }
