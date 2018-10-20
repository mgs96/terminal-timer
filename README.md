# terminal-timer

## to use this

* `npm i -g terminal-timer`
* run `timer 10` to have timer of 10 seconds in the terminal

## Options

`
  -c, --color   color of digits displayed (this color should be supported by [chalk](https://npmjs.com/package/chalk))
  
  -f, --font    font to be used by the digits diaplayed (this font should be usd by [figlet](https://npmjs.com/pcakage/figlet))
  
  -m, --minutes timer to be displayed in 00:00 format
`

## Examples

`
  timer 10 -c red               set timer for 10 seconds and digits are of color red
  timer 120 -m -f ghoul -m      set timer for 120 seconds and digits use font ghoul and timer is displayed in 00:00 format
`

## Todo

* allowing setting of default font by the cli user
