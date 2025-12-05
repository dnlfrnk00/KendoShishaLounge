import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Shader
        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            u_color1: { value: new THREE.Color(0x050505) }, // Deep Black
            u_color2: { value: new THREE.Color(0x450a0a) }, // Deep Red
            u_color3: { value: new THREE.Color(0x991b1b) }, // Secondary Red
        };

        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        // Premium "Aurora/Spotlight" Shader
        const fragmentShader = `
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec3 u_color1;
            uniform vec3 u_color2;
            uniform vec3 u_color3;
            varying vec2 vUv;

            void main() {
                vec2 st = gl_FragCoord.xy / u_resolution.xy;
                
                // Create slowly moving spotlights
                float t = u_time * 0.2;
                
                // Left light
                vec2 pos1 = vec2(0.0, 0.5 + 0.2 * sin(t));
                float dist1 = distance(st, pos1);
                float spot1 = smoothstep(0.8, 0.0, dist1);
                
                // Right light
                vec2 pos2 = vec2(1.0, 0.5 + 0.2 * cos(t * 0.8));
                float dist2 = distance(st, pos2);
                float spot2 = smoothstep(0.8, 0.0, dist2);
                
                // Bottom center glow
                vec2 pos3 = vec2(0.5, -0.2);
                float dist3 = distance(st, pos3);
                float spot3 = smoothstep(1.0, 0.0, dist3);

                // Mix colors
                vec3 color = u_color1; // Base dark
                color = mix(color, u_color2, spot1 * 0.6); // Left red
                color = mix(color, u_color2, spot2 * 0.6); // Right red
                color = mix(color, u_color3, spot3 * 0.4); // Bottom glow

                // Add subtle noise/grain for realism (optional, keeping it clean for now)
                
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
        });

        const plane = new THREE.Mesh(geometry, material);
        scene.add(plane);

        // Animation
        let animationId: number;
        const animate = (time: number) => {
            animationId = requestAnimationFrame(animate);
            uniforms.u_time.value = time * 0.001;
            renderer.render(scene, camera);
        };

        animate(0);

        // Resize handler
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            uniforms.u_resolution.value.set(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export default Background3D;
