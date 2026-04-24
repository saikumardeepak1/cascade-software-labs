"use client"

import { useEffect, useRef } from "react"

class Particle {
  x = 0; y = 0
  vx = 0; vy = 0
  tx = 0; ty = 0
  speed = 0
  r = 29; g = 29; b = 31
  opacity = 1

  update() {
    // Direct lerp towards target — no proximity slowdown, no stalling
    this.vx += (this.tx - this.x) * 0.12
    this.vy += (this.ty - this.y) * 0.12
    // Dampen velocity
    this.vx *= 0.72
    this.vy *= 0.72
    this.x += this.vx
    this.y += this.vy
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(${this.r},${this.g},${this.b},${this.opacity})`
    ctx.fillRect(this.x, this.y, 2, 2)
  }
}

interface ParticleTextEffectProps {
  text: string
  fontSize?: number
  canvasWidth?: number
  canvasHeight?: number
  className?: string
}

export function ParticleTextEffect({
  text,
  fontSize = 22,
  canvasWidth = 700,
  canvasHeight = 80,
  className = "",
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number | undefined>(undefined)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // Render text to offscreen canvas to get pixel positions
    const off = document.createElement("canvas")
    off.width = canvasWidth
    off.height = canvasHeight
    const octx = off.getContext("2d")!
    octx.fillStyle = "white"
    octx.font = `700 ${fontSize}px -apple-system, BlinkMacSystemFont, "SF Pro Display", Arial, sans-serif`
    octx.textAlign = "center"
    octx.textBaseline = "middle"
    octx.fillText(text, canvasWidth / 2, canvasHeight / 2)

    const { data } = octx.getImageData(0, 0, canvasWidth, canvasHeight)
    const step = 5 // sample every N pixels — fewer particles = cleaner convergence

    // Collect target positions
    const targets: { x: number; y: number }[] = []
    for (let y = 0; y < canvasHeight; y += step) {
      for (let x = 0; x < canvasWidth; x += step) {
        const idx = (y * canvasWidth + x) * 4
        if (data[idx + 3] > 60) targets.push({ x, y })
      }
    }

    // Shuffle so particles fly in from all directions, not left-to-right
    for (let i = targets.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[targets[i], targets[j]] = [targets[j], targets[i]]
    }

    // Create / reuse particles
    const particles = particlesRef.current
    particles.length = 0
    for (const t of targets) {
      const p = new Particle()
      p.tx = t.x
      p.ty = t.y
      // Spawn from random edge so they fly inward
      const side = Math.floor(Math.random() * 4)
      if (side === 0) { p.x = Math.random() * canvasWidth; p.y = -30 }
      else if (side === 1) { p.x = canvasWidth + 30; p.y = Math.random() * canvasHeight }
      else if (side === 2) { p.x = Math.random() * canvasWidth; p.y = canvasHeight + 30 }
      else { p.x = -30; p.y = Math.random() * canvasHeight }
      p.opacity = 0.75 + Math.random() * 0.25
      particles.push(p)
    }

    const ctx = canvas.getContext("2d")!

    const loop = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      for (const p of particles) {
        p.update()
        p.draw(ctx)
      }
      animRef.current = requestAnimationFrame(loop)
    }
    loop()

    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", maxWidth: "100%", height: "auto" }}
    />
  )
}
