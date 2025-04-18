# Basic Dropdown KB
Add basic dropdown functionality to show/hide the dropdown's content for all the dropdown on the page.

## How to use
1. Add dropdown container's markup on the page with the class `dropdown`.
2. Add markup for the dropdown content toggler button as a child of the dropdown container. The button should have a class value `dropdown-toggler` and a data attribute `data-dropdown-target` which would contain the id of the dropdown content for this dropdown.
3. Add markup for the dropdown content as a child of the dropdown container besides the toggle button. The dropdown content should have the class attribute with the value `dropdown-content` and an id attribute whose value will be used in the toggle button's `data-dropdown-target` attribute.
