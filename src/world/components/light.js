import { DirectionalLight, AmbientLight, HemisphereLight } from 'three'

function createLights(){
  const ambientLight = new AmbientLight('white', 2)
  const hemisphereLight = new HemisphereLight('white', 'pink', 2)
  const mainLight = new DirectionalLight(0xffffff, 5)
  mainLight.position.set(10, 10, 10)
  return {ambientLight, hemisphereLight, mainLight}
}

export { createLights }