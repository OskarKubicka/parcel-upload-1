import anime from "animejs";
import { text } from "./modules/module"
anime ({
    targets: 'h1',
    rotate: 360,
    duration: 3000
})

const img = document.createElement('img');

document.body.append(img);

console.log(import.meta)

const imgURL = new URL('./media/animal.png', import.meta.url)
img.src = imgURL