import { BoxGeometry, MathUtils, Mesh, MeshStandardMaterial, TextureLoader } from 'three'

const angle = MathUtils.degToRad(30) 

function createMaterial(){
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png')

  const material = new MeshStandardMaterial({
    map: texture
  })
  return material
}

function createCube(){
  const geometry = new BoxGeometry(2,2,2)
  const material = createMaterial()
  const cube = new Mesh(geometry, material)
  cube.rotation.set(-0.5, -0.1, 0.8)
  
  cube.tick = (delta) => {
    cube.rotation.x += angle * delta
    cube.rotation.y += angle * delta
    cube.rotation.z += angle * delta
  }
  return cube
}

export { createCube }