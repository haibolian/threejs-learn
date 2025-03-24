import { AxesHelper, GridHelper } from "three"

function useHelper(scene){
  const axes = new AxesHelper(5)
  const grid = new GridHelper(10, 10)
  scene.add(axes, grid)
}

export { useHelper }

