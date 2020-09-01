![https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600](https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600)

# My Experience doing fun ( stupid ? ) stuff with Python & JS - Part I

### Subtitle : How I learned to love Rust & Clojure

So, the last fortnight was nice. I tried to implement a bunch of stuff in Python & JS, and in the process, learned a few important things about both languages. I'll list below what I tried and what I learned :

## Part Une : Python

![https://www.pyinstaller.org/_images/pyinstaller-draft2b-windowed.png](https://www.pyinstaller.org/_images/pyinstaller-draft2b-windowed.png)

So Telegram had a Data Clustering contest going on : [https://contest.com/docs/data_clustering](https://contest.com/docs/data_clustering) , where users were supposed to create binaries for a CLI-based app, which would perform a set of operations akin to Data Science on a certain dataset.

They recommended using C/C++, since performance was a factor. However, I chose Python, thinking 'since Python was already popular in Data Science applications, why not choose that ?'. Following this train of thought, I was not wrong, burning through the various operations was a breeze in Python. However, the part where I would get stuck is in building the binaries ( a very essential step here ).

I tried using PyInstaller, but try as I may, the library wouldn't make my binary run at all. I would keep running into some weird import issues ( hidden imports ). The solutions I tried were :

1. Add hidden imports from CLI. But, multiple hidden imports couldn't be added this way.
2. Create a spec file and write my hiddenimports there. PyInstaller kept overwriting my spec file.
3. Add hidden imports using a hook. PyInstaller refused to detect my hook.
4. Import hidden imports directly. This solution worked but my whatthelang import broke. I gave up at this point.

You can follow my past adventures here : [https://github.com/akash-joshi/telegram-cluster](https://github.com/akash-joshi/telegram-cluster)

## Conclusion Une : Don't F*ck with Python ( when you want to build binaries )

A naive conclusion I draw from this is not to use Python when I want to form binaries. I looked at C/C++ but they don't have functional conveniences like the map & reduce combinator, which I'm a huge fan of : [https://www.youtube.com/watch?v=uM--v7XS5IY](https://www.youtube.com/watch?v=uM--v7XS5IY)

Rust does support these functional concepts, so that is a lang which I would probably choose in the future, in case a contest with a binaries requirement pops up.

However, [pkg](https://www.npmjs.com/package/pkg) is something I want to experiment with too.