import { createScene } from './components/scene'
import { createCamera } from './components/camera'
import { createMeshGroup } from './components/meshGroup'
import { createLights } from './components/light' 
import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/Resizer'
import { Loop } from './systems/Loop'
import { createControls } from './systems/controls'
import { useHelper } from './systems/helper'

let scene, camera, renderer, resizer, loop  
class World {
  constructor(container) {
    scene = createScene()
    camera = createCamera()
    renderer = createRenderer()
    container.appendChild(renderer.domElement)
    useHelper(scene)
    
    const meshGroup = createMeshGroup()
    const {mainLight} = createLights()
    loop = new Loop(camera, scene, renderer)
    loop.updatables.push(meshGroup)

    scene.add(meshGroup, mainLight)

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