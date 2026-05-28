# Watchlist Architecture Demo

A college front-end project created to demonstrate MVC, MVP and MVVM through a simple movie watchlist.

The user can register movies with title, year, genre, short synopsis and status. Each movie can be marked as watched or not watched, edited, deleted, searched and filtered.

Live preview: [Watchlist Architecture Demo](https://devkevinsramos.github.io/watchlist-mvc-mvp-mvvm/)

## About

Watchlist Architecture Demo is a simple web application built to compare three interface architecture patterns in the same project.

The project uses the same Model, Repository, View, HTML and CSS for all versions. The difference is the layer responsible for connecting the data with the screen:

* **MVC:** `MovieController` receives user actions, updates the data and asks the View to render the interface.
* **MVP:** `MoviePresenter` receives user actions, prepares the presentation logic and updates the View.
* **MVVM:** `MovieViewModel` stores the screen state and notifies the View when the interface needs to change.

The default version is **MVVM**, because it represents the final version of the project. However, the `main` branch also allows switching between MVC, MVP and MVVM directly through the interface or through the URL.

## Live versions

The project can be tested in three architecture modes:

* [MVC mode](https://devkevinsramos.github.io/watchlist-mvc-mvp-mvvm/?arch=mvc)
* [MVP mode](https://devkevinsramos.github.io/watchlist-mvc-mvp-mvvm/?arch=mvp)
* [MVVM mode](https://devkevinsramos.github.io/watchlist-mvc-mvp-mvvm/?arch=mvvm)

## Branches

This repository keeps separate branches for each architecture version:

* `mvc`: version focused only on the MVC architecture.
* `mvp`: version focused only on the MVP architecture.
* `mvvm`: version focused only on the MVVM architecture.
* `main`: integrated version with MVC, MVP and MVVM available in the same project.

This organization makes it possible to compare the evolution of the project from MVC to MVP and then to MVVM, while keeping the final version centralized in the `main` branch.

## Features

* add movies
* edit movies
* delete movies
* search movies
* filter by status
* watched movie counter
* localStorage persistence
* responsive layout
* architecture switch between MVC, MVP and MVVM

## Technologies

* HTML
* CSS
* JavaScript
* localStorage
* MVC architecture
* MVP architecture
* MVVM architecture

## Status

Completed version for presentation and GitHub upload.
