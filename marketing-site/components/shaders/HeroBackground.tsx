import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;

  // Utility: 2D rotation matrix
  mat2 m(float a) {
      float c = cos(a), s = sin(a);
      return mat2(c, -s, s, c);
  }

  // Enhanced easing function with bounce
  float easeInOut(float t) {
      float bounce = sin(t * 6.28318) * 0.05;
      return (t < 0.5 ? 4.0 * t * t * t : 1.0 - pow(-2.0 * t + 2.0, 3.0) * 0.5) + bounce;
  }

  // Wave function for fluid motion
  float wave(float x, float freq, float speed) {
      return sin(x * freq + iTime * speed) * 0.5 + 0.5;
  }

  // Map function
  float map(vec3 p) {
      // Multiple time scales for different motion layers
      float slowTime = iTime * 0.2;
      float medTime = iTime * 0.4;
      float fastTime = iTime * 0.8;
      
      // Dynamic coordinate scaling
      float scale = 0.5 + sin(slowTime * 0.3) * 0.51;
      p *= scale;
      
      // Complex rotation patterns
      float rotX = sin(slowTime * 0.3) * 0.2 + cos(medTime * 0.2) * 0.1;
      float rotY = cos(slowTime * 0.2) * 0.15 + sin(medTime * 0.3) * 0.08;
      float rotZ = sin(medTime * 0.25) * 0.1;

      // Apply layered rotations with -90 degree base rotation
      p.xz *= m(-1.5708 + rotX);  // -90 degrees in radians
      p.xy *= m(0.05 + rotY);
      p.yz *= m(rotZ);

      // Dynamic pattern animation
      vec3 q = p * 1.25 + vec3(
          easeInOut(wave(p.x, 1.0, 0.3)),
          easeInOut(wave(p.y, 1.2, 0.4)),
          easeInOut(wave(p.z, 0.8, 0.5))
      );

      // Layered shape with dynamic motion
      float baseShape = p.x * p.y * length(p + vec3(sin(slowTime * 0.1))) * log(length(p) + 1.0) * 0.5 +
                      sin(q.x + sin(q.z + sin(q.y))) * 0.15;

      // Enhanced particle system
      float particleDensity = sin(3.0 * p.x + fastTime) * 
                             sin(3.0 * p.y + fastTime * 0.7) * 
                             sin(3.0 * p.z + fastTime * 0.5);
      
      // Dynamic vapor motion
      float vaporPulse = easeInOut(sin(slowTime + length(p.xy)) * 0.5 + 0.5) *
                        wave(length(p), 2.0, 0.2);
      
      // Combine with temporal variation
      float vapor = particleDensity * (0.15 + sin(medTime) * 0.05) * vaporPulse;

      // Add subtle swirling motion
      float swirl = sin(atan(p.y, p.x) * 3.0 + slowTime) * 0.05;
      
      return (baseShape + vapor + swirl) * 0.7;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
      p *= 6.0;
      // Using the secondary color: oklch(0.279 0.041 260.031) converted to RGB
      vec3 cl = vec3(0.067, 0.067, 0.279);  // Exact match to secondary color
      float d = 3.0;

      for (int i = 0; i <= 5; i++) {
          // Camera movement to the right
          float camX = 2.0 * iTime + sin(iTime * 0.1) * 0.5;  // Positive multiplier for rightward motion
          float camY = cos(iTime * 0.15) * 0.3;
          // Rotated -90 degrees by swapping and negating appropriate coordinates
          vec3 pp = vec3(camX, camY, -8.0) + normalize(vec3(-p.y, p.x, 3.0)) * d;

          float rz = map(pp);

          float edgeTime = cos(iTime * 0.05) * sin(iTime * 0.03);
          float f = clamp((rz - map(pp + 0.15)) * 0.4 * edgeTime * pp.x, -0.1, 1.0);

          // Color palette based on secondary color
          vec3 l = vec3(0.067, 0.067, 0.279) -  // Base secondary color
                   vec3(0.1, 0.1, 0.3) * f +  // Subtle variation maintaining purple tone
                   vec3(sin(iTime * 0.2) * 0.02);  // Very subtle variation
          
          float blend = 1.0 - smoothstep(0.0, 3.0, rz);
          cl = cl * l + blend * 0.45 * l;  // Reduced blend to maintain color integrity

          d += min(rz, 1.5);
      }

      // Subtle pulsing that maintains the base color character
      float pulse = 0.5 + sin(iTime * 0.2) * 0.02;
      fragColor = vec4(cl, 1.0) * pulse;
  }

  void main() {
      mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`

const vertexShader = `
  varying vec2 vUv;
  
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

export function HeroBackground() {
  const meshRef = useRef<THREE.Mesh>(null)
  const uniformsRef = useRef({
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  })

  useFrame((state) => {
    if (!meshRef.current) return
    uniformsRef.current.iTime.value = state.clock.elapsedTime * 1.74  // Slightly faster base animation
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