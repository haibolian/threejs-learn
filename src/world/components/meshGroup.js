import { Group, Mesh, MeshStandardMaterial, SphereGeometry } from "three"

function createMeshGroup(){
  const group = new Group()

  const geometry = new SphereGeometry(0.25, 16, 16);
  const material = new MeshStandardMaterial({ color: 'red' })

  const protoSphere = new Mesh(geometry, material)

  group.add(protoSphere)

  for(let i = 0; i < 1; i+= 0.05){
    const sphere = protoSphere.clone()
    sphere.position.x = Math.cos(2 * Math.PI * i)
    sphere.position.y = Math.sin(2 * Math.PI * i)
    sphere.scale.multiplyScalar(0.01 + i)
    group.add(sphere)
  }

  group.tick = (delta) => {
    group.rotation.z -= delta * 0.5
    // group.rotation.x -= delta * 0.2
    // group.rotation.y -= delta * 0.2
  }

  return group
}

export { createMeshGroup }

