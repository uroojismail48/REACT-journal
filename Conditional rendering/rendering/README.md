Render ka matlab hai — screen par dikhana ya banana.
React mein jab hum kehte hain "component render hua", toh iska matlab hai:

React ne us component ka code chalaya aur uska output (HTML/UI) browser ki screen par dikhaya.
React mein rendering 3 steps mein hoti hai:

Trigger — kuch hua jis ki wajah se React ko pata chala ke update karna hai (jaise state change hui)
Render — React ne tumhara component function chalaya aur dekha ke screen kaisi dikhni chahiye
Commit — React ne actual DOM (browser) ko update kar diya


Kab re-render hota hai?

Jab useState ki value change ho
Jab parent component re-render ho
Jab props change hon

Conditional Rendering
Matlab — condition ke hisaab se kuch dikhao ya mat dikhao screen par.
Jaise real life mein: "Agar logged in hai toh Dashboard dikhao, warna Login page dikhao."