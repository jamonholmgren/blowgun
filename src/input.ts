const keys = {
  "\u001b[A": "up",
  "\u001b[B": "down",
  "\u001b[C": "right",
  "\u001b[D": "left",
  "\u0003": "ctrl-c",
  "\u007f": "backspace",
  "\u001b": "escape",
  "\u0004": "ctrl-d",
  "\u0005": "ctrl-e",
  "\u0006": "ctrl-f",
  "\u0007": "ctrl-g",
  "\u0008": "ctrl-h",
  "\u0009": "tab",
  "\u000a": "enter",
  "\u001b[1~": "home",
  "\u001b[2~": "insert",
  "\u001b[3~": "delete",
  "\u001b[4~": "end",
  "\u001b[5~": "pageup",
  "\u001b[6~": "pagedown",
  "\u001b[7~": "home",
  "\u001b[8~": "end",
  "\u001b[1;5A": "ctrl-up",
  "\u001b[1;5B": "ctrl-down",
  "\u001b[1;5C": "ctrl-right",
  "\u001b[1;5D": "ctrl-left",
  "\u001b[1;2A": "shift-up",
  "\u001b[1;2B": "shift-down",
  "\u001b[1;2C": "shift-right",
  "\u001b[1;2D": "shift-left",
  "\u001b[1;3A": "alt-up",
  "\u001b[1;3B": "alt-down",
  "\u001b[1;3C": "alt-right",
  "\u001b[1;3D": "alt-left",
  "\u001b[1;4A": "alt-shift-up",
  "\u001b[1;4B": "alt-shift-down",
  "\u001b[1;4C": "alt-shift-right",
  "\u001b[1;4D": "alt-shift-left",
}

export async function inputKey(): Promise<string> {
  // wait for user input (1 key, including arrow keys)
  const key = (await new Promise((resolve) => {
    process.stdin.setRawMode(true)
    process.stdin.resume()
    process.stdin.once("data", (data) => {
      process.stdin.setRawMode(false)
      process.stdin.pause()
      resolve(data.toString())
    })
  })) as string

  // if it's a special key, return the name
  const keySp = key as keyof typeof keys
  if (keys[keySp]) return keys[keySp]

  // otherwise return the string
  return key
}
