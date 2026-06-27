import { useEffect, useRef } from 'react'

// Decorative, interactive "blockchain" background: drifting block nodes linked by
// chain lines, reacting to the cursor. Colors mirror the theme tokens in
// src/styles/globals.css (--color-teal #3f51b5 over the cream --color-background).
const ACCENT = { r: 63, g: 81, b: 181 } // #3f51b5

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  hash: boolean // a few nodes render a tiny "0x" hash glyph
}

const LINK_DIST = 150 // px between nodes to draw a chain line
const MOUSE_DIST = 200 // cursor influence radius

export default function BlockchainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let nodes: Node[] = []
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999 }
    let rafId = 0
    let running = true

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(70, Math.max(18, Math.floor((width * height) / 22000)))
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: 4 + Math.random() * 4,
        hash: i % 7 === 0,
      }))
    }

    const drawBlock = (n: Node, alpha: number) => {
      const half = n.size / 2
      const r = 1.5
      ctx.beginPath()
      ctx.roundRect(n.x - half, n.y - half, n.size, n.size, r)
      ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha})`
      ctx.fill()
      if (n.hash) {
        ctx.font = '8px ui-monospace, monospace'
        ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha * 0.7})`
        ctx.fillText('0x', n.x + half + 2, n.y + 3)
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // chain lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.18
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // nodes + cursor links
      for (const n of nodes) {
        const mdx = n.x - mouse.x
        const mdy = n.y - mouse.y
        const mdist = Math.hypot(mdx, mdy)
        let alpha = 0.35
        if (mdist < MOUSE_DIST) {
          const t = 1 - mdist / MOUSE_DIST
          alpha = 0.35 + t * 0.4
          // brighter link from cursor to node
          ctx.beginPath()
          ctx.moveTo(mouse.x, mouse.y)
          ctx.lineTo(n.x, n.y)
          ctx.strokeStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${t * 0.35})`
          ctx.lineWidth = 1
          ctx.stroke()
          // gentle repulsion
          const force = (t * 0.4) / (mdist || 1)
          n.vx += mdx * force * 0.05
          n.vy += mdy * force * 0.05
        }
        drawBlock(n, alpha)
      }
    }

    const step = () => {
      if (!running) return
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        // friction keeps velocities near the drift baseline after mouse nudges
        n.vx *= 0.99
        n.vy *= 0.99
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        n.x = Math.max(0, Math.min(width, n.x))
        n.y = Math.max(0, Math.min(height, n.y))
      }
      render()
      rafId = requestAnimationFrame(step)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onResize = () => {
      resize()
      if (reduceMotion) render()
    }
    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(rafId)
      } else if (!reduceMotion && !running) {
        running = true
        rafId = requestAnimationFrame(step)
      }
    }

    resize()
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibility)

    if (reduceMotion) {
      render() // single static frame
    } else {
      rafId = requestAnimationFrame(step)
    }

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  )
}
