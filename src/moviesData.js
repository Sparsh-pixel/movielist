export const movies = [
    {
      id:1,
      title: 'The Avengers',                  
      plot:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
      rating: '8.0',            
      price: 99,            
      star: 0,
      fav: false,
      cart: false                  
    },
    {
      id:2,
      title: 'The Dark Knight',                  
      plot:
        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      poster:
       "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYFxcXGx0bGxsbGxoaGhsbGx0bGhsbGxsbICwkHR0pHhsdJTYmKS4wMzMzGiI5PjkxPSwyMzABCwsLEA4QHhISHTIpIik7MjIyMjIyMjIyMjIyMjIyMjIyMjIyNDIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIARQAtgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAQIDBQYABwj/xABCEAACAQIEAwUECAUCBgIDAAABAhEAAwQSITEFQVEGEyJhcYGRobIUIzJzscHR8DNCUmJyJOE0Y4KSovEVgxZDU//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAArEQACAgICAgECBQUBAAAAAAAAAQIRAyESMQRBUQUTImFx0fAVMoGR4RT/2gAMAwEAAhEDEQA/APSNifWuLGq48RUuVB1zEGilxIrficHIGxzsBWV4mpM71q8ReHOqzEIDWsdEmTTDk6GR76mw9llbUmrV1VTqQJ6kDoPxI94qS2gYjVSekj0q7Ah7wgc6HUEnc1YPZDsAGA1jcb9PWjcPw60sEuOsyB6fgfdUtoCfh2BhdzRjIRXWsRaUm33iZlElcy5gNNSsyBqPeKdiL6ghSQC0wJEmN4HOKzsK0CXE5UJdwvOaecWhMB1946kfirf9p6Uj4pTzHvG3WqJBL4jShL371ovE3FgmRpvqNPXpQSshP2h7xyJH4gj2GqSGU2LQloJPXc1EiMuhJ99XF+yu8g+0ULeA5kVQADz1PvqJiep99TXwJIkSIkSJ5RIqBh50gIHJ6n3muUMOZ+NTKo5U/JQFkKA9T76cyk8zt1qC9xPD29GuLI3A8RBG4hZoO72mww2FxzvoAo+JB+FQ5I0jGT9Gj7PKe9Op+wfmWuqs7L9oxdvsq2YAtk6tr9pByHnXVDkjRQkaW7iMt9j/AHt+Jq1+m6TNVeK4HdLNcymC7ac9zrFCtNvwsZ/KPWteznei4GOZpnrTWxEaE1n/AKZB05U/DOz606Cy4xuDW6FDGIJ25yNvflb/AKRUNvhwRsy3IMoZKz4kULJ8QGsSdJk70BcxTppFPTHSubb8qKCwy1w1QygN9k75VBIlG1PN5QeL101pU4PatwRc1UqRI08IcRowMTcYxPPpVWnEidjUTXyxiedHFj5Goxz27jM5cAstsQQGX6trjCQd57w6eQoDEopa0wdvqVVU2OgBVpO8sIBiNhVQ9u5Enb1qXCKx1o40S5Ez8ORmZsx8WfTSPGPiAWc//Y1KOFgmc5nfbQElm0WdNWPs0olRUK8Usy03EGRsrSwEMOWvrQCbC7HDBFzM094rKYAH2iSeepk6dKD/APh7agqbhJcEaxJlCrED/Jmc+bUJju11i2QobvDmhsmuUCdeh1gRPOsrxjtG1zELctllFseCQoMn7Rg9fPlQUoyZtb/CVLFsxBM6ESuv9pMbfkeVQtw1V5yAQRIH9Rcyeck1nLHbG7KhwkZvEdc2UmSAAYkDT2UZie19v+VHb1hf1oE1IKv2rbXGi4O8kNkkEiMhHhmf5PcT5UK2FiPFsQRp/aF5HyrH3OIAXzetoFOYsFJkSZnaOpqS7x++xnOF8goj460uRp9p+jW4e3kEAz+xRKiapeD8cF1u7ZcrctZDRy20NaG3a1oszaadM8+4/hMmJccjDD0YSf8Aymq9lg/pWs7bYfK1q5GhBRvZ4h+LVlborJo6oytIvuxB/wBS33TfOldXdiJ+kt903zpXVDNT6EvIqg8t9q884jYe7deNBvqDrWwxfEV8WuxIrJ4ziUMTy2rXGmcOSSbKZ7WQaxHlzpy4gsMtsagTpT2ud42UCZo3A4Xu0ZBBY9N/bWrIiRAhR4yWgSfKetMscNnRtEJmOcH8K7GWvo9pjlN3xSRPi5ac+XICqTE9sd17vu2BgSCTl9J0NTZaTZfW8Lhr4bu2jIcpIkAn2766UPjcGLCNcfMQsarrMkAAAxzoTsfiwwupmEkllaBudduvs5U2xw9r91rdxmzoPACZ3OpE8tJNPlXYOAJZ4/ec3GSzmtrzZssaag6GTzgbVV8D7Qtauu15rlxSD4dD4pEHUgKInb3VccZRrea0rAqNRp4p5lus61jsVZIc6FjP70pN6sqHFtxZd8a7Um8htrbNsEgznObQ7aAaEaRrWZcjoKtMNhCRtr6UHibRHMRO3+1KV0XCcbpEC5o0mPcK4nXU/n+FctsRqTM7RStbAnQ8t9DUbNm1ZysOv6U7N5SaeUgkQqyOf5HrT1YTuQCOVNEy0DspPKPf+dcFJ3YCfP8ASp50BhtOZ2/e1R5tNhvud6GhKTI8kag7H8Odei9n7mbD2yTJAgmZPhJH5V59cMcwZ6bCtJ2P4gFJtsSC5GQaxIBJ12EgD3UJ0Kaco38F32qsB8I5ABNshx7DDbf2k+6sDd1APlXqdy0HR0OzqVPowI/OvLAhAytyJU/5Df8AflSkTjei47Ef8S33TfOlLTuxA/1LfdN86V1ZnSmbbE43xusxDN+JqsxV8QSTNBcSxUXbizrnf5jUCXMxrqSPOktlzg74RJAlqktYoLcQvnlyQImI5kkbbig8O077VW8f4kUPd8suZtuZ0HuE+0VLHBWXw4sVLrbtxljbUkknXTSd96z2PxcXDdexbzHfMCSZjWDoD5ih+HXrhQxnJbeGgf7mCKrcRimLFSNZgjUxGlQpxbpdm7wZIJSa0zc8EfDKqXgFzkFdJIQmJgbDly61NheLWkvXFaS0zn0BiDoOnKsXhrzW92VSdxMgx5UJicSQS2Yyem1DiSm26RavxJ2uuwEzJBOpgGZIFM4nxHORJAAECBEaVSd+wMgFc3x1/CntnMbDT9zVJr0EsTT2Tpf2G+nXehMRc55QNfb6Uy0ddTTbiCDAMzvSk20VGCixFfwnxRrtH50j3NdCT60iKcraD1O/srneY1rOzdRthKLMFbfLnqD561ArEMOVWmBsg6SZyqdZgAxoPfV9Z7Pi5bZkthiFkDnCmDAmSPfXLLyowez1V9OlPHdoyUby/wCME0loCdQT6UULbhyoA00nlHXSpE4XczwQQdIjz2iuj7sPk81+NkuuIGUJH2dtzP5VZcOZLdy1cJhVJzHkJBGvlr8KJbgDwjENlcak6QZ899I2orAdnrjLdRlgZWhjMFlOmXrt8a5cnlQW7PTw+DLg1Jdo1Nm5MQZrz/tHYNvE3QNmIcf9WpP/AHZqns8cvKIDKAun2V5afpQHFMU911dyCYy7Aaaxt6mu6tWeHGLjNplt2LX/AFLfdN86V1M7DN/qG+6b5krqzNaCuJPN6794/wAxqfC241oPFt9fd+8ufO1FYZyTFdaOGQfBjSsZeuNeuszCC5GnTYAfCvQbFsERWO7t2xbMtsvkcmNQGFs66+imsc01GLbOrw8Usk6S+Cx4XwvPmt5shIOUk8wJAkD8BVYOC3LNyHB0kNHIgxW/7P8ABr9zNfRVUBSFAyls5gkif2JMVfcM4E+XxIhXcyG7zUazJOv5E18+/Pnjm2la+D6fycGCcHFuq13tHkz4LNqNgeWvrvSvhV/hiNdpIkgT516Dxrss4BZUVQzRplUAcjAgCZoI8DRDbLFT3cAkBmgqddly/HnXZ/U042lv4PPw/S4SkqloyHEuFfVW3WYA5+ZO3WI+NVg0Oinbn+OtencQ4dbvBEtyGUNqwgFdTA1JzR+HpWKxvCv5g2h5r7NOdPwfM5pp9h5/iVTSdfyiia34gQYnrXLhyc2pOjHQdBM+mlXWAwAuOLZG8z1AESanwPDLlvvA+WcjqApzEkqYG23trpyeVCNpvZy4vByTppa9mTAGsz5RRfDEhoKrrAzNMeLQGIIPTbnROE4dddGe2hIBg1eYDhxtx3iycoGUQfEI391Z5/Igo1ezq8HxMrmnWiS5hrNtlTPDKusq2hMkqSd401jcVJb7R4ewhtZDcaZBKALvtIaekGpcYFKk92czSJYiYMEHbrPOszjsHmvAEgZuZBge2d9edefBRyalZ7nkQyQgnD5omudpbYnJh7QYz4iC2hmZznU846xVyON4m4qG2viAAAS2oYgc5CyBsNDWP4lhWVyEkhYBYAKCfRdOgrZdk7YsWLl86N9kvuCCCTl+HLc+hrXNGEYKSVv0cOKeRzcZ+vfVEtx7ltS1x2Zic4UMSB4iPHv5bHnVLi+NP3iPOmkgSBoRIj2CnXOPB3c3BmzArE5QB/KYG8flVASNI351p4/jN3zRPmedHGo/blYbjLaC4xX7LHMPIET+P4UNiUGX01pwH2T0BH5/macwkQa9LGqikfP+RJPK5Lp7/wBlt2Nwx+kMRBBttt1zW66k7GSuJYSR9U3t8SRSUMFZJxjDut26Y3uPE/5nX0ojhVsKN5J51cca4dca5cdtZdo5aSaBw2FymJrdPRxyLG5iBbtPcP8AIM0dY1A9pgVW8M7ZWVC58OqmcuYQTlIlmKkEAlo2HWou1+IyWEtg6u2vXKmvzFayuGXllk/ua5PJ8eOb+49DxPIlhjr29nr3De1lu4QEcoSw5ZcxIE6c4IrU3e09q0oDtq0abkTz05V4QXIKnY76eo/St7h7QvW8z5RkSSSTLdCdOo9kV8/n8N+NJOLaWz38Kw+V2qrs0vaLiYu4YOjZbZDMZ+1KzCnlqY08xVPa4IzG2qeC4ULeIp4dAQzKCSPtDcD7VUCYlnS3blso8UakTqQY9o9wqbE4Fh9aLxu3WDFkhpzAr4ZJ19eWUUuMU/xN3/Oz0I4JYY8IypW/V/pZDee/bIUvbgEgSwmOZYmCTGv/AL1scBirbuqMiCCZYTuPbE7bVWDAtdshyAoAJLsSpYywOVSdWGuhGk+dDpc7tVZbYzZi2csxLCMsKp8MDTUa1b4ytR0+tfJq481XaCOKXkw5LhQJOUkk6iKFwXFVY6CCDBnxAMNDBGn/AL99dxTGi4hDvEsFUnoAZIAkjlVr2a4ZZDLnLHKSZ0MkRyJrRwUcdz7MYzlGdQqktl9w/hruylfEXPIkiYEzV1xDg1nDW0uXg2eQQFIALb5STt7RV9wLF27dr+GttF+zrprucxPoPZQXabHWL1ppuBCJUaFpBK6iAQJ0g77VhB4muXK38HFPy8s8qjTUb3X/AAwvGuK2rjs9uytsZpjTfYnN0M6rsCAZ1NZrE3/rM0Bs0E6jdZHMHrtR+D4gLisgKtCkgOoC6lAfskGYA58qTi/G/GrotlO7EZVRDmJVczEtJJkkb6RXXjhK2q2deTPCMEovS93fX6hXD8J3i5BkkkGTJ00J3P4dKrO1nEVLm0gyoghVAUAaA/y6Gd586o3x1xj43YzvJNDlgSdJrrxeI1LlJ/4PG8v6nGacYIascxNSKdIC0xalAaehNeijw2xYB3qQjoPh+/L3UkQI58+nlFICAP8AahIU3dF52PWcQ33bco/mt/v2Utd2PYd+0/8A8zy/uT/eupMabNfxe5DMP72/E1UneAKIxt0vduAb520/6jTsPYgyeW/lWi6MX2Y/tXez3wnK2ir/ANR8R+BX3VUWtNf1qXE3+8uO/wDWxb2E6D3RXKtJ9G6aVIt7GyAfajWdNcx09xHv92iw+PWyHS6Dp4NZIJBMx11j31lsHYDXEUsFDMJJ2AmZPsG1EYlwFYFiWVlgRuWJzGeWkH215nl4/uSUWe39PyLHCU31+xdJxhDnU2yFUsQw0MTpoB6c/wBadhOOBCjIinM2QZmJbLImCCAGPWNJrJ4hzkYdYmeeoNJhnYNa2hTMa/1eZ8qmXgx49GsPqjlp9P8Ac32F7QKoe46B2QApH8uYgMJbaYkxzHOhW4pbvm1aKBBcLFd2ytcYEeIklQTI0nSs/febbkzqF2nqenpQtrFIvdSASMsE/aEExEnr5VhHwoJ2ls6f/UovlGr/AJ6DuN8D1MOhGbLmDBl8MaBhpVzw2xPdBQfEyKTyUEgH161RHGsiwonMR4SJBAnl+daPhuKNm3aY5S911AGfW2h+0xj+aCPTWpz48lKPfwdGLy8NSkv7mtlhxjjhSw9u0pZlA+saABLT4QeRAJk+6sNiuIXrgkXCNRmAOjEADZYEaUFjMU7E5mmTqSTFJYsB4GYCTE7DWOtb+P4ccMbrZ5OTyedqOiJDE8hEH4UwBS0E+HqZjzmKW5uelISgOg0/fWvRWP2eZLO0uPoXEqouP3ZlMxynXVZ8O+u3WkzmZA8q4a7bU8zpptzrRKjllK3YzJ10p5QxM/rTih504WSRMwJj27/v1qiRGQAbkkn2R+tKcs+EzIB25xJGvTakRRlJ59D+VKq6iYHluaK2P0XnZH+Ow/5Z6f1JXU7sj/HaY/hnr/Un5UlSxo0aplu3DA1uPPXc1Bx/G5LF2JkrA6DOco166z7KOdSbjiP5290mqfts0Jatf1MXPoogfMfdVIyvZiEt0QgExzpyW9eVTWbckCffoNecmq6G3yZPgzmuWk/ug+0gDc7VBxVw2IuFR4c5j0G23pT0Um4pGgVl20iSW9Tsd6iGHIdswg6zvz1/OudQTycr9HdLI146jXvshv7RIHsn4e2nWAM4EnQARpGgn13pbyHMB+nPSi8Nbm4R0mN46VtJHLDJQ3G6KBEgnWTA09vnUKTmCwv8usCfQaae+j+JWdFBE79PKo0SHEkaR7gBURgjSed+mQ4tXAEEjXlvsaY5/hEyWXqeh0orHWmgrBOViGjWCJBk+tQX7BWAf6QfY3iHwINP7aZms0kmQYi3odP3NR20UrDGNT0GulWD29DQ1u0DudPdTcFYRzNJg729SP3FNzLpA230FGPb16j1J8tzUbZYgCD6CqSI5bIVbMZp6qdokVJ3kmnLI2jXlToLI8hiZ0qLJJou3adjlG/u9abcG8CNt9Tpv7z5UB6BcgmCaQCpLlrXyPs/CkC5fSnQmy97Iv8AXtv/AAz8yV1J2RP17D/ln5krqh9lro9CXBkXG21ZvxmsV2tfPimHK2qoPYMx+LR7K9JwGPt3luXF07t3Vwd1yk6+hAma8mxDyzPtmZmjpmMx7JpwMpAeSpF2Gp/flTXYRvTiQAPjTl0OD2Q2MQYZSo+0WmeYUqBHtn21LbDMxdoljrFDh1ymFjkZMySxI/8AGB7KPwJkAwPwECF/Ks4pXZtkm3FKyF7R7xRJ5DSkwinvCfFBneeoo225NzfT2ch/tU2EUHNPSNf35Vqc1sr8fclgY8KzzAqTh5D4i0rnQ3EB/wAZE/CosbYbaAQNvLU0/CIVuBiIIJMjfTnRWh3YX2k7UXL6utqwLNvCtcBgkK2ZwikrlEvJJMkzBJ2rOcKxTMSrdARvoAAIo7H3TetXmvXs7reP8S60gQMvd2xIYnxgnLpA1Gs1PC1BvLl2g/h51zwk1KjunBcGzTMmh9Kgt2p3+FHqulNS3oa6DgQG9kA6aj1mh2QAba+n51YMkTQd5d6ZSIS40BFMzQZp5SmxRQ7OVzvTkI3OvUbT7aUIdqVrdOhWRW7BYwN9fgJO/kJ9lQxU1y1ppuNfXypLbqV86EHoteyA+vb7s/MldTuyQ+vb/BvmSuqJdmseifEXsl66VYrLXFMGJDFgQfIiqy6/Kl4tdVbt3MY+sfc/3GhlvAr4YM7U0YtPsVo0Bp177MxpoPfP6H3VCGJbX/aiL7DulAYEm4xK8wFS2FJ8iWaPQ0puqNIRsE5RHPn5DrVolopC6GI28xP50Cw8KAEneQNNzyPnVs7yWMRJJjpJmB+HsrOLdmk0qGW+foeX760XYfQiZofDW5DT0ozD2lVfsjfp6VqcvsGulc2wPxph1bpqeVTJblhtvzMAQJJJOwAkk+VW/CuFpeGdC1xASAFEB40JDNoFnrqd4iJTlQ4xswPFOGXHuubaMwyhmI2HIyTpy23oTBI9p1dkYDXcETIjSa2fEeOqMcwBCKLfdMZXKrTJJbLoANNAegHTO8U4ijMYd35T9hdOgGoHlNZJbs7U3x4tBDcfUad2faY/I0dguI23fJIBI01kN6Hr5VkHuSZpVbaNCKrkS8MaN3iFHL9KCe3FS8Kvd5bVm1bUN6jSfaINEOoCMZ1Oigewkt0HKOfs1uznrbTKoiKgjWjgusaa+z1PpQSOCTp76oBRMUq2pI29pge2dKQuYilRjFAmc2p1ob6OScvn4fTfXpz91Fepih7i/vem1rQ06dsueyoAxDAGfq2+dK6m9lV+vb/BvmSuqGaLor8fhE7+74ZJuXDrJ/nPLaoMsMY5aVZ8TQd7d+8f5m50AyECP3561aRm5N9sGQ61KLZbQDT1jeuS3Jom0OQ5+VJoE6JbNrQEGQsATqYGgophIjrzqOyjQB/L8OtEqnIVKjQSm3bHqgGxP4UdajLFQW7fIkflRQSdfX0pmZnO1F7IgRdC5bN1ygDSemtVmD4zinRMLbusFMKANOUEEjXKBJq17V2ZUNEKoYzvrKAIPfM+VVnZjKGckEkgiBp4dJAJEDMxVSeQzVlLs7MdcbITgbSqxlrhAAGyqSTqwJOqgQJ2JnlVbdUTpt0qx4jfUs+pbYTJUE6SVA2XSADOmp1NVrA0Vo0i23Y2KlsBZ8W1R0bwnD95dRMrNJ+yv2m5wOnryE0JDk9Fv2dvCXQbHxAfA/lVu4neqpyLWIUi2Fk5co2AMA+uvy1eMBvWiOOfdgGITSgnXlMefT1irK9VbeXWKolDC3Kmh6YxrqoY+Op+G9RMdKezVE94cz+VSBddlR9eef1Z9niSupOyD/XN/g3zJSVL7LXQ7iqfW3PvH+ZqEDgjLGo5dI/Wi+JP9bdH/Mf5jUDW9ZFaIyI1t1NbQj0qTLUiCkwFsLRGWktKKkEUhDkFF2qGUVKz5VJ0/fP99KlgjJ9q8W5uG3BygCBrrPiJjz0/7aA4eoW2XfVQT4QxUmYGpGsSB7zQ2OxTPcLM+c6jN1G3uozhfEDbRlD5GJlTEx4WG/8AKSSNeoG0VnezuUaikNuW7kF0sm2s/aKkACBoGf03mgWJk5iSZ11n41zuDPMtufbM9ff50tsMTM7/ABprY6pCpbhhmBGusyKsOzzFcQniKDUMwMFU/mMn7OgifOg7iTrBHKSZ26mpsqrbESGJ1k6kbjQDQc9ddfKqolu0HcaxQe5KkaEkRsNdIqywV12TM7Zp20jT/wBzWaTStBgH+rWeUj3E1aMZqkEZ6gxB51zXNahd9CKDMHub04aCoLg1mmvcoGOd6FdSxg6KPjUhNcSIAjWdTPwAoZUVRe9jj9e33bfNbrqZ2PP+ob7tvmt0tQ+zRIdjn+uu/eP8xpytUGO/jXfvLnztXTpvWi6OV9hRadKVWoIvT1vUxljbcRS56C7+KXvqVAWKvQXHeJd3bZRqzKRrsM0rz5xm91Os3wdjNZfjwbvWzag6qdtNNtfL41EtI0xR5S2VoFG3iAunP9IHw/Gg0Gop7mTWaOuStolu35AAAAHQb0loH2VEKltuRtVrYmqVIlDxMHz/AFpFakJ3pVqjMeBVpgLngI6GqpTRWGfcU0Z5Ogm69RZ6az8qimqISFd6jmmO1NLVFmiiSF6ZnqMtTgaVlcTQdjgTfaJ/hn5k/fsrqM7M4lDfFtFhEtNrzuNnSXYAEA8gOQ0k11ZOTNeEQDHv9dd+8ufOaZ3lG47hNxrt0jJq7ES4BIZiRofL8DQz8JuiT4DlmfF0mRrEx+Y61upHI4sHZ6TvPOkwuGa6SqZZAnVgunlNErwS8f6P+4fhv094607QcSJHqQPQSvG/LT29PWisJYa5myFfCJMkDrsNzsdqYqJEvVJjcSBZcwNiBpOp8P4mosThHtAM5XeNGB1IJ29m+1AcTuju45Fh8NfyqG9FRj+JIp1p5p2DsG44RIlpiTpoCfwBozF8KuW0zuUA6BwW91ZI7GAgU9KaCK4OOoqyXsn60oFWFrgl0qG8ABgiWEmQDoOe8eqkcqCxdo23KOVzCNmBEHXQjyp2RTGip7Da1ArCJkRS5wOdMzlsnuHWoC1WS8HuuquuQhgCPGJgiRp7gehInTWg+IYJrOXPlGYEiDyEb6ab0mwjEFY02mM/SJp9oZiFlQT/AFMFGxOpYwNqmzXiMmngVY2OC3HXMDbiYnOpGkg6jlpv+dOvcGuopZssKCT4hsBJjrpO39J6UCYZ2N/4g/dN8yV1d2NYHENr/wDrb5rddUspGhxXa22lwA2WdrTkCWAWRNt4mdGUtsBvrO4rBx2ytu6iLdU3Ldu3MqIFq21saqwJmZMyNNjVFxU/X3fvLnztQk1aSMnZfcK43btWltujnLcL5VKBH1tsveBlJlTb0I5MfMNaL2ztjQWDDMXYEro7ByWUxv3jztqCw51jCaRTrNDBGmxfGUuYs32W5kyOpUmXUXLbp4cxIAGcHcDyFWSdqLSoqBLpC27aBSwysLYAhhJGV48UKPbvWObEM2aWJznM07sddSee599NVumtH6if5G1TtdbCwLd1Sch8L6ALMW1AYQgmANo3Wdap+K9oFfE2b5tmEBlc0tPjhlZp8QzhhOxUDQARRXMSWYsxJYmSepqDE3Jih1Q43yNWvau0XD5LyuqNbzKyZiCyMbhP9bFJOkS7b83v21ttvho0SArKADadLlpZjRFcXeWzrppFYsU97LLBIInUHqOoqKNuS9mj432kt3rTW1slMzBw0gkMz3LlxZG6lnGXp4utEJ2rQWUthbwK27aSrLE20ClQHzKEfdvDyWQ1ZtcSsABBPXSd/Sib+Lgjw7qp36j0pis0OI7XWHJzYYhXNzMARorrfWU10ci74pkfaI3EJie2KstzJbe29yWZleQrxaRGWIH2be5WQWlYO+ZxGL0KlYMEb9fZQ9q0SC38o3J29PM+VC+BN6s0GH48BjLuJcOwuF4hvGgYgrladwoCaEaEwRReI7S27gZXtuFMEZck5kuF0LH+b6tbdud/q6yQanZqZNM2X/5VaRW7u3ckveeHIKMbwbwuqtDKC3ME6binP2zsh+8XDarkKSwmVN4Q51BULd0hZkGeUY0NUZoaQ1Zp7nHsK1o2BYuIgRkRlZCwV3S60g6fbQRqdCfSoOAceOHRbYRm+u718rMJVVXwwrAH7JJzAgDaDrWeqQGlQ2zbJ20twkpcBVSCFckEtbyTJcFiDrmPi0+1M1G3bG3EGyzEKgDFhmY2ij2ixM7XO8JOv2xvFY9FkxIXfU7aAnkP2TTCaKQrPRuznadLl1lSwV8LuDIkF7rPcXTdZuLl6Q3WlrL9iv8AiG+6b5krqlloq+In6+996/ztQxNEcUP19772587UKWq0Q1s4muBrQ2MNhzw25fNgm6l1bOfvHAOdHcPkGkrAEbGKTsxwmzftYl7zZDbOHyP4yB3lwowKpqcwAUHlM0uRXEoJrixq84jwy0nE2wyg90MStuMxJyF1UjNvME61L224Zbw90JbstbWbgzN33jysAI71QDAgyhIObfajkhcTNZq0+H4daFlLoBvxHeIpQss9BnzHy0NZfN5Vur/Z2yuFW93dy0ww1i+t8O0Pdcw9lVOmYiWGXVeelClQpQv/AAQ2uKcJtOj9ziP77ZW2RPMHM8iiMT2n4S5UfRsSLYzSgFvcxBU95IiPbJqbhfZ3CXovYh3y+FGLsLTM7sFU52IDFVztG5yRWMwnCMuPt4S8D/xKWXiVkd4EYg+Y2PnUzlKLqyceOE1dG6xPYFboTEYSWs3VV1ncZhIB8wdDXXuyqXHsxGiNmHmhAg+jaGhuMtewVu03Drl5EzXw4R7j2ALb5BKXR4bkhi2kaggneo+G4Xu8H9PtXW+nXLOIuMsnxhcRluXCCMvhSDk56n+WC1maW0TLxuUtSeibinZjDYNBicaXZHYKqW4zsSCeZEAAa686rb/H+FOoBw+IAT7KKEVT/kwaZrI8S4tfxDBr917hG2ZiQs/0jZdhtV72J4LhsSuIOKc21t9yQ8kZc91VYQObA5QToM08ql5ZXo1WCKSu3RC2Jwd1vDbur0RVXL75JPqah4sLKqvdpkncs+Zj7vCPZWnPDLGFxFu0bTB7t1EK5yypmcKQDALAA6EnWg+2nBsPatJfsEsLt+4gkksi21UMjTzFwP4uala0lOlT7ZnCPKVq6X5mRQ04mrTiGAtpg8HeUHvLxxHeGSQe7dVSBsNCdt6v8J2ZtPgReVC7nD3bzXS7qEe2TFpVVGUkKskOQWz+EiNI5aNuOzEzTs1XfZbhlq+MV3zZBaw7XFfxEIwdAGKrqwhjpTe1nD7eGxty1bUm0gtkAsZIa3bdhmOoksfSaOW6DjqylD+VOiI13HLcbiD7vca0HbDCYe19HWzZNs3LCXnJuO/8QHwANsBl35zWcJ0iPbQmFGi7FH/Ut903zJSUnYc/6lvum+dK6kykiq4p/Hvfev8AO1Rs9vIAFbPzJYZd2mFidsvPk3UQ/i5+vvfe3PnahSaYh+VsuaDlnLMHLmiYnaY1imA1xumApJIWYE6CYmBymBPoKQGiwaH0hYc6Sa6aZI5GX+o+z/c0TZxCSPCzf5OQP/ED8aDCCloUmhNJnoHC+0mFRFt3bNlwNvq1fKes3M2vmauV4/wu8695g0uMMql8izpAGYqADsNPhFeUW1kxIUakk7AD01J8hT7eLZVyjQeW/nrVcoye0ZLFKK/Cz3TiV3CXcI+FwrW8L3oMZURVP+QEaE868b4V2bvX8S1mRb7snO7fZRRzH9U8gN/SgHxrsQSx0gegG0VYvxVhayqSGZQGYbmCwAJ/xMe2jjGvyHeSPxbPSsN2Z4Phll7bXnUas7FpjQnIpC+yDvQPGeJcPtoWwtnDhxqPqkmR5xrXmf8A8jd08baefsqB3nU0JxjtITx5Jak9fkWHFOKveIzKgA+yFUIB6ZYqvmkzGnZdJkbxHPSNT5a/A1Dds2jGlSEpQeXtpJpGNACk0gP7OtPxF0u7OYBYyQoCqPIAaAUwtpH7/elIroQk11ITSE0Do0fYg/6lvum+dK6m9iP+Jb7pvnSkqbKog4thF7+7qf4lzp/W3lQn0Rep+H6UtdVCE+iL1Pw/Su+iL1Pw/SlrqAO+iL1Pw/Su+iL1Pw/SlrqBCXMMOp5dOnpXfRF6n4fpS11ACfRF6n4fpSfRF6n4fpS11ACfQ16n4fpXDDDqfh+lLXUAJ9DXqfh+ld9DXqfh+ldXUhnfRF6n4fpXfQ16n4fpXV1AC/RF6n4fpSHBr1Pw/SurqYjvoa9T8P0rvoi9T8P0pa6gbEODXqfh+lJ9DXqfh+ldXUgL7sdhgMQ2p/ht0/qt+VLXV1SUf//Z",
      rating: '9.0',            
      price: 199,            
      star: 0,            
      fav: false,
      cart: false                  
    },
    {
      id:3,
      title: 'Iron Man',                 
      plot:
        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
      rating: '7.9',            
      price: 139,            
      star: 0,            
      fav: false,
      cart: false                  
    }]