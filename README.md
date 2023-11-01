# README: Using Attributes in Webflow

## Overview

This guide provides instructions on how to use specific attributes in Webflow to apply currency and percentage formatting without any coding.

## Attributes

- **currency**: This attribute specifies the type of currency symbol you want to display with an input value. It uses the `currencyCalc` function to apply formatting.
- **percent**: This attribute is used to format input values as percentages. It uses the `percentFormat` function to append a percentage symbol and handle input formatting.

## How to Use

1. **Currency Formatting**:

   1. Add an input element in your Webflow project.
   2. Set the attribute name as `currency` and the value as the desired currency type (e.g., `dollar`, `euro`). The value should match one of the currency symbols listed in the `currencies.ts` file.
   3. When a user types into this input, the value will automatically be formatted with the appropriate currency symbol.

2. **Percentage Formatting**:
   1. Add an input element in your Webflow project.
   2. Set the attribute name as `percent`.
   3. When a user types into this input, the value will automatically be formatted as a percentage.

## Note

Ensure that the provided scripts are linked or embedded in your Webflow project for these attributes to function correctly. If a currency symbol is not recognized, it will default to the U.S. Dollar symbol.
