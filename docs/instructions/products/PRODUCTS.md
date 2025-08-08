# Products Implementation guidelines

This document explains the functional and technical requirements for the products fetch and display.

## Products

The products should be pre-fetched via api request. The response will be like in this file /src/assets/mocks/products.response.json.

### Product Object Structure

```json
{
    "Name": "Daikin Clima Siesta Super Plus 12000",
    "Brand": "Daikin",
    "Price": 1487.761,
    "Image": "https://localhost:9529",
    "Url": "https://www.enel.it/it-it/condizionatori/daikin-siesta-super-plus-12000-btu",
    "Features": {
        "Led": true,
        "Wifi": false,
        "Voice": false,
        "RispEn": true,
        "ProgGiorn": true,
        "ProgSett": false,
        "Sleep": true,
        "Turbo": true,
        "Muffa": false,
        "Ionizzazione": false,
        "Autodiagnosi": true
    }
}
```

Name: the name of the product
Brand: the brand of the product
Price: the price in € of the product
Image: the image to show of the product
Url: the url to the official page of the product
Features: a map of key: boolean that indicates which are the feature active or not on the product

## Product fetchin

The logic of fetching has to be implemented in the store in a dedicated slice.

## Product Display

There must be a component called a AcProductDisplayContainer who display the list of products from the store.


