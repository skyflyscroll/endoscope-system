import './js/particles.min.js';
let particles = {} as any
export function particlesRun() {
  particles = window.Particles.init({
    selector: '#myCanvas',
    color: '#ffffff',
    maxParticles: 30,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 80
        }
      },
      {
        breakpoint: 375,
        options: {
          maxParticles: 50
        }
      }
    ]
  })

}

export function particlesDestore(){
  particles.destroy()
}