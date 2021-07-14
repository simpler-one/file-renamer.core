# File Reamer Core
## Samples
- `{n}_{#}.{x:+u}`
  - `abc.JPG` -> `abc_1.JPG`
  - `ijk.GIF` -> `ijk_2.GIF`
  - `xyz.png` -> `xyz_3.PNG`
- `foo_{00}.{x:+l}`
  - `abc.JPG` -> `foo_00.jpg`
  - `ijk.GIF` -> `foo_01.gif`
  - `xyz.png` -> `foo_02.png`


## Variables

|name                     |token     |params/options |
|---                      |---       |---            |
|--Name--                 |
|FullName                 |nx        |upper:+u, lower:+l, replaceFrom: str from, replaceTo: str to  |
|SimpleName               |n         |upper:+u, lower:+l, replaceFrom: str from, replaceTo: str to  |
|ExtensionName            |x         |upper:+u, lower:+l, replaceFrom: str from, replaceTo: str to  |
|--Serial--               |
|SerialNumber             |#         |start: int s=1 |
|SerialNumber(pad=2)      |##        |start: int s=1 |
|SerialNumber(pad=9)      |######### |start: int s=1 |
|SerialNumber(s=0)        |0         |- |
|SerialNumber(s=0, pad=2) |00        |- |
|SerialNumber(s=0, pad=9) |000000000 |- |

year, month, day
