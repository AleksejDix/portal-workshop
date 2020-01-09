# Portals

[Demo](https://portals.aleksej.now.sh/)

## Chapter: Intro

1. problem: modals inside relative element
1. solution: only 1 modal with portal with positon escaping

Portals work like inverted slots in Vue, but they don't render the slot inside the components, but somehwere else on your app or maybe even outside the app. Who knows :D

## Chapter: Installing

1. Install Portal 2.0 Library
2. Add Portals to the App

## Chapter: Syntax and Components

1. `portal` component
1. `portal-target` component
1. seding first data to through the portal
1. turn off the portal
1. 1 receive multiple portals in one target
1. 1a changing the order of tne ported items
1. remove the wrapping of the portal target
1. change the rendered html element of the portal

explain `portal` and `portal-target` components
disabling `portal-target` and why do we need `mounting-portal`

## Chapter: Exercise

1. tooltips
2. modals
   1. creating reusable modal portal
   2. passing portal actions via scoped slots
   3. add focus lock to the modal
   4. disable scrolling then modal is open

## Chapter: Advanced

1. portals in another window  `mounting-portal` component
2. portals outside of vue
3. portals with scoped slots
