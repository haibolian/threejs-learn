const setSize = (container, camera, renderer) => {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
}

class Resizer {
  constructor(container, camera, renderer){
    if(!container) {
      throw new Error('Container is required, please make sure to has a canvas container')
    }
    setSize(container, camera, renderer)
    window.addEventListener('resize', () => {
      setSize(container, camera, renderer)
    })
  }

}

export { Resizer }