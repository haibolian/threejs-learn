class Resizer {
  constructor(container, camera, renderer){
    if(!container) {
      throw new Error('Container is required, Pleace make sure to has a canvas container')
    }
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
  }
  
}

export { Resizer }