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

## Air Conditioning Dismount Configurator

This section is about how much is the dismount price per AC type and the limit of the dismount unit you can add.

Max Units to dismount: 10

| Type              | Price (€) |
|-------------------|-----------|
| Monosplit         | 60       |
| Dualsplit         | 90       |
| Trialsplit        | 120       |

When:
A a AC type is incremented

Then:

Increment the total installation cost of the number of units per the price of dismount of the unit.

## Air Conditioning Cleaning Configurator

This section is about how much is the cleaning price per AC type and the limit of the units to clean you can add.

Max Units to clean: 10

| Type              | Price (€) |
|-------------------|-----------|
| Monosplit         | 75        |
| Dualsplit         | 150       |
| Trialsplit        | 220       |

When:
A a AC type is incremented

Then:

Increment the total installation cost of the number of units per the price of dismount of the unit.