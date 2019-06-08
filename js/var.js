//update css on js
//querySelectorAll returns NodeList: use method: forEach()  in NodeList to loop over inputs
const inputs = document.querySelectorAll(".controls input");
//create function called handleUpdate
function handleUpdate() {
  //console.table(this.value);
  //dataset: object that will contain all data attributes from specific element, in this case its sizing
  //will take anything that has a data- in specific element and give it in an object
  // || = or   " " = nothing some don't have sizing so say or nothing so it will fallback
  // if no suffix will console nothing
  //created this const to get suffix: px from data-sizing or nothing if it doesnt have anything like Base Color
  const suffix = this.dataset.sizing || "";
  //console.log(suffix);
  //console.log(this.name);
  document.documentElement.style.setProperty(
    //will grab name of blue, spacing, or base color, add value, + suffix
    `--${this.name}`,
    this.value + suffix
  );
}
//listen for change event for each input
inputs.forEach(input => input.addEventListener("change", handleUpdate));
//update automatically; handle change on mousemove instead of waiting for mouse to leave, when move value trigger a change
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
