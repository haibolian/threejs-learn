import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function createControls(camera, canvas){
  const controls = new OrbitControls(camera, canvas)
  // controls.autoRotate = true
  // controls.autoRotateSpeed = 10

  controls.enableDamping = true

  controls.tick = () => {
    controls.update()
  }
  return controls
}

export { createControls }
