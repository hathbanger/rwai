import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from '../theme-provider'

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec4 overlayColor;

  float rand(vec2 p) {
    return fract(sin(dot(p, vec2(12.543,514.123)))*4732.12);
  }

  float noise(vec2 p) {
    vec2 f = smoothstep(0.0, 1.0, fract(p));
    vec2 i = floor(p);
    
    float a = rand(i);
    float b = rand(i+vec2(1.0,0.0));
    float c = rand(i+vec2(0.0,1.0));
    float d = rand(i+vec2(1.0,1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
    float n = 2.0;
    vec2 uv = fragCoord/iResolution.y;
    vec2 uvp = fragCoord/iResolution.xy;
    uv += 0.75*noise(uv*3.0+iTime/2.0+noise(uv*7.0-iTime/3.0)/2.0)/2.0;
    float grid = (mod(floor((uvp.x)*iResolution.x/n),2.0)==0.0?1.0:0.0)*(mod(floor((uvp.y)*iResolution.y/n),2.0)==0.0?1.0:0.0);
    
    // Base color #000414
    vec3 backgroundColor = vec3(0.0, 0.0157, 0.0784);
    // Softer highlight color
    vec3 highlightColor = vec3(0.1, 0.2, 0.4);
    
    // Reduce the intensity multiplier from 5.0 to 2.0 and adjust the power for softer transitions
    vec3 col = mix(backgroundColor, highlightColor, 2.0*vec3(pow(1.0-noise(uv*4.0-vec2(0.0, iTime/2.0)),3.0)));
    col *= grid;
    col = pow(col, vec3(1.0/2.2));
    
    // Apply the theme-based color overlay
    fragColor = vec4(mix(col, overlayColor.rgb, overlayColor.a), 1.0);
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`

// Convert OKLCH to RGB
function oklchToRGB(l: number, c: number, h: number) {
  // For dark mode: oklch(0.129 0.042 264.695)
  // For light mode: oklch(1 0 0)
  
  if (l === 1 && c === 0 && h === 0) {
    // Light mode - pure white
    return { r: 1, g: 1, b: 1 }
  }
  
  // Dark mode specific conversion
  // These values are tuned specifically for the dark mode background color
  return {
    r: l * 0.2,  // Slightly blue tinted
    g: l * 0.15,
    b: l * 0.4   // More blue for the dark theme
  }
}

export function HeroBackground() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { theme } = useTheme()
  
  const uniformsRef = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    overlayColor: { value: new THREE.Vector4(0, 0, 0, 1) }
  })

  // Update overlay color based on theme
  useEffect(() => {
    // Get the computed background color from CSS variables
    const root = document.documentElement
    const computedStyle = getComputedStyle(root)
    const bgColor = computedStyle.getPropertyValue('--background').trim()
    
    // Parse the OKLCH color
    const match = bgColor.match(/oklch\(([\d.]+)\s+([\d.]+)\s+([\d.]+)\)/)
    if (match) {
      const [_, l, c, h] = match.map(Number)
      const rgb = oklchToRGB(l, c, h)
      uniformsRef.current.overlayColor.value.set(rgb.r, rgb.g, rgb.b, 0.25)
    }
  }, [theme])

  useFrame((state) => {
    if (!meshRef.current) return
    uniformsRef.current.iTime.value = state.clock.elapsedTime
    uniformsRef.current.iResolution.value.set(window.innerWidth, window.innerHeight)
  })

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: uniformsRef.current,
        vertexShader,
        fragmentShader,
      }),
    []
  )

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <primitive object={shaderMaterial} attach="material" />
    </mesh>
  )
} 