import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLights } from './components/light' 
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'

let scene, camera, renderer, resizer
class World {
  constructor(container) {
    scene = createScene()
    camera = createCamera()
    renderer = createRenderer()
    container.appendChild(renderer.domElement)
    
    const cube = createCube()
    const light = createLights()

    scene.add(cube, light)

    resizer = new Resizer(container, camera, renderer)
  }

  render(){
    renderer.render(scene, camera)
  }
}

export default World;