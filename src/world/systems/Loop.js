import { Clock } from 'three'

const clock = new Clock();

class Loop {
  constructor(camera, scene, rerender){
    this.camera = camera
    this.scene = scene
    this.rerender = rerender
    this.updatables = []
  }
  start(){
    this.rerender.setAnimationLoop(() => {
      this.tick()
      this.rerender.render(this.scene, this.camera)
    })
  }
  stop(){
    this.rerender.setAnimationLoop(null)
  }

  tick(){
    const delta = clock.getDelta()
    this.updatables.forEach(updatable => updatable.tick?.(delta))
  }
}

export { Loop }