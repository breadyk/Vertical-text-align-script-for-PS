# Vertical Text Alignment Script for Photoshop
<p align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXB6NTc1M2QxcXd3a3RhcGhqNG1qN2JydjV0NG5vbjNzNm5wZHBrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DUuLqHzK8EErlD7skI/giphy.gif" alt="Example GIF"/>
</p>

## RU
> Данный скрипт создан для центровки блочного текста по вертикали, так как нативно эта функция в фотошопе не реализована.

У скрипта есть два режима работы, где рамка сохраняет оригинальную ширину, и где ширина рамки становится равна ширине текста. По умолчанию включен первый. Чтобы включить второй удалите или закомментируйте следующую строчку(17), добавив в начало `//`
```JavaScript
var textWidth = layer.textItem.width; //Сохраняет оригинальную ширину блока
```
И раскомментируйте следующую строку(18), убрав `//` в начале
```JavaScript
//var textWidth = layer.bounds[2].as('px') - layer.bounds[0].as('px'); //Ширина блока примерно равна ширине текста
```
## EN
> This script is designed to vertically align block text, as this function is not natively implemented in Photoshop.

The script has two operating modes: one where the frame retains its original width, and another where the frame's width adjusts to match the text width. By default, the first mode is enabled. To enable the second mode, either delete or comment out the following line(17) by adding `//` at the beginning
```JavaScript
var textWidth = layer.textItem.width; //Сохраняет оригинальную ширину блока
```
And uncomment the next line(18) by removing `//` at the beginning.
```JavaScript
//var textWidth = layer.bounds[2].as('px') - layer.bounds[0].as('px'); //Ширина блока примерно равна ширине текста
```
# Known Issues
## RU
> Некоторые текстовые слои центруются некорректно, решается пересозданием текстового слоя.
## EN
> Some text layers are aligned incorrectly; this can be resolved by recreating the text layer.
