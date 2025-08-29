# Report Implementation Guidelines

This document explains how to obtain the report of the simulation done so far.

## Explanation

After the simulation has been trough all the simulations steps including the dyamic ones, there is the `lancio-simulazione` steps.

When the user click on the `next` button to go to the `lancio-simulazione` step the application has to call the simulation api to obtain the report of the simulation.

When the request is fullfilled the result has to been show in the next step to be defined later with associated new UI.

## Simulation API URL

URL: https://greenovationdashboard.azurewebsites.net/api/lumie/clima
METHOD: POST

## Simulation Payload

Get the information from the application state and serialize like the following format.

```json
{
    "Comune":"Roma",
    "Numero_Macchine":3,
    "Clima1":"Daikin Clima Siesta Super Plus 12000",
    "Clima2":"Daikin Clima Siesta Super Plus 12000",
    "Clima3":"Daikin Clima Siesta Super Plus 12000",
    "Numero_Predisposizioni_Mono":1,
    "Numero_Predisposizioni_Dual":0,
    "Numero_Predisposizioni_Trial":2,
    "Numero_Predisposizioni_Canalizzazione":0,
    "Numero_Smontaggi_Mono":0,
    "Numero_Smontaggi_Dual":1,
    "Numero_Smontaggi_Trial": 1,
    "Stanza1_mq": 10,
    "Stanza2_mq": 10,
    "Stanza3_mq": 10
}
```
Comune -> The selected city
Numero Macchine -> The sum of monosplit + dualsplit + trialsplit selected. (should be >= 1 and <= 3)
Clima1 -> The first product name selected
Clima2 -> The second product name selected (if not present empty string)
Clima3 -> The third product name selected (if not present empty string)
Numero_Predisposizioni_Mono -> amount of monosplit (0 if not present)
Numero_Predisposizioni_Dual -> amount of dualsplit (0 if not present)
Numero_Predisposizioni_Trial -> amount of trialsplit (0 if not present)
Numero_Predisposizioni_Canalizzazione -> amount of Duckwork (keep 0 TBD)
Numero_Smontaggi_Mono -> amount of monosplit to remove (default 0),
Numero_Smontaggi_Dual -> amount of duasplit to remove (default 0),
Numero_Smontaggi_Trial -> amount of trialsplit to remove (default 0),
Stanza1_mq -> amount of mq of the first room,
Stanza2_mq -> amount of mq of the second room,
Stanza3_mq -> amount of mq of the third room,

## Code Requirements

- create a separate state slice to handle the request and the report

## To Be Defined

- Duckwork amount to keep 0 by the moment
- The report response is a json but the format is not defined yet.

## Report Response

```json
{
    "success": true,
    "message": "Completed",
    "timestamp": "2025-08-29T05:47:09.8694852Z",
    "body": {
        "Comune": "Airasca",
        "Numero_Macchine": 1,
        "Clima1": "Daikin Clima Siesta Super Plus 12000",
        "Clima2": "",
        "Clima3": "",
        "Stanza1_mq": 34,
        "Stanza2_mq": 0,
        "Stanza3_mq": 0,
        "Numero_Predisposizioni_Mono": 1,
        "Numero_Predisposizioni_Dual": 0,
        "Numero_Predisposizioni_Trial": 0,
        "Numero_Predisposizioni_Canalizzazione": 0,
        "Numero_Smontaggi_Mono": 0,
        "Numero_Smontaggi_Dual": 0,
        "Numero_Smontaggi_Trial": 0,
        "Numero_Lavaggi_Mono": 0,
        "Numero_Lavaggi_Dual": 0,
        "Numero_Lavaggi_Trial": 0,
        "ProjectUrl": "https://greenovation.blob.core.windows.net/enelclima/0020eb98-dcab-49cb-86f6-7eda97b396b7.pdf",
        "Id": "0020eb98-dcab-49cb-86f6-7eda97b396b7"
    }
}p
```