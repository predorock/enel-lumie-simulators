# Price Calculation Logic

Since this is a simulator that previews anc calculate AC installation and purchase this is a mini documentation of the prices values and how to change the UI according to it.

## Air Conditioning Configurator

| Type              | Price (€) |
|-------------------|-----------|
| Monosplit         | 100       |
| Dualsplit         | 100       |
| Trialsplit        | 150       |

When:
A a AC type is incremented, the type of installation is selected and the square meters are provided

Then:

Increment the total installation cost of the number of units per the price of the unit.