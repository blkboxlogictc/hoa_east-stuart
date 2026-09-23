import * as THREE from 'three'

const COL_X = [-6.25, -3.75, -1.25, 1.25, 3.75, 6.25]
const HOME = { pos: new THREE.Vector3(0, 4.4, 23), look: new THREE.Vector3(0, 5.2, 0), fov: 42, curFov: undefined as number | undefined }
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

function flutedShaft(h: number, rTop: number, rBot: number, flutes: number) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, flutes * 6, 1, true)
  const p = g.attributes.position
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), z = p.getZ(i)
    const a = Math.atan2(z, x)
    const k = 1 - 0.045 * Math.pow(Math.max(0, Math.cos(a * flutes)), 0.6)
    p.setX(i, x * k)
    p.setZ(i, z * k)
  }
  g.computeVertexNormals()
  return g
}

export interface Portico3DHandle {
  flyTo(i: number, done?: () => void): void
  back(done?: () => void): void
  dispose(): void
}

interface Tween {
  fromP: THREE.Vector3
  fromL: THREE.Vector3
  fromF: number
  toPos: THREE.Vector3
  toLook: THREE.Vector3
  toFov: number
  t0: number
  ms: number
  done?: () => void
}

export function mount(container: HTMLElement, labelsEl: HTMLElement | null, opts: { marble?: string } = {}): Portico3DHandle {
  const small = Math.min(window.innerWidth, window.innerHeight) < 700
  const renderer = new THREE.WebGLRenderer({ antialias: !small, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  renderer.shadowMap.enabled = !small
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  container.appendChild(renderer.domElement)
  renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;'

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#091928')
  scene.fog = new THREE.Fog('#091928', 26, 60)

  const camera = new THREE.PerspectiveCamera(HOME.fov, 1, 0.1, 200)
  camera.position.copy(HOME.pos)
  const look = HOME.look.clone()

  const tex = new THREE.TextureLoader().load(opts.marble || '/assets/marble-lg.png')
  tex.colorSpace = THREE.SRGBColorSpace
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  const marble = new THREE.MeshStandardMaterial({ name: 'Marble', map: tex, color: '#f3eee4', roughness: 0.42, metalness: 0 })
  const shaftTex = tex.clone()
  shaftTex.repeat.set(0.35, 1.6)
  shaftTex.needsUpdate = true
  const shaftMat = marble.clone()
  shaftMat.map = shaftTex
  const cellaMat = new THREE.MeshStandardMaterial({ name: 'Cella', map: tex, color: '#b9b2a6', roughness: 0.6 })
  const floorMat = new THREE.MeshStandardMaterial({ name: 'Floor', color: '#0c1f33', roughness: 0.9 })

  const g = new THREE.Group()
  const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
    const m = new THREE.Mesh(geo, mat)
    m.position.set(x, y, z)
    m.castShadow = m.receiveShadow = true
    g.add(m)
    return m
  }

  add(new THREE.PlaneGeometry(200, 200), floorMat, 0, 0, 0).rotation.x = -Math.PI / 2
  ;([[16.4, 9.2], [15.6, 8.4], [14.8, 7.6]] as const).forEach(([w, d], i) => add(new THREE.BoxGeometry(w, 0.34, d), marble, 0, 0.17 + i * 0.34, -1.6 + i * 0.4 * 0))
  const top = 1.02
  const H = 7.2
  COL_X.forEach((x) => {
    add(new THREE.BoxGeometry(1.25, 0.18, 1.25), marble, x, top + 0.09, 1.2)
    add(new THREE.TorusGeometry(0.52, 0.1, 12, 40).rotateX(Math.PI / 2), marble, x, top + 0.28, 1.2)
    add(flutedShaft(H, 0.44, 0.52, 20), shaftMat, x, top + 0.3 + H / 2, 1.2)
    add(new THREE.CylinderGeometry(0.62, 0.46, 0.3, 32), marble, x, top + 0.3 + H + 0.15, 1.2)
    add(new THREE.BoxGeometry(1.35, 0.2, 1.35), marble, x, top + 0.3 + H + 0.4, 1.2)
  })
  const eY = top + 0.3 + H + 0.5
  add(new THREE.BoxGeometry(15.2, 0.7, 3.4), marble, 0, eY + 0.35, 0)
  add(new THREE.BoxGeometry(15.4, 0.5, 3.6), marble, 0, eY + 0.95, 0)
  add(new THREE.BoxGeometry(15.8, 0.18, 3.9), marble, 0, eY + 1.29, 0)
  const s = new THREE.Shape()
  s.moveTo(-7.9, 0); s.lineTo(7.9, 0); s.lineTo(0, 2.7); s.lineTo(-7.9, 0)
  add(new THREE.ExtrudeGeometry(s, { depth: 3.9, bevelEnabled: false }), marble, 0, eY + 1.38, -1.95)
  const inner = new THREE.Shape()
  inner.moveTo(-6.6, 0.3); inner.lineTo(6.6, 0.3); inner.lineTo(0, 2.1); inner.lineTo(-6.6, 0.3)
  add(new THREE.ExtrudeGeometry(inner, { depth: 0.1, bevelEnabled: false }), cellaMat, 0, eY + 1.38, 1.96)
  add(new THREE.BoxGeometry(14.2, H + 0.6, 0.4), cellaMat, 0, top + (H + 0.6) / 2, -1.5)
  scene.add(g)

  scene.add(new THREE.HemisphereLight('#dfe6f0', '#0a1626', 0.55))
  const key = new THREE.DirectionalLight('#fff1d6', 2.4)
  key.position.set(-10, 16, 14)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  Object.assign(key.shadow.camera, { left: -14, right: 14, top: 16, bottom: -4, near: 1, far: 50 })
  scene.add(key)
  const rim = new THREE.DirectionalLight('#d8bc7f', 0.9)
  rim.position.set(12, 6, -8)
  scene.add(rim)

  const resize = () => {
    const w = container.clientWidth, h = container.clientHeight
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    const fit = w / h < 0.9 ? HOME.fov * (0.9 / (w / h)) * 0.95 : HOME.fov
    HOME.curFov = Math.min(fit, 80)
    if (!tween) camera.fov = HOME.curFov
    camera.updateProjectionMatrix()
  }
  const ro = new ResizeObserver(resize)
  ro.observe(container)

  let tween: Tween | null = null
  const drift = { x: 0, y: 0 }
  let atHome = true
  const onMove = (e: PointerEvent) => {
    drift.x = e.clientX / window.innerWidth - 0.5
    drift.y = e.clientY / window.innerHeight - 0.5
  }
  window.addEventListener('pointermove', onMove)

  function go(toPos: THREE.Vector3, toLook: THREE.Vector3, toFov: number, ms: number, done?: () => void) {
    tween = { fromP: camera.position.clone(), fromL: look.clone(), fromF: camera.fov, toPos, toLook, toFov, t0: performance.now(), ms, done }
  }
  const labels = () => (labelsEl ? Array.from(labelsEl.querySelectorAll<HTMLElement>('[data-col]')) : [])
  const tmp = new THREE.Vector3()

  let raf: number
  const loop = (now: number) => {
    raf = requestAnimationFrame(loop)
    if (tween) {
      const k = Math.min(1, (now - tween.t0) / tween.ms)
      const e = ease(k)
      camera.position.lerpVectors(tween.fromP, tween.toPos, e)
      look.lerpVectors(tween.fromL, tween.toLook, e)
      camera.fov = tween.fromF + (tween.toFov - tween.fromF) * e
      camera.updateProjectionMatrix()
      if (k >= 1) {
        const d = tween.done
        tween = null
        d?.()
      }
    } else if (atHome) {
      camera.position.x += (HOME.pos.x + drift.x * 2.2 - camera.position.x) * 0.04
      camera.position.y += (HOME.pos.y - drift.y * 1.2 - camera.position.y) * 0.04
    }
    camera.lookAt(look)
    renderer.render(scene, camera)
    const w = container.clientWidth, h = container.clientHeight
    labels().forEach((el) => {
      const i = Number(el.getAttribute('data-col'))
      tmp.set(COL_X[i], top + 1.1, 1.8).project(camera)
      el.style.left = `${((tmp.x + 1) / 2) * w}px`
      el.style.top = `${((1 - tmp.y) / 2) * h}px`
    })
  }
  resize()
  raf = requestAnimationFrame(loop)

  return {
    flyTo(i, done) {
      atHome = false
      const gx = i < 5 ? (COL_X[i] + COL_X[i + 1]) / 2 : (COL_X[4] + COL_X[5]) / 2
      const px = COL_X[i]
      go(new THREE.Vector3(px + (gx - px) * 0.35, 4.6, 7.5), new THREE.Vector3(px, 4.8, 1.2), 50, 900, () =>
        go(new THREE.Vector3(gx, 4.4, 0.2), new THREE.Vector3(gx, 4.4, -1.4), 62, 800, done))
    },
    back(done) {
      go(HOME.pos.clone(), HOME.look.clone(), HOME.curFov || HOME.fov, 1300, () => { atHome = true; done?.() })
    },
    dispose() {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('pointermove', onMove)
      renderer.dispose()
      renderer.domElement.remove()
    },
  }
}
