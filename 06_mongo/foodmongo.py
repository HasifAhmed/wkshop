# Hasif Ahmed
# SoftDev pd8
# K06 -- Yummy Mongo Py
# 02/28/2019

import pymongo, pprint

SERVER_ADDR = "68.183.108.157"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def by_borough(borough):
    for doc in collection.find( {"borough": borough} ):
        pprint.pprint(doc)
        print('\n')

def by_zip(zipcode):
    for doc in collection.find( {"address.zipcode": zipcode} ):
        pprint.pprint(doc)
        print('\n')

def by_zip_and_grade(zipcode, grade):
    for doc in collection.find( { '$and': [ {"address.zipcode": zipcode}, {"grades.grade": grade} ] } ):
        pprint.pprint(doc)
        print('\n')

def by_score_threshold(score):
    for doc in collection.find( {"grades.score": {'$lt': score} } ):
        pprint.pprint(doc)
        print('\n')

def by_cui_and_street(cuisine, street): 
    for doc in collection.find( { '$and': [ {"cuisine": cuisine}, {"address.street": street} ] } ):
        pprint.pprint(doc)
        print('\n')
