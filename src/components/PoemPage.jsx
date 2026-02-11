import { useEffect, useRef, useCallback } from 'react'
import classy from '../../assets/classy.jpg'
import doggo from '../../assets/doggo.jpg'
import glowing from '../../assets/glowing.JPG'
import goofy from '../../assets/goofy.png'
import sexy from '../../assets/sexy.JPG'
import sleepy from '../../assets/sleepy.PNG'
import drunk from '../../assets/drunk.jpg'
import annoyed from '../../assets/annoyed.jpg'
import cute from '../../assets/cute.jpg'
import me from '../../assets/me.jpg'
import butterflies from '../../assets/butterflies.png'

const poemSections = [
  {
    photo: cute,
    verse: `I know shawty doesn't like this photo, \nbeer, beach, baby looking pretty,\n what's not to love?`,
  },
  {
    photo: classy,
    verse: `shawty had some of the most fire fits back in the day, back when we was in the UK. You still do.`,
  },
  {
    photo: goofy,
    verse: `very demure. very classy. \nThe woman of my dreams everyone.`,
  },
  {
    photo: doggo,
    verse: `you see one dog and suddenly\nI don't exist anymore.\nit's fine. I'm not jealous.\n(I'm very jealous.)`,
  },
  {
    photo: me,
    verse: `you're not even trying here\nand you still look like that??\nthat's just disrespectful honestly.`,
  },
  {
    photo: sleepy,
    verse: `Russel and the fat fuck are definitely forgotten at this point. Best mom of the year award goes to you.`,
  },
  {
    photo: drunk,
    verse: `drunk kuru is a different species entirely.\nyou're probaly off helping someone you just met, you probably lost a shoe.\nstill the most entertaining person in any room.`,
  },
  {
    photo: annoyed,
    verse: `this is the face I get\nright after I'vve said some dumb shit.`
  },
  {
    photo: sexy,
    verse: `and then you go and look like THIS.\nlike hello?? Leave junior alone shawty.`
  },
  {
    photo: glowing,
    verse: `you steal my clothes, I eat your snacks,\nI hog the bed, you judge my music.\nand I wouldn't trade a single bit of it.`,
  },
]

function PoemPage() {
  const pageRef = useRef(null)
  const lastScrollY = useRef(0)

  const spawnButterfly = useCallback(() => {
    const container = pageRef.current
    if (!container) return

    const el = document.createElement('img')
    el.src = butterflies
    el.className = 'scroll-butterfly'
    el.alt = ''

    // random size between 60-120px
    const size = 60 + Math.random() * 60
    el.style.width = `${size}px`
    el.style.height = `${size}px`

    // start from a random horizontal position
    const startX = Math.random() * 100
    el.style.left = `${startX}vw`

    // spawn near the current viewport
    const scrollY = window.scrollY
    const viewportH = window.innerHeight
    const spawnY = scrollY + viewportH * (0.2 + Math.random() * 0.6)
    el.style.top = `${spawnY}px`

    // random drift direction and rotation
    const driftX = -150 + Math.random() * 300
    const driftY = -(100 + Math.random() * 200)
    const rotation = -30 + Math.random() * 60
    el.style.setProperty('--drift-x', `${driftX}px`)
    el.style.setProperty('--drift-y', `${driftY}px`)
    el.style.setProperty('--rotation', `${rotation}deg`)

    // random animation duration
    const duration = 2.5 + Math.random() * 2
    el.style.animationDuration = `${duration}s`

    // random flip for variety
    if (Math.random() > 0.5) {
      el.style.transform = 'scaleX(-1)'
    }

    container.appendChild(el)

    // clean up after animation
    setTimeout(() => {
      el.remove()
    }, duration * 1000 + 100)
  }, [])

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const currentY = window.scrollY
        const delta = Math.abs(currentY - lastScrollY.current)

        // spawn butterflies based on scroll distance
        if (delta > 60) {
          const count = Math.min(Math.floor(delta / 80), 3)
          for (let i = 0; i < count; i++) {
            setTimeout(() => spawnButterfly(), i * 150)
          }
          lastScrollY.current = currentY
        }

        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [spawnButterfly])

  return (
    <div className="poem-page" ref={pageRef}>
      <div className="poem-hero">
        <h1 className="poem-hero-title">For Kuru baba </h1>
        <p className="poem-hero-subtitle">take out your glasses cus I know you're blind</p>
        <div className="scroll-indicator">
          <span>scroll down</span>
          <div className="scroll-arrow" />
        </div>
      </div>

      {poemSections.map((section, i) => (
        <div className="poem-section" key={i}>
          <div className="poem-section-content">
            <div className="poem-photo-wrapper">
              <img
                className="poem-photo"
                src={section.photo}
                alt={`kuru ${i + 1}`}
                loading="lazy"
              />
            </div>
            <div className="poem-text-block">
              <p className="poem-verse">
                {section.verse.split('\n').map((line, j) => (
                  <span key={j}>
                    {line}
                    {j < section.verse.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="poem-finale">
        <p className="poem-finale-text">
          ok fine I love you or whatever.
          <br />
          like a lot. an embarrassing amount actually. To the sweetest and coolest girl I know. Happy valentines kuru baba. Okay now go get ready, we're LATE.
        </p>
        <div className="poem-finale-heart">&#10084;&#65039;</div>
      </div>
    </div>
  )
}

export default PoemPage
