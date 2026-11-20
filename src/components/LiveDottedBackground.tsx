import { useEffect, useRef } from 'react'

export default function LiveDottedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let width = 0
    let height = 0

    // Mouse coordinates with easing
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX
        mouse.targetY = e.touches[0].clientY
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Autonomous pulse wave
    let waveTime = 0

    // Drifting signal nodes
    const NODE_COUNT = 18
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number; pulse: number }[] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const SPACING = 34

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.1
      mouse.y += (mouse.targetY - mouse.y) * 0.1

      waveTime += 0.015

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'
      const baseDotColor = isDark ? 'rgba(148, 163, 184, 0.08)' : 'rgba(15, 23, 42, 0.06)'
      const tealColor = isDark ? 'rgba(67, 217, 208, ' : 'rgba(12, 165, 160, '
      const blueColor = isDark ? 'rgba(108, 140, 255, ' : 'rgba(61, 95, 217, '

      // 1. Draw live dot matrix
      for (let x = SPACING; x < width; x += SPACING) {
        for (let y = SPACING; y < height; y += SPACING) {
          // Distance from mouse
          const dx = mouse.x - x
          const dy = mouse.y - y
          const distMouse = Math.sqrt(dx * dx + dy * dy)

          // Distance-based wave effect
          const wave = Math.sin(x * 0.005 + y * 0.005 - waveTime) * 0.5 + 0.5

          let dotAlpha = 0.08
          let dotRadius = 1
          let fillStyle = baseDotColor

          if (distMouse < 180) {
            // Interactive mouse glow
            const proximity = 1 - distMouse / 180
            dotAlpha = 0.15 + proximity * 0.65
            dotRadius = 1 + proximity * 1.6
            fillStyle = `${tealColor}${dotAlpha})`
          } else if (wave > 0.88) {
            // Wave highlight
            const waveGlow = (wave - 0.88) / 0.12
            dotAlpha = 0.1 + waveGlow * 0.2
            dotRadius = 1 + waveGlow * 0.5
            fillStyle = `${blueColor}${dotAlpha})`
          }

          ctx.beginPath()
          ctx.arc(x, y, dotRadius, 0, Math.PI * 2)
          ctx.fillStyle = fillStyle
          ctx.fill()
        }
      }

      // 2. Update and draw drifting connection nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.03

        if (n.x < 0) n.x = width
        if (n.x > width) n.x = 0
        if (n.y < 0) n.y = height
        if (n.y > height) n.y = 0

        const pulseAlpha = (Math.sin(n.pulse) * 0.5 + 0.5) * 0.35 + 0.15
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${tealColor}${pulseAlpha})`
        ctx.fill()

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y)
          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.14
            ctx.beginPath()
            ctx.strokeStyle = `${tealColor}${lineAlpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
