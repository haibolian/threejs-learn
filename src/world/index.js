import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createLights } from './components/light' 
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { Loop } from './systems/Loop'
import { createControls } from './systems/controls'

let scene, camera, renderer, resizer, loop  
class World {
  constructor(container) {
    scene = createScene()
    camera = createCamera()
    renderer = createRenderer()
    container.appendChild(renderer.domElement)
    
    const cube = createCube()
    const {mainLight} = createLights()
    loop = new Loop(camera, scene, renderer)
    // loop.updatables.push(cube)

    scene.add(cube, mainLight)

    resizer = new Resizer(container, camera, renderer)

    const controls = createControls(camera, renderer.domElement)
    loop.updatables.push(controls)

  }

  render(){
    renderer.render(scene, camera)
  }

  start(){
    loop.start()
  }

  stop(){
    loop.stop()
  }
}

export default World;