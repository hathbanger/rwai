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

  // Map function with enhanced detail
  float map(vec3 p) {
      p.xz *= m(2.72);                  
      p.xy *= m(0.15);                  
      vec3 q = p * 0.5 + iTime * 0.5;  // Reduced scale for wider view

      // Enhanced shape with more detailed features
      float baseShape = (p.x * p.y * length(p + vec3(sin(0.2))) * log(length(p + 0.5)) * 0.4) +
                       sin(q.x + sin(q.z + sin(q.y))) * 0.2 +
                       sin(q.x * 2.0) * sin(q.y * 2.0) * 0.1;

      // Refined particle overlay
      float particleDensity = sin(4.0 * p.x) * sin(4.0 * p.y) * sin(4.0 * p.z) * 0.5;
      float vaporPulse = sin(iTime * 0.4 + length(p.xy) * 1.5) * 0.5 + 0.5;
      float vapor = particleDensity * 0.15 * vaporPulse;

      return (baseShape + vapor) * 0.3;
  }

  // Soft shadow calculation for better depth perception
  float softshadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
      float res = 1.0;
      float t = mint;
      for(int i = 0; i < 16; i++) {
          float h = map(ro + rd * t);
          if(h < 0.001) return 0.0;
          res = min(res, k * h / t);
          t += clamp(h, 0.01, 0.2);
          if(t > maxt) break;
      }
      return res;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = (fragCoord - 0.5 * iResolution.xy) / min(iResolution.x, iResolution.y);
      p *= 1.8; // Zoomed out more
      vec3 cl = vec3(0.02);
      
      // Adjusted camera setup
      vec3 ro = vec3(0.0, 0.0, -4.5); // Moved camera back
      vec3 rd = normalize(vec3(p, 1.6)); // Adjusted FOV for wider view
      float d = 0.0;
      
      // Enhanced ray marching with better precision
      for (int i = 0; i < 12; i++) {
          vec3 pos = ro + rd * d;
          float dist = map(pos);
          
          if (dist < 0.001) break;
          
          float edge = clamp((dist - map(pos + 0.01 * rd)) * 8.0, -0.2, 0.2);
          float ao = 1.0 - float(i) / 24.0;
          
          vec3 l = vec3(0.35, 0.1, 0.5) +
                   vec3(-0.2, 0.0, -0.3) * edge +
                   vec3(0.1, 0.05, 0.15) * ao;
          
          float blend = 1.0 - smoothstep(0.0, 1.2, dist);
          cl = mix(cl, l, blend * 0.7);
          
          d += max(dist * 0.6, 0.01);
      }

      cl = mix(cl, vec3(0.02), 1.0 - exp(-0.1 * d));
      cl *= 1.1;
      cl = pow(cl, vec3(0.8));

      fragColor = vec4(cl, 1.0);
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
    uniformsRef.current.iTime.value = state.clock.elapsedTime * 0.4
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